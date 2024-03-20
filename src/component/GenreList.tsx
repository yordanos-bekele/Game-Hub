import { HStack, Image, List, ListItem, Text } from "@chakra-ui/react";
import { genre } from "../services/hook/useGenre";

interface Props {
  genres: genre[];
}

const GenreList = ({ genres }: Props) => {
  return (
    <List>
      <ListItem>
        {genres.map((genre) => (
          <HStack key={genre.id} paddingY={"5px"}>
            <Image
              key={genre.id}
              src={genre.image_background}
              boxSize={"32px"}
              borderRadius={"4px"}
            />
            <Text key={genre.id} fontSize={"lg"}>
              {genre.name}
            </Text>
          </HStack>
        ))}
      </ListItem>
    </List>
  );
};

export default GenreList;
