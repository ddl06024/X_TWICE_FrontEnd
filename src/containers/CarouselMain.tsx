import CarouselMain from "../pages/CarouselMain";
import { connect } from "react-redux";
function mapReduxStateToReactProps(nft: any) {
  return {
    nft: nft,
  };
}
export default connect(mapReduxStateToReactProps)(CarouselMain);
