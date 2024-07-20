import { AxiosCall } from "../entities/axios-call.entity";
import { AxiosResponse } from "axios";
import { useEffect } from "react";

const useFetchAndLoad = (setLoading: (value: boolean) => void) => {
  let controller: AbortController;

  const callEndpoint = async <T>(axiosCall: AxiosCall<T>) => {
    if (axiosCall.controller) controller = axiosCall.controller;
    setLoading(true);
    let result = {} as AxiosResponse<T>;
    try {
      result = await axiosCall.call;
    } catch (err: any) {
      setLoading(false);
      throw err;
    }

    setLoading(false);
    return result;
  };

  const cancelEndpoint = () => {
    setLoading(false);
    controller && controller.abort();
  };

  useEffect(() => {
    return () => {
      cancelEndpoint();
    };
  }, []);

  return { callEndpoint };
};

export default useFetchAndLoad;
