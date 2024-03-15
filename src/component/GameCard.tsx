import { Card, CardBody, Heading, Image } from "@chakra-ui/react";
import { game } from "../services/hook/useGames";
interface Props {
  Game: game;
}

const GameCard = ({ Game }: Props) => {
  return (
    <Card borderRadius={10} overflow="hidden">
      <Image src={Game.background_image} />
      <CardBody>
        <Heading fontSize="2xl">{Game.name}</Heading>
      </CardBody>
    </Card>
  );
};

export default GameCard;
