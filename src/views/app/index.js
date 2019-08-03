import { createStackNavigator } from "react-navigation";

import Enterprises from "./Enterprises";

export default createStackNavigator(
  { Enterprises },
  { initialRouteName: "Enterprises", headerMode: 'none' }
);
