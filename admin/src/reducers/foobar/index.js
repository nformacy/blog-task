const initialState = {}

export default function(state = initialState, { type, payload }) {
  switch(type) {
    case 'fetch/foobar':
      return {
        ...state,
        ...payload
      }
    default:
      return {
        ...state
      }
  }
}

