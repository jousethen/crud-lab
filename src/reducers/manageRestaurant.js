import cuid from 'cuid';
export const cuidFn = cuid;

export default function manageRestaurants(state = {
  restaurants: [],
  reviews: [],
}, action) {
  switch (action.type) {

    case 'ADD_RESTAURANT':

      const restaurant = { text: action.text, id: cuidFn() };
      return {
        ...state,
        restaurants: [...state.restaurants, restaurant]
      }

    case 'DELETE_RESTAURANT':
      return {
        ...state,
        restaurants: state.restaurants.filter(r => { return r.id !== action.id })
      }
    default:
      return state;

  }
};