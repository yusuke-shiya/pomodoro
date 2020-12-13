export const CREATE = "CREATE";
export const UPDATE = "UPDATE";

export const create = () => ({
  type: CREATE,
});
export const update = (index, name) => ({
  type: UPDATE,
  index,
  name,
});
