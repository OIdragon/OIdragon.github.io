export default function reducer(state = {}, action) {
  if (action.type === 'SCRATCHPAD_STATE_UPDATE') {
    const { key, value } = action.payload;
    return {
      ...state,
      [key]: value,
    };
  }
  return state;
}
