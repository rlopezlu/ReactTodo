import React, { Component } from 'react';
import './../styles/TopNav.css'

export default class TopNav extends Component {
    render() {
        return (
            <div className='TopNav'>
                <div className='left'>
                    <button>Team Project</button>
                    <button>New List</button>
                </div>
                <div className='middle'>
                    Dope Todo App
                </div>
                <div className='right'>
                    <button>Icon</button>
                    <button>Icon</button>
                    <button>Icon</button>
                    <button>New List</button>
                </div>
            </div>
        )
    }
}