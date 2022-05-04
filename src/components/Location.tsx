import * as ExpoLocation from "expo-location";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useRecoilState } from "recoil";
import datas from "~/data.json";
import { useFetchRegion } from "../api/region";
import { locationState, regionState } from "../recoil/atoms/location";

export default function Location() {
  const [location, setLocation] = useRecoilState(locationState);
  const [region, setRegion] = useRecoilState(regionState);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState<string>("Waiting..");

  const data = useFetchRegion();

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
      } = await ExpoLocation.getCurrentPositionAsync({});
      setLocation({ latitude, longitude, timestamp });
    })();
  }, []);

  if (error) {
    setText(error);
  }

  //
  // useEffect(() => {
  //   if (location) {
  //     (async () => {
  //       const  = (await fetchRegionCode(
  //         location
  //       )) as ICoord2RegionCode;

  //       setRegion({
  //         region: regionCode.documents[0].region_3depth_name,
  //         code: +regionCode.documents[0].code,
  //       });
  //     })();
  //   }
  // }, [location]);

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

  // useEffect(() => {

  // }, [region])

  // useEffect(() => {
  //   if (text && text !== "Waiting..") {
  //     const data = datas.find((data) => {
  //       return data.region3 === "text";
  //     });
  //     console.log(data);
  //   }
  // }, [text]);

  return <Text>{`${region?.region_3depth_name}`}</Text>;
}
