import * as React from "react";
import * as ReactDOM from "react-dom";

import { createBrowserHistory } from "history";
import { Provider } from "react-redux";
import { HashRouter, Route, Switch } from "react-router-dom";

import * as serviceWorker from "./serviceWorker";
import configureStore from "./store/configureStore";

// Normally you would use browser history.
const history = createBrowserHistory();

const initialState = window.initialReduxState;

const store = configureStore(history, initialState);

const rootEl = document.getElementById("root");

// Create a reusable render method that we can call more than once
const render = () => {
	// Dynamically import our main App component, and render it
	const App = require("./containers/App").default;

	ReactDOM.render(
		<Provider store={store}>
			<HashRouter basename="/">
				<Switch>
					<Route path="/" component={App} />
				</Switch>
			</HashRouter>
		</Provider>,
		rootEl
	);
};

// Unstable for now
// if (module.hot) {
//     // Support hot reloading of components.
//     // Whenever the App component file or one of its dependencies
//     // is changed, re-import the updated component and re-render it
//     module.hot.accept('./containers/App', () => {
//       setTimeout(render);
//     });
// }

render();

serviceWorker.unregister();
