import Config from "../config";
import { IRegionCodeRequest } from "../interfaces/IApiRequest";

export const fetchApi = async () => {
  console.log(Config.API_KEY);
  const response = await fetch(
    `${Config.API_URI}&areaNo=4143000000&time=2022042812&serviceKey=${Config.API_KEY}`,
    { method: "GET" }
  );
  return response.json();
};

export const fetchRegionCode = async ({
  latitude,
  longitude,
}: IRegionCodeRequest) => {
  return (
    await fetch(
      `${Config.KAKAO_ADDRESS_REST_API_URI}&x=${longitude}&y=${latitude}`,
      { headers: { Authorization: `KakaoAK ${Config.KAKAO_REST_API_KEY}` } }
    )
  ).json();
};
