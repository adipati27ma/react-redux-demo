import { useState } from 'react';
import { connect } from 'react-redux';
import { buyCake } from '../redux/';

function NewCakeContainer({ numOfCakes, buyCake }) {
  const [number, setNumber] = useState(1);

  return (
    <div>
      <h2>Number of cakes - {numOfCakes}</h2>
      <input
        type="number"
        name=""
        value={number}
        onChange={(e) => setNumber(e.target.value)}
      />
      <button onClick={() => buyCake(number)}>Buy {number} Cake</button>
    </div>
  );
}

// step 1 - add numOfCakes property (referring to state.numOfCakes) to props
const mapStateToProps = (state) => {
  return {
    numOfCakes: state.cake.numOfCakes,
  };
};

// step 2 - add buyCake function (have abilities to dispatch action creator buyCake()) to props
const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: (number) => dispatch(buyCake(number)),
  };
};

// step 3 - connect 2 func. to the components.. connect to redux store
export default connect(mapStateToProps, mapDispatchToProps)(NewCakeContainer);
