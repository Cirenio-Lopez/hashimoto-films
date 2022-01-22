import { Carousel } from "react-bootstrap";
import React from "react";
import ReactPlayer from "react-player/vimeo";
function Vimeo({ data }) {
  data = data.reverse();
  return (
    <div className="pb-14 h-[60vh]">
      <Carousel>
        {data.map((videoObj) => {
          return (
            <Carousel.Item key={videoObj.fields.id}>
              <ReactPlayer
                url={videoObj.fields.url}
                width="100%"
                height="50vh"
                pip={true}
                controls={true}
                playing={false}
              />
              <Carousel.Caption>
                <h3>{videoObj.fields.title}</h3>
                <h3>{videoObj.fields.credit}</h3>
              </Carousel.Caption>
            </Carousel.Item>
          );
        })}
      </Carousel>
    </div>
  );
}
export default Vimeo;
