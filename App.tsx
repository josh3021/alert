import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import Pollen from "./src/pages/Pollen";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator>
          <Tab.Screen name="천식폐질환" component={Pollen} />
          <Tab.Screen name="뇌졸중" component={Pollen} />
          <Tab.Screen name="꽃가루" component={Pollen} />
          <Tab.Screen name="감기" component={Pollen} />
          <Tab.Screen name="식중독" component={Pollen} />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
