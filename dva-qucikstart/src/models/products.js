export default {
  namespace: "products",
  state: [],
  subscriptions: {},
  reducers: {
    delete(state, { payload: id }) {
      return state.filter(item => item.id != id);
    }
  }
};
