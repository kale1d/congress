import React, { FC, useState, useEffect } from "react";
import { CongressMember, CheckboxItems } from "../../models/models";
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
    setMembersFiltered(members);
  }, []);

  useEffect(() => {}, [members, membersFiltered]);

  const filteredMembers = (
    members: CongressMember[],
    value: string,
    checkbox: CheckboxItems
  ) => {
    const findFilter = (title: string) => {
      const filterKeys = Object.keys(checkbox);

      const key = filterKeys.find(element => element === title);
      console.log(key);
    };

    if (checkbox.checked) {
      findFilter("Name");
    }
    const membersFiltered = members.filter(member => {
      return Object.values(member)
        .join(" ")
        .toLowerCase()
        .match(value.toLowerCase());
    });
    setMembersFiltered(membersFiltered);
  };

  if (!members.length) {
    return <div className="loader"></div>;
  }
  return (
    <div className="congressList">
      <SearchInput data={members} onSearch={filteredMembers} />
      <div className="membersList">
        <div className="membersList__titleContainer">
          <div className="membersList__titleContainer__title">Name</div>
          <div className="membersList__titleContainer__title">Party</div>
          <div className="membersList__titleContainer__title">Gender</div>
          <div className="membersList__titleContainer__title">State</div>
          <div className="membersList__titleContainer__title">Detail</div>
        </div>
        {membersFiltered &&
          membersFiltered.map((member: CongressMember, index: number) => (
            <React.Fragment key={index}>
              <div className="membersList__member">
                <div className="membersList__member-name">
                  {member.short_title} {member.first_name} {member.last_name}
                </div>
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
