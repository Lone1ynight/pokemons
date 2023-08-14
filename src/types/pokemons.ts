export interface Pokemon {
  name: string,
  url: string
}

export interface GetAllPokemons {
  count: number,
  next: string,
  previous: null,
  results: Pokemon[]
}

export interface Type {
  slot: number,
  type: {
    name: string,
    url: string
  }
}

export interface Stat {
  base_stat: number,
  effort: number,
  stat: {
    name: string,
    url: string
  }
}