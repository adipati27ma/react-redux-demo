import { connect } from 'react-redux';
import { buyIceCream } from '../redux/';

function IceCreamContainer({ numOfIceCreams, buyIceCream }) {
  return (
    <div>
      <h2>Number of ice cream - {numOfIceCreams}</h2>
      <button onClick={buyIceCream}>Buy Ice Cream</button>
    </div>
  );
}

// step 1 - add numOfIceCreams property (referring to state.numOfIceCreams) to props
const mapStateToProps = (state) => {
  return {
    numOfIceCreams: state.iceCream.numOfIceCreams,
  };
};

// step 2 - add buyIceCream function (have abilities to dispatch action creator buyIceCream()) to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyIceCream: () => dispatch(buyIceCream()),
  };
};

// step 3 - connect 2 func. to the components.. connect to redux store
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
