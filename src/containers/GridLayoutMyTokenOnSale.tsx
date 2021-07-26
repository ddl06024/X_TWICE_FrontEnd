import GridLayoutMyTokenOnSale from '../components/GridLayoutMyTokenOnSale';
import {connect} from 'react-redux';
function mapReduxStateToReactProps(nft:any){
    return {
        nft:nft
    }
}
export default connect(mapReduxStateToReactProps)(GridLayoutMyTokenOnSale);