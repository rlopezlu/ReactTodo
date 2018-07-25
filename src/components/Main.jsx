import React, {Component} from 'react';
import '../styles/MainWrapper.css';
import TeamProject from './TeamProject';

export default class Main extends Component{
    render(){
        return(
            <div className='MainWrapper'>
                <TeamProject />
            </div>
        )
    }
}