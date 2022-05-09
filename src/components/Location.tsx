import * as ExpoLocation from "expo-location";
import { useEffect, useState } from "react";
import { StyleSheet, Text } from "react-native";
import { useRecoilState } from "recoil";
import { Region } from "~/api/region";
import config from "~/config";
import regionDatas from "~/data.json";
import { IRegionCodeDocument } from "~/interfaces/api/kakao/ICoord2RegionCode";
import { locationState } from "~/recoil/atoms/location";
import { regionState } from "~/recoil/atoms/region";

export default function Location() {
  const [location, setLocation] = useRecoilState(locationState);
  const [region, setRegion] = useRecoilState(regionState);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<IRegionCodeDocument>();
  // const data = useGetRegion();

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

  useEffect(() => {
    if (!error) return;
    console.error(error);
  }, [error]);

  useEffect(() => {
    if (!location) return;
    (async () => {
      const { longitude, latitude } = location;
      const response = await Region.getRegion(
        `${config.KAKAO_ADDRESS_REST_API_URI}&x=${longitude}&y=${latitude}`,
        { headers: { Authorization: `KakaoAK ${config.KAKAO_REST_API_KEY}` } }
      );
      if (response.status === 200) {
        const documents = response.data.documents;
        if (!documents) return setData(undefined);
        setData(documents.find((d) => d.region_type === "H"));
      }
    })();
  }, [location]);

  useEffect(() => {
    if (data) {
      const r = regionDatas.find(
        (d) =>
          d.region_1depth_name === data["region_1depth_name"] &&
          d.region_2depth_name === data["region_2depth_name"] &&
          d.region_3depth_name === data["region_3depth_name"]
      );
      setRegion(r ? r : null);
    }
  }, [data]);

  return (
    <Text style={styles.locationText}>{`${
      region?.region_3depth_name
        ? `${region?.region_2depth_name} ${region?.region_3depth_name}`
        : "위치 찾는 중..."
    }`}</Text>
  );
}

const styles = StyleSheet.create({
  locationText: {
    fontSize: 40,
    fontWeight: "300",
    color: "#FFF",
  },
});
