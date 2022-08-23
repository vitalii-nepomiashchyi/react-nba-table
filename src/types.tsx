export interface Team {
  name: string,
  city: string,
  abbreviation: string,
  conference: 'East' | 'West',
}

export interface Player {
  first_name: string,
  last_name: string,
}