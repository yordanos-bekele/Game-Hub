import useData from "./useData";

export interface genre{
    id: number;
    name: string;
    slug: string;
    image_background: string;
}

export interface FetchGenreResponse{
    count: number;
    results: genre[]
}

const useGenre = ()=> useData<genre>('/genres')
   

export default useGenre;