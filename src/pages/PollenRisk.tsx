import { useFocusEffect } from "@react-navigation/native";
import { useCallback, useState } from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { fetchData } from "~/api/data";
import PollenLayout from "~/components/PollenLayout";
import { ITEMS, ITEMS_URI } from "~/constants/common";
import {
  oakPollenItemState,
  pinePollenItemState,
  weedsPollenItemState,
} from "~/recoil/atoms/api/dataItem";
import {
  oakPollenNotProvidingState,
  pinePollenNotProvidingState,
  weedsPollenNotProvidingState,
} from "~/recoil/atoms/api/notProviding";
import { itemState } from "~/recoil/atoms/item";
import { regionState } from "~/recoil/atoms/region";

export default function PollenRisk() {
  const setOakPollenItemState = useSetRecoilState(oakPollenItemState);
  const setPinePollenItemState = useSetRecoilState(pinePollenItemState);
  const setWeedsPollenItemState = useSetRecoilState(weedsPollenItemState);
  const setOakPollenNotProvidingState = useSetRecoilState(
    oakPollenNotProvidingState
  );
  const setPinePollenNotProvidingState = useSetRecoilState(
    pinePollenNotProvidingState
  );
  const setWeedsPollenNotProvidingState = useSetRecoilState(
    weedsPollenNotProvidingState
  );
  const setItem = useSetRecoilState(itemState);
  const region = useRecoilValue(regionState);
  const [loading, setLoading] = useState(true);
  useFocusEffect(
    useCallback(() => {
      setItem(ITEMS.POLLEN_RISK);
      setLoading(true);
      (async () => {
        if (!region) return;
        setOakPollenNotProvidingState(null);
        setPinePollenNotProvidingState(null);
        setWeedsPollenNotProvidingState(null);
        setOakPollenItemState(null);
        setPinePollenItemState(null);
        setWeedsPollenItemState(null);
        const [oakResponse, pineResponse, weedsResponse] = await Promise.all([
          fetchData(ITEMS_URI.OAK_POLLEN_RISK, region.code),
          fetchData(ITEMS_URI.PINE_POLLEN_RISK, region.code),
          fetchData(ITEMS_URI.WEEDS_POLLEN_RISK, region.code),
        ]);
        const oakData = oakResponse.data;
        if (oakData.response.header.resultCode === "99") {
          const messages = oakData.response.header.resultMsg
            .replace("! ", "!\n")
            .split("\n");
          setOakPollenNotProvidingState({
            code: "99",
            message: messages[0],
            providingRangeDescription: messages[1],
          });
        } else {
          const item = oakData.response.body.items.item[0];
          setOakPollenItemState(item);
        }
        const pineData = pineResponse.data;
        if (pineData.response.header.resultCode === "99") {
          const messages = pineData.response.header.resultMsg
            .replace("! ", "!\n")
            .split("\n");
          setPinePollenNotProvidingState({
            code: "99",
            message: messages[0],
            providingRangeDescription: messages[1],
          });
        } else {
          const item = pineData.response.body.items.item[0];
          setPinePollenItemState(item);
        }
        const weedsData = weedsResponse.data;
        if (weedsData.response.header.resultCode === "99") {
          const messages = weedsData.response.header.resultMsg
            .replace("! ", "!\n")
            .split("\n");
          setWeedsPollenNotProvidingState({
            code: "99",
            message: messages[0],
            providingRangeDescription: messages[1],
          });
        } else {
          const item = weedsData.response.body.items.item[0];
          setWeedsPollenItemState(item);
        }
        setLoading(false);
      })();
    }, [region])
  );
  return <PollenLayout loading={loading} />;
}
