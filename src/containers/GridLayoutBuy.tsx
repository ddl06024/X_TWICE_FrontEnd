import GridLayoutBuy from '../components/GridLayoutBuy';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(nft:any){
    return {
        nft:nft
    }
}
export default connect(mapReduxStateToReactProps)(GridLayoutBuy);