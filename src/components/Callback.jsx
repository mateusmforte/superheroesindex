import React from 'react';
import Loading from './Loading';

export default class Callback extends React.Component{
    constructor(props){
        console.log(props);
    }
    render(){
        return(
            <Loading/>
        )
    }
}