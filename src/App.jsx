import React from "react";
import { ThemeProvider } from "styled-components";

import Routes from "./Routes";
import { connect } from "react-redux";

class App extends React.Component {
	render() {
		return (
			<ThemeProvider theme={this.props.theme}>
				<Routes />
			</ThemeProvider>
		);
	}
}

const mapStateToProps = state => ({ theme: state.theme });

export default connect(mapStateToProps)(App);
