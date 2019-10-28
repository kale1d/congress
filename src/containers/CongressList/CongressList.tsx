import React, {FC, useState, useEffect} from 'react';
import axios from 'axios';
import { CongressMember } from '../../models/models';
import './CongressListStyles.scss';

const CongressList: FC = () => {
  const [members, setMembers]: any[] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
     const result = await axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {headers: {
      'X-API-Key': 'GcA9m1XG4KrtYDZQ0LNnEScScnKrp9Nqi3dKHv2y'}})
      setMembers(result.data.results[0].members)
    };
    fetchData();    
  }, [])
  console.log(members)
  return(
    <div className="membersList">
      <div className="membersList__titleContainer">
        <p className="membersList__titleContainer__title">
          Name
        </p>
        <p className="membersList__titleContainer__title">
          Party
        </p>
        <p className="membersList__titleContainer__title">
          Gender
        </p>
      </div>
      {members && members.map ((member:CongressMember, index:number) => 
        <>
        <div className="membersList__member" key={index}>
          <p className="membersList__member__name"> {member.short_title} {member.first_name} {member.last_name} </p>
          <p className="membersList__member__name"> {member.party === 'R' ? 'Republicans': 'Democrats' }</p>

        </div>
        <div>
        </div>
        </>
      )}
    </div>
  );
}

export default CongressList;