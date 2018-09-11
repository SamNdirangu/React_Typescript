import { grey } from "@material-ui/core/colors";

export default {
	palette: {
		background: {
			appBar: "#2d353c",
			avatar: "#2d353c",
			chip: "#2d353c",
			contentFrame: "#2d353c",
			default: "#2d353c",
			paper: "#2d353c"
		},
		primary: {
			dark: grey[500],
			light: grey[100],
			main: grey[300]
		},
		secondary: {
			dark: grey[700],
			light: grey[200],
			main: grey[500]
		},
		type: "dark",
		types: {
			dark: {
				background: {
					appBar: "#2d353c",
					avatar: "#2d353c",
					chip: "#2d353c",
					contentFrame: "#2d353c",
					default: "#2d353c",
					paper: "#2d353c"
				}
			}
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
