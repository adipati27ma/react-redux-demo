import { connect } from 'react-redux';
import { buyCake, buyIceCream } from '../redux';

function ItemContainer({ item, numOfItem, buyItem }) {
  return (
    <div>
      <h2>
        &gt;&gt;Number of {item} - {numOfItem}
      </h2>
      <button onClick={buyItem}>Buy {item}</button>
    </div>
  );
}

const mapStateToProps = (state, ownProps) => {
  const itemState =
    ownProps.item === 'cake'
      ? state.cake.numOfCakes
      : ownProps.item === 'ice cream'
      ? state.iceCream.numOfIceCreams
      : 'props not found';

  return {
    numOfItem: itemState,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  const dispatchFunc =
    ownProps.item === 'cake'
      ? () => dispatch(buyCake())
      : ownProps.item === 'ice cream'
      ? () => dispatch(buyIceCream())
      : console.log('error dispatch, invalid item name');
  return {
    buyItem: dispatchFunc,
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(ItemContainer);
