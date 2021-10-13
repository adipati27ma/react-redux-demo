import { useDispatch, useSelector } from 'react-redux';
import { buyIceCream } from '../redux';

function HooksIceCreamContainer() {
  // in hooks redux,
  // there is a usage warning that has been warned in the documentation
  const numOfIceCreams = useSelector((state) => state.iceCream.numOfIceCreams);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>Number of ice creams - {numOfIceCreams}</h2>
      <button onClick={() => dispatch(buyIceCream())}>Buy Ice Cream</button>
    </div>
  );
}

export default HooksIceCreamContainer;
