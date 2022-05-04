import { useEffect, useState } from "react";
import { useRecoilValue } from "recoil";
import { fetchData } from "~/api/data";
import Layout from "~/components/Layout";
import { ITEMS } from "~/constants/common";
import { IOakAPIResponse } from "~/interfaces/api/data/pollen/IOak";
import { regionState } from "~/recoil/atoms/region";

export default function Pollen() {
  const [data, setData] = useState<IOakAPIResponse>();
  const region = useRecoilValue(regionState);
  useEffect(() => {
    (async () => {
      if (!region) return;
      console.log(region);
      const response = await fetchData(ITEMS.OAK_POLLEN_RISK, region.code);
      if (response.status === 200) {
        setData(response.data);
      }
    })();
  }, [region]);
  return <Layout />;
}
