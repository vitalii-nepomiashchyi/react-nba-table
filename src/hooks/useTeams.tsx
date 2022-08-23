import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { Team } from "types";

interface ReturnValue {
  teams: Team[],
  loading: boolean,
  error: AxiosError | null,
  refetch: () => void,
}

export const useTeams = (): ReturnValue => {
  // TODO handle queryParams
  const [ { data, loading, error }, refetch ] = useAxios('https://www.balldontlie.io/api/v1/teams?per_page=10')

  return {
    teams: data && data.data,
    loading,
    error,
    refetch,
  }
}