import { string } from "prop-types";

export interface CongressMember {
  id: string;
  title: string;
  short_title: string;
  first_name: string;
  middle_name: string | null;
  last_name: string;
  date_of_birth: string;
  gender: string;
  party: string;
  twitter_account: string;
  facebook_account: string;
  youtube_account: string;
  url: string;
  state: string;
}

export interface CheckboxItems {
  name: string;
  key: number;
}
