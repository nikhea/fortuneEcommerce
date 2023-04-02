import Link from "next/link";

const Videos = ({ YouTubeVideo }: any) => {
  console.log(YouTubeVideo);

  return (
    <div className="grid grid-cols-3 gap-y-3">
      {YouTubeVideo?.items?.slice(0, 8).map((video: Video) => (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
          frameBorder="0"
          allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
        ></iframe>
      ))}
    </div>
  );
};
// width="560"
// height="315"
export default Videos;

interface Video {
  id: string;
  title: string;
  description: string;
  thumbnail: string;
  bestThumbnail: any;
  url: string;
}

interface YouTubeApiResponse {
  results: Video[];
}
{
  /* <Link key={video.id} href={video.url}>
<div>
  <img src={video?.bestThumbnail?.url} />
  <div key={video.id}>{video.title}</div>
</div>
</Link> */
}
