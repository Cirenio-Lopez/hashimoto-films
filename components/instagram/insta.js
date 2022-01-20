function Insta() {
  return (
    <div className="w-full h-full py-20 md:px-[30%]">
      <iframe
        src="https://snapwidget.com/embed/981932"
        className="snapwidget-widget px-3 hidden md:block"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          height: "40vw",
        }}
      ></iframe>
      <iframe
        src="https://snapwidget.com/embed/981932"
        className="snapwidget-widget px-3 md:hidden"
        frameBorder="0"
        scrolling="no"
        style={{
          border: "none",
          overflow: "hidden",
          width: "100%",
          height: "100vw",
        }}
      ></iframe>
    </div>
  );
}
export default Insta;
