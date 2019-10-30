import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { CongressMember } from "../../models/models";
import "./CongressPersonDetailStyles.scss";

type Props = RouteComponentProps;

const CongressPersonDetail: FC<Props> = ({ location }) => {
  const memberInfo: CongressMember = location.state.data;
  console.log(memberInfo);
  return (
    <div className="memberInfo">
      <div className="memberInfo__mainInfo">
        <div>
          <h3>Personal Information</h3>
          <span>Name: </span>
          <span>
            {memberInfo.first_name} {memberInfo.last_name}
          </span>
        </div>
        <div>
          <span>Title: </span> <span>{memberInfo.title}</span>
        </div>
        <div>
          <span>Party: </span> <span>{memberInfo.party}</span>
        </div>
        <div>
          <span>State: </span> <span>{memberInfo.state}</span>
        </div>
      </div>
      <div className="memberInfo__contactInfo">
        <h3>Contact Information</h3>
        <div>
          <span>URL: </span>{" "}
          <span>
            <a href={memberInfo.url} target="_blank">
              {memberInfo.url}
            </a>
          </span>
        </div>
        <h4>Social Media</h4>
        <div>
          <span>
            <img
              src="../../utils/icons/youtube.png"
              alt="Youtube"
              width="42"
              height="42"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default CongressPersonDetail;
