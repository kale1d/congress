import axios from "axios";
import { CongressMember } from "../models/models";

const API_KEY: string = "GcA9m1XG4KrtYDZQ0LNnEScScnKrp9Nqi3dKHv2y";

axios.create({
  baseURL: "https://api.propublica.org/congress/v1",
  headers: {
    "X-API-Key": API_KEY
  }
});

export const getMembers: any = (congress: number, chamber: string) => {
  const fetchData = async () => {
    try {
      return await axios.get(
        `https://api.propublica.org/congress/v1/${congress}/${chamber}/members.json`,
        {
          headers: {
            "X-API-Key": "GcA9m1XG4KrtYDZQ0LNnEScScnKrp9Nqi3dKHv2y"
          }
        }
      );
    } catch (error) {
      console.error(error);
    }
  };
  return fetchData();
};
