import ReactPlayer from "react-player/vimeo";
import Link from "next/link";
import { useEffect, useState } from "react";

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default function Vimeo(vimeoData) {
  const [height, setHeight] = useState(0);
  const [totalItems, setTotalItems] = useState(5);
  const listSize = vimeoData.VimeoData.length;
  const slice = vimeoData.VimeoData.slice(0, totalItems);

  function loadMore() {
    if (totalItems + 5 > listSize) {
      setTotalItems(listSize);
    } else {
      setTotalItems(totalItems + 5);
    }
  }

  useEffect(() => {
    function updateHeight() {
      if (window.innerWidth > 1439) {
        setHeight("60vh");
      } else {
        setHeight("40vh");
      }
    }
    window.addEventListener("resize", updateHeight);
    updateHeight();
    return () => window.removeEventListener("resize", updateHeight);
  }, []);

  return (
    <div className="vimeo" key="vimeo">
      {slice.map((videoObj, Index) => {
        console.log(videoObj);
        return (
          <div className="vimeo-container" key={Index}>
            <ReactPlayer
              url={videoObj.url}
              key={videoObj.title}
              width="100%"
              height={height}
              pip={true}
              controls={true}
              playing={false}
            />
            <Link href={videoObj.url}>
              <a>
                <span className="author">{videoObj.author}</span>
                <span className="title">{videoObj.title}</span>
                <span className="description">
                  {videoObj.description != null
                    ? truncate(videoObj.description, 184)
                    : ""}
                </span>
              </a>
            </Link>
          </div>
        );
      })}
      {totalItems === listSize ? (
        <></>
      ) : (
        <div className="load-more">
          <button className="load-button" onClick={() => loadMore()}>
            Load More
          </button>
        </div>
      )}
    </div>
  );
}
