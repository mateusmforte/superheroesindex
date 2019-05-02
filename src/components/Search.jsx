import React from 'react';
import '../css/search.css';

export default class Search extends React.Component{
    render(){
        return(
            <input 
                id="search-input"
                type="search"
                placeholder="Pesquisar heroi"
                onChange={this.props.onChange}
            />
        );
    }
}