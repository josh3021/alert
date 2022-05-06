import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { RecoilRoot } from "recoil";
import { SwitchIcon } from "./src/components/icons";
import { ITEMS_KOREAN } from "./src/constants/common";
import AsthmaRisk from "./src/pages/AsthmaRisk";
import ColdRisk from "./src/pages/ColdRisk";
import FoodPoisoningRisk from "./src/pages/FoodPoisoningRisk";
import PollenRisk from "./src/pages/PollenRisk";
import StrokeRisk from "./src/pages/StrokeRisk";

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <RecoilRoot>
      <NavigationContainer>
        <Tab.Navigator
          screenOptions={({ route }) => ({
            tabBarIcon: (tabBarIconProps) => (
              <SwitchIcon route={route} tabBarIconProps={tabBarIconProps} />
            ),
            tabBarActiveTintColor: "skyblue",
            tabBarInactiveTintColor: "silver",
          })}
          detachInactiveScreens={true}
        >
          <Tab.Screen
            name={ITEMS_KOREAN.ASTHMA_RISK}
            component={AsthmaRisk}
            navigationKey={ITEMS_KOREAN.ASTHMA_RISK}
          />
          <Tab.Screen
            name={ITEMS_KOREAN.COLD_RISK}
            component={ColdRisk}
            navigationKey={ITEMS_KOREAN.COLD_RISK}
          />
          <Tab.Screen
            name={ITEMS_KOREAN.POLLEN_RISK}
            component={PollenRisk}
            navigationKey={ITEMS_KOREAN.POLLEN_RISK}
          />
          <Tab.Screen
            name={ITEMS_KOREAN.STROKE_RISK}
            component={StrokeRisk}
            navigationKey={ITEMS_KOREAN.STROKE_RISK}
          />
          <Tab.Screen
            name={ITEMS_KOREAN.FOOD_POISONING_RISK}
            component={FoodPoisoningRisk}
            navigationKey={ITEMS_KOREAN.FOOD_POISONING_RISK}
          />
        </Tab.Navigator>
      </NavigationContainer>
    </RecoilRoot>
  );
}
