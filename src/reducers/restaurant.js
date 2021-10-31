import cuid from 'cuid';
export const cuidFn = cuid;

export default (state = [], action) => {
  switch (action.type) {
    case 'ADD_RESTAURANT':
      const restaurant = { text: action.text, id: cuidFn() };
      return state.concat(restaurant)


    case 'DELETE_RESTAURANT':
      return state.filter(r => { return r.id !== action.id })

    default:
      return state;
  }
};