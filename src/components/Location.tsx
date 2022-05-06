import * as ExpoLocation from "expo-location";
import { useEffect, useState } from "react";
import { Text } from "react-native";
import { useRecoilState, useSetRecoilState } from "recoil";
import datas from "~/data.json";
import { useGetRegion } from "~/hooks/useGetRegion";
import { locationState } from "~/recoil/atoms/location";
import { regionState } from "~/recoil/atoms/region";

export default function Location() {
  const setLocation = useSetRecoilState(locationState);
  const [region, setRegion] = useRecoilState(regionState);
  const [error, setError] = useState<string | null>(null);

  const data = useGetRegion();

  useEffect(() => {
    (async () => {
      const { status } = await ExpoLocation.requestForegroundPermissionsAsync();
      if (status !== ExpoLocation.PermissionStatus.GRANTED) {
        setError("Permission to access location was denied");
        return;
      }
      const {
        coords: { latitude, longitude },
        timestamp,
      } = await ExpoLocation.getCurrentPositionAsync({
        accuracy: ExpoLocation.LocationAccuracy.Low,
      });
      setLocation({ latitude, longitude, timestamp });
    })();
  }, []);

  if (error) {
    setRegion(null);
    setError(error);
  }

  useEffect(() => {
    if (data) {
      const r = datas.find(
        (d) =>
          d.region_1depth_name === data["region_1depth_name"] &&
          d.region_2depth_name === data["region_2depth_name"] &&
          d.region_3depth_name === data["region_3depth_name"]
      );
      setRegion(r ? r : null);
    }
  }, [data]);

  return (
    <Text style={{ color: "#FFF" }}>{`${
      region?.region_3depth_name
        ? `${region?.region_2depth_name} ${region?.region_3depth_name}`
        : "위치 찾는 중..."
    }`}</Text>
  );
}
