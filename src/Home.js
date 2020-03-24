import React from 'react';
import './Home.css';
import Form from './Form';

export default class Home extends React.Component{
    render(){
        return(
            <div className = 'home'>
                <Form/>
            </div>
        )
    }
}