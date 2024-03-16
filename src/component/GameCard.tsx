import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { game } from "../services/hook/useGames";
import PlatfomIconList from "./PlatfomIconList";
interface Props {
  Game: game;
}

const GameCard = ({ Game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={Game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{Game.name}</Heading>
        <PlatfomIconList
          platforms={Game.parent_platforms.map((p) => p.platform)}
        />
      </CardBody>
    </Card>
  );
};

export default GameCard;
