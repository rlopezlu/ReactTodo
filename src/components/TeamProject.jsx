import React, { Component } from 'react';
import '../styles/TeamProject.css';
import TeamProjectListItem from './TeamProjectListItem';

export default class TeamProject extends Component{
    render(){
        let taskList = [{
            main: 'Brainstorming',
            timeAgo: 22,
            owner: 'Raul Lopez'
        },
        {
            main: 'Bullet Journal',
            timeAgo: 12,
            owner: 'Harry Potter'
        },
        {
            main: 'Homework Assignments',
            timeAgo: 60,
            owner: 'Jimmy Neutron'
        },
        {
            main: 'Project RoadMap',
            timeAgo: 22,
            owner: 'Walter White'
        }
    
    ]
        return(
            <div className='TeamProject'>
                <div className='TopLabel'>
                </div>
                <div className='TaskList'>
                {
                    taskList.map( listItem => {
                        return <TeamProjectListItem listItem={listItem}/>
                    })
                }
                </div>
            </div>
        )
    }
}