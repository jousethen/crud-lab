import cuid from 'cuid';
export const cuidFn = cuid;

export default (state = [], action) => {
  console.log(action)
  switch (action.type) {

    case 'ADD_REVIEW':
      const review = {
        text: action.review.text,
        id: cuidFn(),
        restaurantId: action.review.restaurantId
      };
      return state.concat(review)


    case 'DELETE_REVIEW':
      return state.filter(r => { return r.id !== action.id })

    default:
      return state;
  }
};