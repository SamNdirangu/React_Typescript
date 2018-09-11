// import "@react-big-calendar/lib/less/styles.less";
import "../styles/app.scss";
import "../styles/bootstrap.scss";

import { createMuiTheme, MuiThemeProvider } from "@material-ui/core/styles";
import * as React from "react";
import { connect } from "react-redux";
import { Redirect, Route, RouteComponentProps } from "react-router-dom";

import CoreApp from "../apps/CoreApp";
import { IApplicationState } from "../store/index";

import { DARK_INDIGO, INDIGO } from "../constants/ThemeColors";
import darkTheme from "./themes/darkTheme";
import indigoTheme from "./themes/indigoTheme";

export interface IAppProps extends StateProps, RouteComponentProps<{}> {}

export class LoaderApp extends React.Component<IAppProps> {
	public getColorTheme(themeColor, applyTheme) {
		switch (themeColor) {
			case INDIGO: {
				applyTheme = createMuiTheme(indigoTheme);
				break;
			}
			case DARK_INDIGO: {
				applyTheme = createMuiTheme(indigoTheme);
				break;
			}
		}
		return applyTheme;
	}

	public render() {
		const { match, location, themeColor, isDarkTheme } = this.props;

		let applyTheme = createMuiTheme(indigoTheme);
		if (isDarkTheme) {
			applyTheme = createMuiTheme(darkTheme);
		} else {
			applyTheme = this.getColorTheme(themeColor, applyTheme);
		}

		if (location.pathname === "/") {
			return <Redirect to={"/app/dashboard/default"} />;
		}
		return (
			<MuiThemeProvider theme={applyTheme}>
				<div className="app-main">
					<Route path={`${match.url}app`} component={CoreApp} />
				</div>
			</MuiThemeProvider>
		);
	}
}

const mapStateToProps = ({ settings }: IApplicationState) => ({
	isDarkTheme: settings.darkTheme,
	sideNavColor: settings.themeColor,
	themeColor: settings.themeColor
});

type StateProps = ReturnType<typeof mapStateToProps>;

export default connect(mapStateToProps)(LoaderApp);
