import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { useSearchParams } from "react-router-dom";
import { MetaData, Player } from "types";

interface ReturnValue {
  players: Player[],
  meta: MetaData,
  loading: boolean,
  error: AxiosError | null,
}

export const usePlayers = (): ReturnValue => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('playerPage') || 1;
  const perPage = searchParams.get('playerPerPage') || 8;

  const [ { data, loading, error } ] = useAxios(`https://www.balldontlie.io/api/v1/players?page=${page}&per_page=${perPage}`);

  return {
    players: data && data.data,
    meta: data && data.meta,
    loading,
    error,
  }
}