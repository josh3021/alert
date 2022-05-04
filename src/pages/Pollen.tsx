import { useCallback, useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchAPI } from "../api";
import Layout from "../components/Layout";
import { ITEMS } from "../constants/AlertStep";
import { IOakApiResponse } from "../interfaces/IApiResponse";
import { regionState } from "../recoil/atoms/location";

export default function Pollen() {
  const [data, setData] = useState<IOakApiResponse>();
  const region = useRecoilValue(regionState);
  const fetchPollenRisk = useCallback(async (region) => {
    if (!region) return;
    const response = await fetchAPI(ITEMS.OAK_POLLEN_RISK, region.code);
    console.log(response);
  }, []);
  useEffect(() => {
    fetchPollenRisk(region);
  }, [region]);
  return <Layout />;
}
