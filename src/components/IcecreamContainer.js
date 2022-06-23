import { buyIcecream } from "../redux/iceCream/iceCreamAction";
import { connect } from "react-redux";
const IceCreamContainer = (props) => {
  return (
    <div>
      <h2>Number of Ice Creams {props.numOfIcecream}</h2>
      <button onClick={props.buyIcecream}>Buy Ice Creams</button>
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    numOfIcecream: state.icecream.numOfIcecream,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    buyIcecream: () => dispatch(buyIcecream()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(IceCreamContainer);
