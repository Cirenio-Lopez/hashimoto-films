import Cover from "../components/index/cover";
import Vimeo from "../components/portfolio/vimeo";
import Insta from "../components/instagram/insta";
import Contact from "../components/contact/contact";
import Booking from "../components/booking/booking";
function Index() {
  return (
    <div className="flex flex-col">
      <Cover />
      <Vimeo />
      <Insta />
      <Contact />
      <Booking />
    </div>
  );
}
export default Index;
