import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

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

const useGenre = ()=>{
   const [genres, setGenres] = useState<genre[]>([])
   const [error, setError] = useState('');
   const [isLoading, setIsLoading] = useState(false);

   useEffect(()=>{
    const controller = new AbortController();
    setIsLoading(true)
    apiClient.get<FetchGenreResponse>('https://api.rawg.io/api/genres', {signal: controller.signal})
            .then((res)=> {setGenres(res.data.results)
            setIsLoading(false)})
            .catch((err)=> {if(err instanceof CanceledError) return;
       
                 setError(err.message)
                 setIsLoading(false);
                })
                return ()=> controller.abort();     

   },[])
   return {genres, error, isLoading}
}
export default useGenre;