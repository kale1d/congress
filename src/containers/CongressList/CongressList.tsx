import React, { FC, useState, useEffect } from "react";
import { CongressMember } from "../../models/models";
import "./CongressListStyles.scss";
import { getMembers } from "../../utils/api";
import SearchInput from "../../components/SearchInput/SearchInput";

const CongressList: FC = () => {
  const [members, setMembers] = useState<CongressMember[]>([]);
  const [membersFiltered, setMembersFiltered] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMembers(116, "senate");
      const data = result.data.results[0].members;
      setMembers(
        data.map((d: CongressMember) => {
          return {
            id: d.id,
            title: d.title,
            short_title: d.short_title,
            first_name: d.first_name,
            middle_name: d.middle_name,
            last_name: d.last_name,
            date_of_birth: d.date_of_birth,
            gender: d.gender === "M" ? "Male" : "Female",
            party: d.party === "R" ? "Republican" : "Democrat",
            twitter_account: d.twitter_account,
            facebook_account: d.facebook_account,
            youtube_account: d.youtube_account,
            url: d.url,
            state: d.state
          };
        })
      );
    };
    fetchData();
  }, []);

  const filteredMembers = (members: CongressMember[], value: string) => {
    const membersFiltered = members.filter(member => {
      return Object.values(member)
        .join(" ")
        .toLowerCase()
        .match(value);
    });

    setMembers(membersFiltered);
  };

  if (!members.length) {
    return <div>Loading</div>;
  }
  return (
    <div className="congressList">
      <SearchInput data={members} onSearch={filteredMembers} />
      <div className="membersList">
        <div className="membersList__titleContainer">
          <p className="membersList__titleContainer__title">Name</p>
          <p className="membersList__titleContainer__title">Party</p>
          <p className="membersList__titleContainer__title">Gender</p>
          <p className="membersList__titleContainer__title">State</p>
        </div>
        {members &&
          members.map((member: CongressMember, index: number) => (
            <React.Fragment key={index}>
              <div className="membersList__member">
                <p className="membersList__member__name">
                  {member.short_title} {member.first_name} {member.last_name}
                </p>
                <p className="membersList__member__name">{member.party}</p>
                <p className="membersList__member__name">{member.gender}</p>
                <p className="membersList__member__name">{member.state}</p>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default CongressList;
