export type Film = {
  id: number;
  posterSrc: string;
  title: string;
  altTitle: string;
  videoUrl: string;
  genre: string;
  releaseDate: string;
  director: string;
  actors: string[];
  runTime: string;
  description: string;
  ratingScore: number;
  ratingLevel: string;
  ratingCount: number;
};
export type Films = Film[]
