import { useFocusEffect } from "@react-navigation/native";
import { AxiosResponse } from "axios";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchData } from "~/api/data";
import Layout from "~/components/Layout";
import { ITEMS, ITEMS_URI } from "~/constants/common";
import { IOakAPIResponse } from "~/interfaces/api/data/pollen/IOak";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { regionState } from "~/recoil/atoms/region";

export default function AsthmaRisk() {
  const setDataItem = useSetRecoilState(dataItemState);
  const region = useRecoilValue(regionState);

  useFocusEffect(
    useCallback(() => {
      (async () => {
        if (!region) return;
        const response = (await fetchData(
          ITEMS_URI.ASTHMA_RISK,
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
    }, [region])
  );

  return <Layout item={ITEMS.ASTHMA_RISK} />;
}
