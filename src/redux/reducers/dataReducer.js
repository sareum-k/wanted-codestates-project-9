import { SET_DATA, ADD_TO_LIKE, SORT_BY_DATE, SORT_BY_REVIEW, SORT_BY_RANDOM, ADD_TO_COMMENT, ADD_TO_DATA, GET_FILTER } from "../actions/index";
import { initialState } from "./initialState";

const dataReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_DATA:
      return {
        ...state
      }
    case SORT_BY_DATE: {
      const data = [...state.data];
      data.sort((a, b) => new Date(b.date) - new Date(a.date));
      return {
        ...state,
        data
      }
    }
    case SORT_BY_REVIEW: {
      const data = [...state.data];
      data.sort((a, b) => b.comments.length - a.comments.length);
      return {
        ...state,
        data
      }
    }
    case SORT_BY_RANDOM: {
      const shuffle = () => (Math.random() - 0.5);
      const data = [...state.data].sort(shuffle)
      return {
        ...state,
        data
      }
    }
    case ADD_TO_LIKE: {
      const like = state.data.map((item) => {
        if (item.id === action.id) {
          return {
            ...item,
            like: Number(item.like) + 1
          }
        } else {
          return item;
        }
      })
      return { ...state, data: like }
    }
    case ADD_TO_COMMENT: {
      const comment = state.data.map((item) => {
        if (item.id === action.id.id) {
          return {
            ...item,
            comments: [
              ...item.comments,
              action.id.newComment
            ]
          }
        } else {
          return item;
        }
      })
      return { ...state, data: comment }
    }
    case ADD_TO_DATA: {
      return Object.assign({}, state, {
        data: [...state.data, action.post]
      });
    }
    case GET_FILTER: {
      // console.log(state.idx)
      return Object.assign({}, state, {
        filterIdx: action.idx
      });
    }

    default:
      return state;
  }
}

export default dataReducer;