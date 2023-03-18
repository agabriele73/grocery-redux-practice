import produceData from '../mockData/produce.json'

// ./src/store/produce.js
export const getAllProduce = (state) => Object.values(state.produce);


// ./src/store/produce.js
export default function produceReducer(state = {}, action) {
    switch (action.type) {
      case POPULATE:
        const newState = {};
        action.produce.forEach(produce => {
            newState[produce.id] = produce
        });
        return newState;
      case LIKE: 
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            liked: true 
          }
        }
      case UNLIKE:
        return {
          ...state,
          [action.id]: {
            ...state[action.id],
            liked: false
          }
        }   
      default:
        return state;
    }
  }


  const POPULATE = 'produce/POPULATE'
  const LIKE = 'produce/LIKE'
  const UNLIKE = 'produce/UNLIKE'


  export const populateProduce = () => {
     return {
        type: POPULATE,
        produce: produceData
     }
  }

  export const likeProduce = (id) => {
    return {
      type: LIKE,
      id
    }
  }

  export const unlikeProduce = (id) => {
    return {
      type: UNLIKE,
      id
    }
  }