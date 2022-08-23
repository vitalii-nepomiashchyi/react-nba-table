import { AxiosError } from "axios";
import useAxios from "axios-hooks"

interface ReturnValue {
  teams: Team[],
  loading: boolean,
  error: AxiosError | null,
  refetch: () => void,
}

// Move to separate file
interface Team {
  name: string,
  city: string,
  abbreviation: string,
  conference: 'East' | 'West',
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