import { Reducer } from "redux";
import { CustomizerOptions, ISettingsState } from "./types";

// Type-safe initialState!
const initialSettings: ISettingsState = {
	darkTheme: false,
	drawerType: CustomizerOptions.FIXED_DRAWER,
	navCollapsed: false,
	themeColor: CustomizerOptions.RED
};

const reducer: Reducer<ISettingsState> = (state = initialSettings, action) => {
	switch (action.type) {
		case "@@router/LOCATION_CHANGE":
			return {
				...state,
				navCollapsed: false
			};
		case CustomizerOptions.TOGGLE_COLLAPSED_NAV:
			return {
				...state,
				navCollapsed: !action.isnavCollapsed
			};
		case CustomizerOptions.DRAWER_TYPE:
			return {
				...state,
				drawerType: action.drawerType
			};
		case CustomizerOptions.THEME_COLOR:
			return {
				...state,
				darkTheme: false,
				themeColor: action.color
			};
		case CustomizerOptions.DARK_THEME:
			return {
				...state,
				darkTheme: !state.darkTheme
			};
		default:
			return state;
	}
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as SettingsReducer };
