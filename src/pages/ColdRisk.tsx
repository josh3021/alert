import { useFocusEffect } from "@react-navigation/native";
import { useCallback } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchData } from "~/api/data";
import Layout from "~/components/Layout";
import { ITEMS, ITEMS_URI } from "~/constants/common";
import { dataItemState } from "~/recoil/atoms/api/dataItem";
import { notProvidingState } from "~/recoil/atoms/api/notProviding";
import { itemState } from "~/recoil/atoms/item";
import { regionState } from "~/recoil/atoms/region";

export default function ColdRisk() {
  const setDataItem = useSetRecoilState(dataItemState);
  const setNotProvidingState = useSetRecoilState(notProvidingState);
  const setItem = useSetRecoilState(itemState);
  const region = useRecoilValue(regionState);
  useFocusEffect(
    useCallback(() => {
      setItem(ITEMS.COLD_RISK);
      (async () => {
        if (!region) return;
        setNotProvidingState(null);
        setDataItem(null);
        const response = await fetchData(ITEMS_URI.COLD_RISK, region.code);
        if (response.status === 200) {
          const data = response.data;
          if (data.response.header.resultCode === "99") {
            const messages = data.response.header.resultMsg
              .replace("! ", "!\n")
              .split("\n");
            setNotProvidingState({
              code: "99",
              message: messages[0],
              providingRangeDescription: messages[1],
            });
            return;
          }
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
  return <Layout />;
}
