import { MaterialCommunityIcons } from "@expo/vector-icons";
import { IIcon } from "~/interfaces/IIcon";

export const StomachRiskIcon = ({ size, color }: IIcon) => (
  <MaterialCommunityIcons name="stomach" size={size} color={color} />
);
