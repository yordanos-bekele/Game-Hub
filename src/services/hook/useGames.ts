import { useEffect, useState } from "react";
import apiClient from "../api-client";
import { CanceledError } from "axios";

export interface game {
    id: number;
    name: string;
    background_image: string
  }
  
  interface FetchGamesResponse {
    count: number;
    results: game[];
  }

const useGames = ()=>{
    const [games, setGames] = useState<game[]>([]);
    const [error, setError] = useState("");
    useEffect(() => {
        const controller = new AbortController();
        apiClient
        .get<FetchGamesResponse>("/games", {signal: controller.signal})
        .then((res) => setGames(res.data.results))
        .catch((err) => {
            if(err instanceof CanceledError) return 
            setError(err.message)
        });

        return ()=> controller.abort();
  });
  return {games, error}
}

export default useGames