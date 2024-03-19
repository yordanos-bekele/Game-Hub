import { genre } from "../services/hook/useGenre";

interface Props {
  genres: genre[];
}

const GenreList = ({ genres }: Props) => {
  return (
    <ul>
      {genres.map((genre) => (
        <li key={genre.id}>{genre.name}</li>
      ))}
    </ul>
  );
};

export default GenreList;
