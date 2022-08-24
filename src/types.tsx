export interface NewTeam {
  name: string,
  city: string,
  abbreviation: string,
  conference: 'East' | 'West',
}
export interface Team extends NewTeam{
  id: number | string,
}

export interface MetaData {
  total_pages: number,
  current_page: number,
  per_page: number,
  total_count: number,
}

export interface Player {
  first_name: string,
  last_name: string,
  id: number,
}