import useGames from "../services/hook/useGames";
import { SimpleGrid, Text } from "@chakra-ui/react";
import GameCard from "./GameCard";
import GameCardSkeleton from "./GameCardSkeleton";

const GameGrid = () => {
  const { data, error, isLoading } = useGames();
  const Skeletons = [1, 2, 3, 4, 5, 6];

  return (
    <>
      {error && <Text color="red">{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="15px"
        gap="15px"
      >
        {data.map((game) => (
          <>
            {isLoading ? (
              Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)
            ) : (
              <GameCard key={game.id} Game={game} />
            )}
          </>
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
