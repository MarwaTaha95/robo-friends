import {
  CHANGE_SEARCH_FIELD,
  REQUEST_ROBOTS_PENDING,
  REQUEST_ROBOTS_SUCCESS,
  REQUEST_ROBOTS_FAILED
} from './constants';


const initialSearchState = {
  searchField: '',
}

const initialRobotState = {
  isPending: false,
  robots: [],
  error: ''
}

export const searchRobots = (state=initialSearchState, action={}) => {
  switch(action.type) {
    case CHANGE_SEARCH_FIELD:
      return { ... state, searchField: action.payload};
    default:
      return state;
  }

}

export const requestRobots = (state=initialRobotState, action={}) => {
  switch(action.type) {
    case REQUEST_ROBOTS_PENDING:
      return { ... state, isPending: true};
    case REQUEST_ROBOTS_SUCCESS:
      console.log(action.payload)
      return { ... state, isPending: false, robots: action.payload};
      case REQUEST_ROBOTS_FAILED:
        return { ... state, isPending: false, error: action.payload};
    default:
      return state;
  }

}
