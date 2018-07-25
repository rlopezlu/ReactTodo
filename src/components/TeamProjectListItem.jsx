import React, { Component } from 'react';
import '../styles/TeamProjectListItem.css';

export default class TeamProjectListItem extends Component{
    render(){
        return(
            <div className='TPListItem'>
                <div className='nameCircle'>{this.props.listItem.owner.substring(0,2)}</div>
                <div className='content'>
                    <p className='title'>{this.props.listItem.main}</p>
                    <p className='time'>{this.props.listItem.timeAgo}</p>
                </div>
            </div>
        )
    }
}