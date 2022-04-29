import * as ExpoLocation from "expo-location";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { useRecoilState } from "recoil";
import { fetchRegionCode } from "../api";
import { ICoord2RegionCode } from "../interfaces/kakao/ICoord2RegionCode";
import { locationState, regionState } from "../recoil/atoms/location";

export default function Location() {
  const [location, setLocation] = useRecoilState(locationState);
  const [region, setRegion] = useRecoilState(regionState);
  const [error, setError] = useState<string | null>(null);
  const [text, setText] = useState<string>("Waiting..");

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
  useEffect(() => {
    if (location) {
      (async () => {
        const regionCode = (await fetchRegionCode(
          location
        )) as ICoord2RegionCode;
        setRegion({
          region: regionCode.documents[0].region_3depth_name,
          code: +regionCode.documents[0].code,
        });
      })();
    }
  }, [location]);

  useEffect(() => {
    if (region?.region) {
      setText(region.region);
    }
  }, [region?.region]);

  return <Text>{text}</Text>;
}
