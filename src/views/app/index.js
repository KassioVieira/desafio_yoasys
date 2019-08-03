import { createStackNavigator } from "react-navigation";

import Enterprises from "./Enterprises";
import Description from "./Description";

export default createStackNavigator(
  { Enterprises,
    Description
  },
  { initialRouteName: "Enterprises", headerMode: 'none' }
);
