import axios from 'axios';
import { number, string } from 'prop-types';

//API KEY GcA9m1XG4KrtYDZQ0LNnEScScnKrp9Nqi3dKHv2y
const variables = {
  congress: number,
  chamber: string
}


export default axios.get('https://api.propublica.org/congress/v1/115/senate/members.json', {headers: {
  'X-API-Key': 'GcA9m1XG4KrtYDZQ0LNnEScScnKrp9Nqi3dKHv2y'
}});
