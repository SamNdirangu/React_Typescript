import { amber, deepOrange } from "@material-ui/core/colors";

export default {
	palette: {
		primary: {
			dark: amber[700],
			light: amber[300],
			main: amber[500]
		},
		secondary: {
			dark: deepOrange[700],
			light: deepOrange[300],
			main: deepOrange[400]
		}
	},
	status: {
		danger: "orange"
	},
	typography: {
		button: {
			fontWeight: 400,
			textAlign: "capitalize"
		}
	}
};
