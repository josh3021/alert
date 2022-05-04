import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import Config from "~/config";
import { useErrorHandler } from "../hooks/useErrorHandler";
import { useFetch } from "../hooks/useFetch";
import { locationState } from "../recoil/atoms/location";

export const useFetchRegion = () => {
  const location = useRecoilValue(locationState);
  const [data, setData] = useState();
  console.log(Config);
  useEffect(() => {
    if (location) {
      (async () => {
        const { data, error, status } = await useFetch({
          url: `${Config.KAKAO_ADDRESS_REST_API_URI}&x=${location.longitude}&y=${location.latitude}`,
          options: {
            headers: { Authorization: `KakaoAK ${Config.KAKAO_REST_API_KEY}` },
          },
        });
        useErrorHandler(error);
        console.log(data);
        if (data && status === 200) {
          setData(data);
        }
      })();
    }
  }, [location]);

  //@ts-ignore
  return data && data["documents"].find((d) => d.region_type === "H");
};
