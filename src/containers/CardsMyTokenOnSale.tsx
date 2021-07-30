import CardsMyTokenOnSale from "../components/CardsMyTokenOnSale";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch: any) {
  return {
    onClick: function (contents: any) {
      dispatch({ type: "ChangeToOnSaleMode", contents: contents });
    },
  };
}
export default connect(null, mapDispatchToProps)(CardsMyTokenOnSale);
