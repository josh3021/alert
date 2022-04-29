import { useState } from "react";
import Layout from "../components/Layout";
import { IOakApiResponse } from "../interfaces/IApiResponse";

export default function Pollen() {
  const [data, setData] = useState<IOakApiResponse>();

  return <Layout />;
}
