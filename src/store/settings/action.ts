import { action } from "typesafe-actions";
import { CustomizerOptions } from "./types";

export const toggleCollapsedNav = (isNavCollapsed: boolean) =>
	action(CustomizerOptions.TOGGLE_COLLAPSED_NAV, isNavCollapsed);

export const setThemeColor = (color: string) => action(CustomizerOptions.THEME_COLOR, color);

export const setDrawerType = (drawerType: string) =>
	action(CustomizerOptions.DRAWER_TYPE, drawerType);

export const setDarkTheme = () => action(CustomizerOptions.DARK_THEME);
