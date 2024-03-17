import { Card, CardBody, Heading, Image, HStack } from "@chakra-ui/react";
import { game } from "../services/hook/useGames";
import PlatfomIconList from "./PlatfomIconList";
import Score from "./Score";
import getCroppedImageUrl from "../services/getCroppedImageUrl";
interface Props {
  Game: game;
}

const GameCard = ({ Game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={getCroppedImageUrl(Game.background_image)} />
      <CardBody>
        <Heading fontSize="2xl">{Game.name}</Heading>
        <HStack justifyContent={"space-between"}>
          <PlatfomIconList
            platforms={Game.parent_platforms.map((p) => p.platform)}
          />
          <Score score={Game.metacritic} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
