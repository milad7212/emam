import WithImageTiles from "./components/WithImageTiles";
import Withimage from "./components/Withimage";
import ThreeColumnWithImages from "./components/blogSection/ThreeColumnWithImages";
import CenteredAccordion from "./components/faq/CenteredAccordion";
import FourColumnSimple from "./components/footer/FourColumnSimple";
import WithOverlappingImage from "./components/testimonials/WithOverlappingImage";

export default function Home() {
  return (
    <div className="">
      <Withimage />
      <WithOverlappingImage />
      <WithImageTiles />
      <ThreeColumnWithImages />
      <CenteredAccordion />
      <FourColumnSimple />
    </div>
  );
}
