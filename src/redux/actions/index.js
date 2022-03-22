export const SET_DATA = "SET_DATA";
export const ADD_TO_LIKE = "ADD_TO_LIKE";
export const SORT_BY_DATE = "SORT_BY_DATE";
export const SORT_BY_REVIEW = "SORT_BY_REVIEW";
export const SORT_BY_RANDOM = "SORT_BY_RANDOM";

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
