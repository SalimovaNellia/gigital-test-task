import { TagInterface } from 'src/app/shared/types/tag.interface';

export interface ArtistInterface {
  id: number,
  name: string,
  picture: string,
  price: number,
  tags: TagInterface[],
  video: string
}
