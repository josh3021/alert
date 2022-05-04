import { TApiResponse } from "../interfaces/IApiResponse";

export const useFetch = async ({
  url,
  options,
}: {
  url: string;
  options?: RequestInit;
}): Promise<TApiResponse> => {
  try {
    console.log(url, options);
    const apiResponse = await fetch(url, options);
    const json = await apiResponse.json();
    return {
      status: apiResponse.status,
      statusText: apiResponse.statusText,
      data: json,
    };
  } catch (error) {
    return { error };
  }
};
