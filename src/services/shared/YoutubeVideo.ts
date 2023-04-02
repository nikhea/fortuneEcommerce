import axios from "axios";

export const FetchData = async (query: string) => {
  const video = await axios.get(
    "https://youtube-search-results.p.rapidapi.com/youtube-search/",
    {
      params: { q: query },
      headers: {
        "X-RapidAPI-Key": process.env.NEXT_PUBLIC_RapidAPI_Key,
        "X-RapidAPI-Host": process.env.NEXT_PUBLIC_RapidAPI_Host,
      },
    }
  );
  return video.data;
};
