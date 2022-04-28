import * as ExpoLocation from "expo-location";
import React, { useEffect, useState } from "react";
import { Text } from "react-native";
import { ILocation } from "../interfaces/ILocation";

export default function Location() {
  const [location, setLocation] = useState<ILocation | null>(null);
  const [error, setError] = useState<string | null>(null);

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

  let text = "Waiting..";
  if (error) {
    text = error;
  } else if (location) {
    text = JSON.stringify(location);
  }

  return <Text>{text}</Text>;
}
