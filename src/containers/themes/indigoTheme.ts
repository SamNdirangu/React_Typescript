import { indigo, pink } from "@material-ui//core/colors";

export default {
	palette: {
		primary: {
			dark: indigo[700],
			light: indigo[300],
			main: indigo[500]
		},
		secondary: {
			dark: pink[700],
			light: pink[300],
			main: pink[200]
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
