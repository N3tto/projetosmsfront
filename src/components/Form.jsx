import React from 'react';
import './form.css'
import Img from '../assets/imgs/logoPitang.png';

export default class Form extends React.Component{
    render(){
        return(
            <>
            <img className = 'imagem' src = {Img}/>
            <div className = 'form'>
                {this.props.children}
            </div>
            </>
        )
    }
}