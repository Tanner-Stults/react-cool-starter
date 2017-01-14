import { fromJS } from 'immutable';

// The fake store creator for testing Components

export function storeFake(state) {
  return {
    default: () => {},
    subscribe: () => {},
    dispatch: () => {},
    getState: () => fromJS({ ...state }),
  };
}

// Create enhanced history object for router

export function createSelectLocationState(reducerName) {
  let prevRoutingState;
  let prevRoutingStateJS;

  return (state) => {
    const routingState = state.get(reducerName); // or state.routing

    if (!routingState.equals(prevRoutingState)) {
      prevRoutingState = routingState;
      prevRoutingStateJS = routingState.toJS();
    }

    return prevRoutingStateJS;
  };
}
