const Videos = ({ YouTubeVideo }: any) => {
  return (
    <div className="grid grid-cols-3 gap-y-3 gap-x-3">
      {YouTubeVideo?.items?.slice(0, 3).map((video: Video) => (
        <iframe
          width="100%"
          height="315"
          src={`https://www.youtube.com/embed/${video.id}`}
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
