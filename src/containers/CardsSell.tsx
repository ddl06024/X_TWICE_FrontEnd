import CardsSell from "../components/CardsSell";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch: any) {
  return {
    onClick: function (contents: any) {
      dispatch({ type: "ChangeToOnSaleMode", contents: contents });
    },
  };
}
export default connect(null, mapDispatchToProps)(CardsSell);
