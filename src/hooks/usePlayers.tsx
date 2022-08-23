import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { MetaData, Player } from "types";

interface ReturnValue {
  players: Player[],
  meta: MetaData,
  loading: boolean,
  error: AxiosError | null,
}

export const usePlayers = (page: number, per_page: number): ReturnValue => {
  const [ { data, loading, error } ] = useAxios(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${per_page}`);

  return {
    players: data && data.data,
    meta: data && data.meta,
    loading,
    error,
  }
}