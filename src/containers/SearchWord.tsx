import SearchWord from "../components/SearchWord";
import { connect } from "react-redux";
function mapReduxStateToReactProps(nft: any) {
  return {
    nft: nft,
  };
}
export default connect(mapReduxStateToReactProps)(SearchWord);
