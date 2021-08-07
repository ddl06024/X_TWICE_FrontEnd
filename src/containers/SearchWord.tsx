import SearchWord from "../pages/SearchWordCategoryTab";
import { connect } from "react-redux";
function mapReduxStateToReactProps(nft: any) {
  return {
    nft: nft,
  };
}
export default connect(mapReduxStateToReactProps)(SearchWord);
