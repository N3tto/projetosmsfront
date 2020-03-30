import React from 'react';
import './chat.css'
import Container from '../../components/primary-container/Primary-Container';
import Toolbar from '../../components/toolbar/Toolbar';
import Secondary from '../../components/secondary-container/Secondary-Container';

export default class Chat extends React.Component{
    render(){
        return(
            <>
            <Toolbar>
            </Toolbar>

            <Container>
            </Container>

            <Secondary>
            </Secondary>
            </>
        )
    }
}