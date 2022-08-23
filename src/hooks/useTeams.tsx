import { AxiosError } from "axios";
import useAxios from "axios-hooks"
import { useEffect } from "react";
import { Team, MetaData } from "types";


interface ReturnValue {
  teams: Team[],
  meta: MetaData,
  loading: boolean,
  error: AxiosError | null,
}

export const useTeams = (page: number, perPage: number,): ReturnValue => {
  const [ { data, loading, error } ] = useAxios(`https://www.balldontlie.io/api/v1/teams?page=${page}&per_page=${perPage}`);

  useEffect(() => {
    data && console.log(data.meta)
  }, [data])

  return {
    teams: data && data.data,
    meta: data && data.meta,
    loading,
    error,
  }
}