import React from "react";
import { connect } from "react-redux";
import * as FavoriteActions from "../Store/actions/FavoritesActions";

import {
	FavoriteHero,
	FavoriteHeroImage,
	FavoriteHeroName
} from "../css/FavoritesItem";

class FavoriteItem extends React.Component {
	constructor() {
		super();
		this.showProfile = this.showProfile.bind(this);
		this.unFavorite = this.unFavorite.bind(this);
	}
	showProfile() {
		this.props.history.push(`/profile/${this.props.hero.id}`);
	}
	unFavorite(element, heroid) {
		var favorite = element.target.parentNode;
		this.props.removeFavorite(heroid);
		var favoriteListElement = document.querySelector("#favorite-list");
		favoriteListElement.removeChild(favorite);
	}
	render() {
		return (
			<FavoriteHero key={this.props.hero.id}>
				<i
					className="remove-button far fa-times-circle"
					onClick={e => this.unFavorite(e, this.props.hero.id)}
				/>
				<div onClick={() => this.showProfile(this.props.hero.id)}>
					<FavoriteHeroImage src={this.props.hero.img} alt="" />
					<FavoriteHeroName>{this.props.hero.heroname}</FavoriteHeroName>
				</div>
			</FavoriteHero>
		);
	}
}

const mapDispatchToProps = dispatch => ({
	removeFavorite: favoriteId =>
		dispatch(FavoriteActions.removeFavorite(favoriteId))
});

const mapStateToProps = state => ({
	favorites: state.favorites
});
export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FavoriteItem);
