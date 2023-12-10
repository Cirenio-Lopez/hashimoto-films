import { InstagramEmbed } from "react-social-media-embed";
import { useEffect, useState } from "react";

function truncate(str, n) {
  return str.length > n ? str.substr(0, n - 1) + "..." : str;
}

export default function Instagram(instaData) {
  const [height, setHeight] = useState(0);
  const [totalItems, setTotalItems] = useState(5);
  const listSize = instaData.instaData.length;
  const slice = instaData.instaData.slice(0, totalItems);

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
    <div className="insta" key="insta">
      {slice.map((videoObj, Index) => {
        // console.log(videoObj);
        return (
          <div className="insta-container" key={Index}>
            <InstagramEmbed url={videoObj} width={450} />
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
