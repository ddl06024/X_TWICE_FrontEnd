import RegisterPicture from "../pages/RegisterPicture";
import { connect } from "react-redux";
function mapReduxStateToReactProps(nft: any) {
  return {
    nft: nft,
  };
}
function mapDispatchToProps(dispatch: any) {
  return {
    onClick: function (nft: any) {
      dispatch({ type: "CREATE", nft: nft });
    },
  };
}
export default connect(
  mapReduxStateToReactProps,
  mapDispatchToProps
)(RegisterPicture);
