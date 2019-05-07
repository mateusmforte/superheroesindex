import React from "react";

export default class HeroAppearance extends React.Component {
    
  favorite(){
    var heroId = this.props.heroId;
    var heroName = this.props.heroName;
    var heroImg = this.props.heroimage;
    
    var isFavorite = false;
    var favorite = [];
    var actualUserPreferences = JSON.parse(localStorage.getItem('user'));
    var actualUserFavorites = actualUserPreferences.favoritesHeroes;
    actualUserFavorites.filter(hero => {
      if(hero.id === heroId){ //Favorite 
        isFavorite = true
        favorite.push(hero);
        return true;
      }
      return false;
    });

    if(isFavorite){
      for(var elemento of favorite){
        var index =  actualUserFavorites.indexOf(elemento);    
        actualUserFavorites.splice(index, 1);
      }
      actualUserFavorites.splice(heroId,1);
      localStorage.setItem('user',JSON.stringify(actualUserPreferences)); 
    }else{
      actualUserFavorites.push({id:heroId,name:heroName,img:heroImg});
      localStorage.setItem('user',JSON.stringify(actualUserPreferences)); 
    }
  }

  render() {
    return (
      <div className="appearance-area">
        <section id="appearance">
          <img src={this.props.heroimage} alt="Hero Profile" />
          <button 
            heroId={this.props.heroId}
            heroName={this.props.heroName}
            id="favorite-button"
            onClick={this.favorite.bind(this)}>
              <i class="fas fa-star" />
          </button>
        </section>
      </div>
    );
  }
}
