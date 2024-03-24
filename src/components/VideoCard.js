const VideoCard = ({ info }) => {
  const { snippet, statistics } = info;
  const { channelTitle, title, thumbnails } = snippet;
  return (
    <div className="my-8 font-Roboto w-[350px] h-fit ">
      <img
        className="w-full rounded-xl object-cover"
        src={thumbnails.medium?.url}
        alt="thumbnail"
      />
      <ul className="py-3">
        <li className="text-[1rem] font-medium">
          {title.length < 80 ? title : title.substr(0, 80) + "..."}
        </li>
        <li className="text-sm">{channelTitle}</li>
        <li className="text-sm">{statistics.viewCount} views</li>
      </ul>
    </div>
  );
};

// Higher order component
export const RedBorderVideoCard = ({ info }) => {
  return (
    <div className="p-1 border border-red-500">
      <VideoCard info={info} />
    </div>
  );
};

export default VideoCard;
