import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { useSearchParams } from "react-router-dom";
import { Team, MetaData } from "types";


interface ReturnValue {
  teams: Team[],
  meta: MetaData,
  loading: boolean,
  error: AxiosError | null,
}

export const useTeams = (): ReturnValue => {
  const [searchParams] = useSearchParams();

  const page = searchParams.get('teamPage') || 1;
  const perPage = searchParams.get('teamPerPage') || 10;
  
  const [ { data, loading, error } ] = useAxios(`https://www.balldontlie.io/api/v1/teams?page=${page}&per_page=${perPage}`);

  return {
    teams: data && data.data,
    meta: data && data.meta,
    loading,
    error,
  }
}