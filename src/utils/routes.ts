import CongressList from "../containers/CongressList/CongressList";
import CongressPersonDetail from "../containers/CongressPersonDetail/CongressPersonDetail";

export const routes = [
  {
    path: "/",
    component: CongressList
  },
  {
    path: "/detail",
    component: CongressPersonDetail
  }
];
