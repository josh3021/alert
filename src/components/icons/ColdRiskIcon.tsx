import { FontAwesome5 } from "@expo/vector-icons";
import { IIcon } from "~/interfaces/IIcon";

export const ColdRiskIcon = ({ size, color }: IIcon) => (
  <FontAwesome5 name="head-side-cough" size={size} color={color} />
);
