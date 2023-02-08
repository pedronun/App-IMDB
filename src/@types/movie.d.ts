export interface IMovie {
  id: string;
  title: string;
  originalTitle: string;
  fullTitle: string;
  type: string;
  year: string;
  image: string;
  releaseDate: string;
  runtimeMins: string;
  runtimeStr: string;
  plot: string;
  plotLocal: string;
  plotLocalIsRtl: false;
  awards: string;
  directors: string;
  directorList: [
    {
      id: string;
      name: string;
    }
  ];
  writers: string;
  writerList: [
    {
      id: string;
      name: string;
    }
  ];
  stars: string;
  starList: [
    {
      id: string;
      name: string;
    }
  ];
  actorList: [
    {
      id: string;
      image: string;
      name: string;
      asCharacter: string;
    }
  ];
  fullCast: string;
  genres: string;
  genreList: [
    {
      key: string;
      value: string;
    }
  ];
  companies: string;
  companyList: [
    {
      id: string;
      name: string;
    }
  ];
  countries: string;
  countryList: [
    {
      key: string;
      value: string;
    }
  ];
  languages: string;
  languageList: [
    {
      key: string;
      value: string;
    }
  ];
  contentRating: string;
  imDbRating: string;
  imDbRatingVotes: string;
  metacriticRating: string;
  ratings: string;
  posters: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    posters: [];
    backdrops: [];
    errorMessage: string;
  };
  trailer: {
    imDbId: string;
    title: string;
    fullTitle: string;
    type: string;
    year: string;
    videoId: string;
    videoTitle: string;
    videoDescription: string;
    thumbnailUrl: string;
    uploadDate: string;
    link: string;
    linkEmbed: string;
    errorMessage: string;
  };
  boxOffice: {
    budget: string;
    openingWeekendUSA: string;
    grossUSA: string;
    cumulativeWorldwideGross: string;
  };
  tagline: string;
  keywords: string;
  keywordList: [string];
  similars: [
    {
      id: string;
      title: string;
      image: string;
      imDbRating: string;
    }
  ];
  tvSeriesInfo: string;
  tvEpisodeInfo: string;
  errorMessage: string;
}
