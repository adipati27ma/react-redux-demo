import { connect } from 'react-redux';

function ItemContainer({ item, numOfItem }) {
  return (
    <div>
      <h2>
        &gt;&gt;Number of {item} - {numOfItem}
      </h2>
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

export default connect(mapStateToProps)(ItemContainer);
