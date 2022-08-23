import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { Player } from "types";

interface ReturnValue {
  players: Player[],
  loading: boolean,
  error: AxiosError | null,
  refetch: () => void,
}

export const usePlayers = (): ReturnValue => {
  // TODO handle queryParams
  const [ { data, loading, error }, refetch ] = useAxios("https://www.balldontlie.io/api/v1/players?per_page=8");

  console.log(data)

  return {
    players: data && data.data,
    loading,
    error,
    refetch,
  }
}