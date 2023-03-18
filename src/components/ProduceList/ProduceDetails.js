import { useDispatch, useSelector } from "react-redux";
import { populateCart, incrementCart } from "../../store/cart";
import { likeProduce, unlikeProduce } from "../../store/produce";
function ProduceDetails({ produce }) {
  const cart = useSelector(state => state.cart);
  const dispatch = useDispatch()

  const handleAddingToCart = () => {
    if (produce.id in cart ) {
      dispatch(incrementCart(produce.id))
    } else {
      dispatch(populateCart(produce.id))
    }
  }

  const handleLiking = () => {
    if (produce.liked) {
      dispatch(unlikeProduce(produce.id))
    } else {
      dispatch(likeProduce(produce.id))
    }
  }

  return (
    <li className="produce-details">
      <span>{produce.name}</span>
      <span>
        <button
          className={"like-button" + (produce.liked ? " selected" : "")}
          onClick={handleLiking}
        >
          <i className={"fas fa-heart"} />
        </button>
        <button
          className={"plus-button" + (cart ? " selected" : "")}
          onClick={handleAddingToCart}
        >
          <i className="fas fa-plus" />
        </button>
      </span>
    </li>
  );
}

export default ProduceDetails;