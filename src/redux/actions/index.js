export const SET_DATA = "SET_DATA";
export const ADD_TO_LIKE = "ADD_TO_LIKE";
export const ADD_TO_COMMENT = "ADD_TO_COMMENT";
export const ADD_TO_DATA = "ADD_TO_DATA";
export const SORT_BY_DATE = "SORT_BY_DATE";
export const SORT_BY_REVIEW = "SORT_BY_REVIEW";
export const SORT_BY_RANDOM = "SORT_BY_RANDOM";
export const GET_FILTER = "GET_FILTER";

export const setData = () => {
  return {
    type: SET_DATA,
  }
}
export const sortByDate = () => {
  return {
    type: SORT_BY_DATE,
  }
}
export const sortByReview = () => {
  return {
    type: SORT_BY_REVIEW,
  }
}
export const sortByRandom = () => {
  return {
    type: SORT_BY_RANDOM,
  }
}
export const addToLike = (id) => {
  return {
    type: ADD_TO_LIKE,
    id
  }
}
export const addToComment = (id) => {
  return {
    type: ADD_TO_COMMENT,
    id
  }
}
export const addToData = (post) => {
  return {
    type: ADD_TO_DATA,
    post
  }
}
export const getFilter = (idx) => {
  return {
    type: GET_FILTER,
    idx
  }
}
