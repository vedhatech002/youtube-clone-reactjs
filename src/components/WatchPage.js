import { useParams, useSearchParams } from "react-router-dom";
import CommentsContainer from "./CommentsContainer";

const WatchPage = () => {
  const [searchParams] = useSearchParams();
  const videoId = searchParams.get("v");

  return (
    <section className="mt-6 px-8">
      <div>
        <iframe
          className="rounded-2xl"
          width="750"
          height="400"
          src={
            "https://www.youtube.com/embed/" + videoId + "?si=9vSooR1g1I3n2YSf"
          }
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerpolicy="strict-origin-when-cross-origin"
          allowFullScreen="true"
        ></iframe>
      </div>
      <CommentsContainer />
    </section>
  );
};

export default WatchPage;
