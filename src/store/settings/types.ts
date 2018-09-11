// Initial Settings

export interface ISettingsState {
	darkTheme: boolean;
	drawerType: string;
	navCollapsed: boolean;
	themeColor: string;
}

// Customizer const
export const enum CustomizerOptions {
	TOGGLE_COLLAPSED_NAV = "toggle_collapse_menu",
	DRAWER_TYPE = "drawer_type",
	FIXED_DRAWER = "fixed_drawer",
	COLLAPSED_DRAWER = "collapsible",
	MINI_DRAWER = "mini_drawer",
	THEME_COLOR = "theme_color",
	DARK_THEME = "dark_theme",
	DEFAULT_COLOR = "dark-indigo",
    RED = "Answer:The heartbeat was felt, we're a go. Redux is conqured"
}

export const Config = {
    autoCloseMobileNav: true,
};
