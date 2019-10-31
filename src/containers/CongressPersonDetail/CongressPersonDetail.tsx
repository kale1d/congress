import React, { FC } from "react";
import { RouteComponentProps } from "react-router";
import { CongressMember } from "../../models/models";
import "./CongressPersonDetailStyles.scss";

type Props = RouteComponentProps;

const CongressPersonDetail: FC<Props> = ({ location, history }) => {
  const memberInfo: CongressMember = location.state.data;
  return (
    <div className="memberWrapper">
      <div
        onClick={() => history.goBack()}
        className="memberWrapper-backButton"
      >
        Back
      </div>
      <div className="memberWrapper__memberInfo">
        <div className="memberWrapper__memberInfo__mainInfo">
          <div>
            <h3>Personal Information</h3>
            <span>Name: </span>
            <span>{memberInfo.name}</span>
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
        <div className="memberWrapper__memberInfo__contactInfo">
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
          <div className="memberWrapper__memberInfo__contactInfo-social">
            <span className="memberWrapper__memberInfo__contactInfo-social-icon">
              <a
                href={`https://www.youtube.com/${memberInfo.youtube_account}`}
                target="_blank"
              >
                <svg viewBox="0 0 512 512" width="30" height="30">
                  <path d="M490.24,113.92c-13.888-24.704-28.96-29.248-59.648-30.976C399.936,80.864,322.848,80,256.064,80c-66.912,0-144.032,0.864-174.656,2.912c-30.624,1.76-45.728,6.272-59.744,31.008C7.36,138.592,0,181.088,0,255.904C0,255.968,0,256,0,256c0,0.064,0,0.096,0,0.096v0.064c0,74.496,7.36,117.312,21.664,141.728c14.016,24.704,29.088,29.184,59.712,31.264C112.032,430.944,189.152,432,256.064,432c66.784,0,143.872-1.056,174.56-2.816c30.688-2.08,45.76-6.56,59.648-31.264C504.704,373.504,512,330.688,512,256.192c0,0,0-0.096,0-0.16c0,0,0-0.064,0-0.096C512,181.088,504.704,138.592,490.24,113.92z M192,352V160l160,96L192,352z" />
                </svg>
              </a>
            </span>
            <span>{memberInfo.youtube_account}</span>
          </div>
          <div className="memberWrapper__memberInfo__contactInfo-social">
            <span className="memberWrapper__memberInfo__contactInfo-social-icon">
              <a
                href={`https://www.facebook.com/${memberInfo.facebook_account}`}
                target="_blank"
              >
                <svg viewBox="0 0 96.124 96.123" width="30" height="30">
                  <path d="M72.089,0.02L59.624,0C45.62,0,36.57,9.285,36.57,23.656v10.907H24.037c-1.083,0-1.96,0.878-1.96,1.961v15.803c0,1.083,0.878,1.96,1.96,1.96h12.533v39.876c0,1.083,0.877,1.96,1.96,1.96h16.352c1.083,0,1.96-0.878,1.96-1.96V54.287h14.654c1.083,0,1.96-0.877,1.96-1.96l0.006-15.803c0-0.52-0.207-1.018-0.574-1.386c-0.367-0.368-0.867-0.575-1.387-0.575H56.842v-9.246c0-4.444,1.059-6.7,6.848-6.7l8.397-0.003c1.082,0,1.959-0.878,1.959-1.96V1.98C74.046,0.899,73.17,0.022,72.089,0.02z" />
                </svg>
              </a>
            </span>
            <span>{memberInfo.facebook_account}</span>
          </div>

          <div className="memberWrapper__memberInfo__contactInfo-social">
            <span className="memberWrapper__memberInfo__contactInfo-social-icon">
              <a
                href={`https://www.twitter.com/${memberInfo.twitter_account}`}
                target="_blank"
              >
                <svg viewBox="0 0 612 612" width="30" height="30">
                  <path d="M612,116.258c-22.525,9.981-46.694,16.75-72.088,19.772c25.929-15.527,45.777-40.155,55.184-69.411c-24.322,14.379-51.169,24.82-79.775,30.48c-22.907-24.437-55.49-39.658-91.63-39.658c-69.334,0-125.551,56.217-125.551,125.513c0,9.828,1.109,19.427,3.251,28.606C197.065,206.32,104.556,156.337,42.641,80.386c-10.823,18.51-16.98,40.078-16.98,63.101c0,43.559,22.181,81.993,55.835,104.479c-20.575-0.688-39.926-6.348-56.867-15.756v1.568c0,60.806,43.291,111.554,100.693,123.104c-10.517,2.83-21.607,4.398-33.08,4.398c-8.107,0-15.947-0.803-23.634-2.333c15.985,49.907,62.336,86.199,117.253,87.194c-42.947,33.654-97.099,53.655-155.916,53.655c-10.134,0-20.116-0.612-29.944-1.721c55.567,35.681,121.536,56.485,192.438,56.485c230.948,0,357.188-191.291,357.188-357.188l-0.421-16.253C573.872,163.526,595.211,141.422,612,116.258z" />
                </svg>
              </a>
            </span>
            <span>{memberInfo.twitter_account}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CongressPersonDetail;
