import React, { useEffect, useContext, useState } from 'react'
import EventContext from '../Context/event/EventContext'
import { useNavigate } from 'react-router-dom'
import '../App.css'


const Dashboard = () => {
    const navigate = useNavigate();
    const context = useContext(EventContext)
    const { events, getEvents, setPreviewevent } = context;
    const [user, setUSer] = useState(null);
    const getuser = async () => {
        const response = await fetch(`https://git.heroku.com/eventappjs.git/api/auth/getuser`, {
            method: 'POST',
            headers: {
                'auth-token': localStorage.getItem('token')
            }
        });
        const json = await response.json();
        setUSer(json);
    }

    useEffect(() => {
        if (localStorage.getItem('token')) {
            getuser();
            getEvents();
        }
        else {
            navigate('/login')
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])


    const handleclick = () => {
        navigate('/add')
    }
    return (
        <div className='dashboard'>
            <div className='left'>
                <button><b>Dashboard</b></button>
            </div>
            <div className='right'>
                {user && <h2>Welcome {user.name}</h2>}
                <h4>Hello This is an event management application</h4>
            
                <div className='addevent' onClick={handleclick}>
                    <i className="fa-solid fa-plus"></i>
                    <h3>Add Event</h3>
                </div>
            </div>
        </div>
    )
}

export default Dashboard
