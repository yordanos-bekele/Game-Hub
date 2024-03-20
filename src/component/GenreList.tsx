import { HStack, Image, List, ListItem, Spinner, Text } from "@chakra-ui/react";
import { genre } from "../services/hook/useGenre";

interface Props {
  genres: genre[];
  isLoading: boolean;
  error: string;
}

const GenreList = ({ genres, isLoading, error }: Props) => {
  if (error) return null;
  if (isLoading) return <Spinner />;
  return (
    <List>
      <ListItem>
        {genres.map((genre) => (
          <>
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
          </>
        ))}
      </ListItem>
    </List>
  );
};

export default GenreList;
