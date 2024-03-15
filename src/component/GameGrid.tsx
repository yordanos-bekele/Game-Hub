import { useEffect, useState } from "react";
import apiClient from "../services/api-client";
import { Text } from "@chakra-ui/react";

interface game {
  id: number;
  name: string;
}

interface FetchGamesResponse {
  count: number;
  results: game[];
}

const GameGrid = () => {
  const [games, setGames] = useState<game[]>([]);
  const [error, setError] = useState("");
  useEffect(() => {
    apiClient
      .get<FetchGamesResponse>("/games")
      .then((res) => setGames(res.data.results))
      .catch((err) => setError(err.message));
  });
  const apiDataLookUP = () => {
    console.log(games);
  };
  return (
    <>
      {apiDataLookUP}
      {error && <Text color="red">{error}</Text>}
      <ul>
        {games.map((game) => (
          <li key={game.id}>{game.name} </li>
        ))}
      </ul>
    </>
  );
};

export default GameGrid;
