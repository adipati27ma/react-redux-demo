import { connect } from 'react-redux';
import { buyCake } from '../redux/';

function CakeContainer({ numOfCakes, buyCake }) {
  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <button onClick={buyCake}>Buy Cake</button>
    </div>
  );
}

// step 1 - add numOfCakes property (referring to state.numOfCakes) to props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.numOfCakes,
  };
};

// step 2 - add buyCake function (have abilities to dispatch action creator buyCake()) to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

// step 3 - connect 2 func. to the components.. connect to redux store
export default connect(mapStateToProps, mapDispatchToProps)(CakeContainer);
