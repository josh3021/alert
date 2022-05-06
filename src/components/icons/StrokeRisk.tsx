import { FontAwesome5 } from "@expo/vector-icons";
import { IIcon } from "~/interfaces/IIcon";

export const StrokeRiskIcon = ({ size, color }: IIcon) => (
  <FontAwesome5 name="brain" size={size} color={color} />
);
