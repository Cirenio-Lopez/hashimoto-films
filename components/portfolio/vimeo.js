import { Carousel } from "react-bootstrap";
import React from "react";
import ReactPlayer from "react-player/vimeo";
function Vimeo() {
  const videoProperties = [
    {
      id: 1,
      title: "Ultimatum",
      url: "https://vimeo.com/369174159",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 2,
      title: "Smile Promotional Video",
      url: "https://vimeo.com/483491728",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 3,
      title: "John Derryberry Portrait in Deep Ellum",
      url: "https://vimeo.com/474823378",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 4,
      title: "Press Wilson Senior Video",
      url: "https://vimeo.com/499049140",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 5,
      title: "Women",
      url: "https://vimeo.com/474304394",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 6,
      title: "Operation Kama",
      url: "https://vimeo.com/247418165",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 7,
      title: "Duplication",
      url: "https://vimeo.com/503623698",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 8,
      title: "Driving Lesson BTS",
      url: "https://vimeo.com/472360775",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 9,
      title: "Upgrade",
      url: "https://vimeo.com/379171760",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 10,
      title: "Blind Heights",
      url: "https://vimeo.com/379185504",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 11,
      title: "Smile Character Introduction",
      url: "https://vimeo.com/478159286",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 12,
      title: "Sad Waffle",
      url: "https://vimeo.com/368068715",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 13,
      title: "Cereal Killer",
      url: "https://vimeo.com/306293943",
      credit: "Video by Kailee Hashimoto",
    },
    {
      id: 14,
      title: "Micro Mart",
      url: "https://vimeo.com/380326775",
      credit: "Video by Kailee Hashimoto",
    },
  ];
  return (
    <div className="pb-14">
      <Carousel>
        {videoProperties.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.id}>
              <ReactPlayer
                url={videoObj.url}
                width="100%"
                pip={true}
                controls={true}
                playing={false}
              />
              <Carousel.Caption>
                <h3>{videoObj.title}</h3>
                <h3>{videoObj.credit}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Vimeo;
