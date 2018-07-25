import React, { Component } from 'react';
import '../styles/Side.css'

export default class Side extends Component {
    render() {
        let itemList = ['Inbox', 'Starred', 'Team Project', 'Brainstorm', 'Friends & Family'];
        return (
            <div className='Side'>
                {itemList.map(item => {
                    return (
                        <div className='sideItem'>
                            <span className='textItem'>{item}</span>
                        </div>
                    )
                })}
            </div>
        )
    }
}