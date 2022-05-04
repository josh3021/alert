import { AxiosResponse } from "axios";
import { useEffect } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchData } from "~/api/data";
import Layout from "~/components/Layout";
import { ITEMS } from "~/constants/common";
import { IOakAPIResponse } from "~/interfaces/api/data/pollen/IOak";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { regionState } from "~/recoil/atoms/region";

export default function Pollen() {
  const setDataItem = useSetRecoilState(dataItemState);
  const region = useRecoilValue(regionState);
  useEffect(() => {
    (async () => {
      if (!region) return;
      const response = (await fetchData(
        ITEMS.OAK_POLLEN_RISK,
        region.code
      )) as AxiosResponse<IOakAPIResponse, any>;
      if (response.status === 200) {
        const item = response.data.response.body.items.item[0];
        if (!item) {
          console.error("no data item");
          return;
        }
        setDataItem(item);
      }
    })();
  }, [region]);
  return <Layout />;
}
