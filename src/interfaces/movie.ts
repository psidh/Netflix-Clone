interface Movie  {
  _id: string;
  title: string;
  videolink: string;
  youtube: string;
  primaryposter: string;
  secondaryposter: string;
  genre: string;
  releaseYear?: number;
  rating?: number;
  description?: string;
}

export default Movie;