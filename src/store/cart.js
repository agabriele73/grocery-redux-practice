import produceData from "../mockData/produce.json";

export default function cartReducer(state = [], action) {
  switch (action.type) {
    case POPULATE:
      const id = action.id;
      const newCartItems = { ...state, [id]: { id, count: 1 } };
      return newCartItems;
    case REMOVE:
      const newCart = { ...state }
      delete newCart[action.id]
      return newCart
    case INCREMENT: 
      return {
        ...state, 
        [action.id]: {
          ...state[action.id],
          count: state[action.id].count + 1
        }
      }
    case DECREMENT:
      const count = state[action.id].count - 1
      if (count <= 0){
        const {[action.id]: _, ...newCart} = state
        return newCart
      } else {
        const newCart2 = {...state, [action.id]: {...state[action.id], count: count}}
        return newCart2
        } 
    case RESET_CART: 
        return {}
    default:
      return state;
  }
}

const POPULATE = "cart/POPULATE";
const REMOVE = "cart/REMOVE";
const INCREMENT = "cart/INCREMENT"
const DECREMENT = "cart/DECREMENT"
const RESET_CART = "cart/RESET_CART"

export const populateCart = (id) => {
  return {
    type: POPULATE,
    id,
  };
};

export const removeCart = (id) => {
  return {
    type: REMOVE,
    id,
  };
};

export const incrementCart = (id) => {
  return {
    type: INCREMENT,
    id
  }
}

export const decrementCart = (id) => {
  return {
    type: DECREMENT,
    id
  }
}

export const resetCart = () => {
  return {
    type: RESET_CART
  }
}

