import Config from "../config";

export const fetchApi = async () => {
  console.log(Config.API_KEY);
  const response = await fetch(
    "http://apis.data.go.kr/1360000/HealthWthrIdxServiceV2/getOakPollenRiskIdxV2?dataType=JSON&areaNo=4143000000&time=2022042812&serviceKey=StW8EnzPod2WKP8WZJHvKf1BCIdhr9%2FWYNVRGyyDbf7z9J572Ji3Fi1Kx0wLGWvkq2M9FcWs3q2hnVW1TzfNHQ%3D%3D",
    { method: "GET" }
  );
  return response.json();
};
