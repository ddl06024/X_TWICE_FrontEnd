import CardsBuy from "../components/CardsBuy";
import {connect} from 'react-redux';
function mapDispatchToProps(dispatch:any){
    return {
        onClick:function(contents:any){
            dispatch({type: 'ChangeToOnSaleMode', contents:contents});
        }
    }
}
export default connect(null, mapDispatchToProps)(CardsBuy);