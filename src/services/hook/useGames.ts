
import useData from "./useData";

export interface platform{
  id: number,
  name: string,
  slug: string
}

export interface game {
    id: number;
    name: string;
    background_image: string
    parent_platforms: {platform: platform}[]
    metacritic: number
   
  }
  
  

const useGames = ()=> useData<game>('/games')
   


export default useGames