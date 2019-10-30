import React, { FC, useState, useEffect } from "react";
import { CongressMember } from "../../models/models";
import "./CongressListStyles.scss";
import { getMembers } from "../../utils/api";
import SearchInput from "../../components/SearchInput/SearchInput";
import { RouteComponentProps } from "react-router";

type Props = RouteComponentProps;

const CongressList: FC<Props> = ({ history }) => {
  const [members, setMembers] = useState<CongressMember[]>([]);
  const [membersFiltered, setMembersFiltered] = useState<CongressMember[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await getMembers(116, "senate");
      const data = result.data.results[0].members;
      setMembers(
        data.map((d: any) => {
          return {
            id: d.id,
            title: d.title,
            name: `${d.first_name} ${d.last_name}`,
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
    setMembersFiltered(members);
  }, []);

  useEffect(() => {}, [members, membersFiltered]);

  const filteredMembers = (
    members: CongressMember[],
    value: string,
    radio: string | null
  ) => {
    if (radio) {
      const filter = radio;
      const keyword = value;
      const filteredData = members.filter((obj: any) => {
        return String(obj[filter])
          .toLowerCase()
          .startsWith(keyword);
      });
      setMembersFiltered(filteredData);
    } else {
      const membersFiltered = members.filter(member => {
        return Object.values(member)
          .join(" ")
          .toLowerCase()
          .match(value.toLowerCase());
      });
      setMembersFiltered(membersFiltered);
    }
  };

  if (!members.length) {
    return <div className="loader"></div>;
  }
  return (
    <div className="congressList">
      <SearchInput data={members} onSearch={filteredMembers} />
      <div className="membersList">
        <div className="membersList__titleContainer">
          <div className="membersList__titleContainer-title">Name</div>
          <div className="membersList__titleContainer-title">Party</div>
          <div className="membersList__titleContainer-title">Gender</div>
          <div className="membersList__titleContainer-title">State</div>
          <div className="membersList__titleContainer-title">Detail</div>
        </div>
        {membersFiltered &&
          membersFiltered.map((member: CongressMember, index: number) => (
            <React.Fragment key={index}>
              <div className="membersList__member">
                <div className="membersList__member-name">{member.name}</div>
                <div className="membersList__member-name">{member.party}</div>
                <div className="membersList__member-name">{member.gender}</div>
                <div className="membersList__member-name">{member.state}</div>
                <div
                  className="membersList__member-name membersList__member-name--viewMore"
                  onClick={() =>
                    history.push({
                      pathname: "/detail",
                      state: { data: member }
                    })
                  }
                >
                  View More
                </div>
              </div>
            </React.Fragment>
          ))}
      </div>
    </div>
  );
};

export default CongressList;
