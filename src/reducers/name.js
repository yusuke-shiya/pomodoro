import { CREATE, UPDATE } from "../actions";

const initialState = ["仕事", "資格の勉強"];

const names = (state = initialState, action) => {
  switch (action.type) {
    case CREATE:
      return state.concat("タスクを入力");
    case UPDATE:
      const newState = state.map((el) =>
        state.indexOf(el) === 1 ? "変更しました" : el
      );
      return newState;
    default:
      return state;
  }
};

export default names;
