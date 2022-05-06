import { ParamListBase, RouteProp } from "@react-navigation/native";
import { ITEMS, ITEMS_KOREAN } from "~/constants/common";
import { AsthmaRiskIcon } from "./AsthmaRiskIcon";
import { ColdRiskIcon } from "./ColdRiskIcon";
import { FlowerRiskIcon } from "./FlowerRiskIcon";
import { StomachRiskIcon } from "./StomachRiskIcon";
import { StrokeRiskIcon } from "./StrokeRisk";
import { UnknownIcon } from "./UnknownIcon";

interface ITabBarIconProps {
  focused: boolean;
  color: string;
  size: number;
}

interface ISwitchIcon {
  route: RouteProp<ParamListBase, string>;
  tabBarIconProps: ITabBarIconProps;
}

export const SwitchIcon = ({ route, tabBarIconProps }: ISwitchIcon) => {
  switch (route.name) {
    case ITEMS_KOREAN.POLLEN_RISK:
      return <FlowerRiskIcon {...tabBarIconProps} />;
    case ITEMS_KOREAN.ASTHMA_RISK:
      return <AsthmaRiskIcon {...tabBarIconProps} />;
    case ITEMS_KOREAN.STROKE_RISK:
      return <StrokeRiskIcon {...tabBarIconProps} />;
    case ITEMS_KOREAN.COLD_RISK:
      return <ColdRiskIcon {...tabBarIconProps} />;
    case ITEMS_KOREAN.FOOD_POISONING_RISK:
      return <StomachRiskIcon {...tabBarIconProps} />;
  }
};

export const SwitchMainIcon = (item: ITEMS, risk: number) => {
  if (risk === -1) return <UnknownIcon size={128} color="#FFF" />;
  switch (item) {
    case ITEMS.ASTHMA_RISK:
      return <AsthmaRiskIcon size={128} color="#FFF" />;
    case ITEMS.STROKE_RISK:
      return <StrokeRiskIcon size={128} color="#FFF" />;
    case ITEMS.POLLEN_RISK:
      return <FlowerRiskIcon size={128} color="#FFF" />;
    case ITEMS.COLD_RISK:
      return <ColdRiskIcon size={128} color="#FFF" />;
    case ITEMS.FOOD_POISONING_RISK:
      return <StomachRiskIcon size={128} color="#FFF" />;
  }
};

export const switchRisk = (risk: number) => {
  switch (risk) {
    case 0:
      return "#3498db";
    case 1:
      return "#2ecc71";
    case 2:
      return "#e67e22";
    case 3:
      return "#e74c3c";
    default:
      return "#2c3e50";
  }
};
