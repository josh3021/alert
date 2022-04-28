import { useEffect, useState } from "react";
import { fetchApi } from "../api";
import Layout from "../components/Layout";
import { IOakApiResponse } from "../interfaces/IApiResponse";

export default function Pollen() {
  const [data, setData] = useState<IOakApiResponse>();
  useEffect(() => {
    (async () => {
      const data = await fetchApi();
      setData(data);
    })();
  }, []);

  return <Layout />;
}
