import { Action, AnyAction, combineReducers, Dispatch } from "redux";
// import { all, fork } from "redux-saga/effects";

// Settings reducers and Sagas
import { SettingsReducer } from "./settings/reducer";
import { ISettingsState } from "./settings/types";

// The top-level state object
export interface IApplicationState {
	settings: ISettingsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
	dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<IApplicationState>({
	settings: SettingsReducer
});
// Here we use `redux-saga` to trigger actions asynchronously. `redux-saga` uses something called a
// "generator function", which you can read about here:
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/function*

// export function* rootSaga() {
// 	yield all([fork(SettingsSaga)]);
// }
