export type Characters = {
  id: string;
  name: string;
  status: string;
  image: string;
};

export interface CharactersResponse {
  results: Characters[];
}

export interface CharactersRequest {
  page?: string;
}
