import useGames from "../services/hook/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";

const GameGrid = () => {
  const { games, error } = useGames();

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 5 }}
        padding="15px"
        gap="15px"
      >
        {games.map((game) => (
          <GameCard key={game.id} Game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
