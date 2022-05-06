import { FontAwesome5 } from "@expo/vector-icons";
import { IIcon } from "~/interfaces/IIcon";

export const AsthmaRiskIcon = ({ size, color }: IIcon) => (
  <FontAwesome5 name="lungs-virus" size={size} color={color} />
);
