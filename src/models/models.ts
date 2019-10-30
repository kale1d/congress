import { string } from "prop-types";

export interface CongressMember {
  id: string;
  title: string;
  name: string;
  date_of_birth: string;
  gender: string;
  party: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  url: string;
  state: string;
}
