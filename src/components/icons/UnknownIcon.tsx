import { FontAwesome5 } from "@expo/vector-icons";
import { IIcon } from "~/interfaces/IIcon";

export const UnknownIcon = ({ size, color }: IIcon) => (
  <FontAwesome5 name="question" size={size} color={color} />
);
