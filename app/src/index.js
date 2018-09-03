import dva from "dva";
import { Router, Route, Switch } from "dva/router";
import { connect } from "react-redux";
import { call, put, takeEvery, takeLatest } from "redux-saga/effects";
import key from "keymaster";
import styles from "./index.less";
// 1. Initialize
const app = dva();

app.model({
  namespace: "count",
  subscriptions: {
    keyboardWatcher({ dispatch }) {
      key("⌘+up, ctrl+up", () => {
        dispatch({ type: "count/add" });
      });
    }
  },
  effects: {
    *add(action, { call, put }) {
      yield call(delay, 1000);
      yield put({ type: "minus" });
    }
  },
  state: {
    record: 0,
    current: 0
  },
  reducers: {
    add(state) {
      const newCurrent = state.current + 1;
      return {
        ...state,
        record: newCurrent > state.record ? newCurrent : state.record,
        current: newCurrent
      };
    },
    minus(state) {
      return {
        ...state,
        current: state.current - 1
      };
    }
  }
});
const delay = timeout => {
  return new Promise(resolve => {
    setTimeout(resolve, timeout);
  });
};
const CountApp = ({ count, dispatch }) => {
  return (
    <div className={styles.normal}>
      <div className={styles.record}>Highest Record: {count.record}</div>
      <div className={styles.current}>{count.current}</div>
      <div className={styles.button}>
        <button
          onClick={() => {
            dispatch({ type: "count/add" });
          }}
        >
          +
        </button>
      </div>
    </div>
  );
};
const mapStateToProps = state => {
  return { count: state.count };
};

const HomePage = connect(mapStateToProps)(CountApp);
app.router(({ history }) => (
  <Router history={history}>
    <Route path="/" exact component={HomePage} />
  </Router>
));

// 4. Start
app.start("#root");
