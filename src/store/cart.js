import produceData from "../mockData/produce.json";

export default function cartReducer(state = {}, action) {
  switch (action.type) {
    case POPULATE:
      const id = action.id;
      const newCartItems = { ...state, [id]: { id, count: 1 } };
      return newCartItems;
    case REMOVE:
      //     const itemId = action.id
      //    console.log(state.cart,itemId)
      //     return state
      return {
        ...state,
        cart: Object.keys(state.cart).filter((item) => item.id !== action.id),
      };
    default:
      return state;
  }
}

const POPULATE = "cart/POPULATE";
const REMOVE = "cart/REMOVE";

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
