import Login from "../components/Login";
import { connect } from "react-redux";
function mapDispatchToProps(dispatch: any) {
  return {
    onSubmit: function (pwd: any) {
      dispatch({ type: "Login", pwd: pwd });
    },
  };
}
export default connect(null, mapDispatchToProps)(Login);
