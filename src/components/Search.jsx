import React from "react";

import { SearchInput, SearchContainer, StyledSearch } from "../css/Search";

export default class Search extends React.Component {
	render() {
		return (
			<SearchContainer>
				<SearchInput
					type="search"
					placeholder="Pesquisar heroi"
					onChange={this.props.onChange}
				/>
				<StyledSearch />
			</SearchContainer>
		);
	}
}
