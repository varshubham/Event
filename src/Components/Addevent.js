import React,{useContext,useState} from 'react'
import EventContext from '../Context/event/EventContext'
import '../App.css'
import {useNavigate} from 'react-router-dom'
const Addevent = () => {
    const navigation = useNavigate();
    const context = useContext(EventContext);
    const {addEvent,setPreviewevent}=context;
    const [event,setEvent] = useState({name:"",banner:"",description:"",detail:"",language:"English",edate:"",etime:"",link:"",price:"Free"})

    const preview = ()=>{
        setPreviewevent(event);
        navigation('/preview')
    }

    const handleclick = (e)=>{
        e.preventDefault();
        console.log(event);
        addEvent(event.name,event.banner,event.description,event.detail,event.language,event.edate,event.etime,event.link,event.price)
    }

    const onchange = (e)=>{
        setEvent({...event,[e.target.name]:e.target.value})
    }
    const onimagechange = (e)=>{
        const [file]= e.target.files;
        const imgurl = URL.createObjectURL(file);
        setEvent({...event,[e.target.name]:imgurl})
    }
    const backclick = ()=>{
        navigation('/');
    }
    return (
        <div className='add'>
            <div className='header' onClick={backclick}>
                <i className="fa-solid fa-arrow-left"> Back </i>
                <button onClick={preview}>Previous Page</button>
            </div>
            <div className='form'>
                <h2>Create Event</h2>
                <form>
                    <div className='left'>
                        <div className='section'>
                            <div>
                                <label htmlFor="name">Event Name : </label>
                                <input type="text" name="name" id='name' onChange={onchange}/>
                            </div>
                            <div>
                                <label htmlFor="language">Choose Language : </label>
                                <select name="language" id="language" onChange={onchange}>
                                    <option value="English">English</option>
                                    <option value="Hindi">Hindi</option>
                                </select>
                            </div>
                        </div>
                        <div className='section'>
                            <div>
                                <label htmlFor="banner">Banner : </label>
                                <input type="file" name="banner" id="banner" accept="image/*"  onChange={onimagechange}/>
                            </div>
                            <div>
                                <label htmlFor="price">Price : </label>
                                <select name="price" id="price" onChange={onchange}>
                                    <option value="Free">Free</option>
                                    <option value="Paid">Paid</option>
                                </select>
                            </div>
                        </div>
                        <div className="section">
                            <div>
                                <label htmlFor="description">Description : </label>
                                <input type="text" name='description' id='description'  onChange={onchange} />
                            </div>
                            <div>
                                <label htmlFor="etime">Time : </label>
                                <input type="text" name='etime' id='etime'  onChange={onchange} />
                            </div>
                        </div>
                        <div className='section'>
                            <textarea name="detail" id="detail" cols="50" rows="10" placeholder='please describe your service'  onChange={onchange}></textarea>
                            <div style={{ display: "block" }}>
                                <div>
                                    <label htmlFor="edate" >Choose Date : </label>
                                    <input type="date" name="edate" id="edate" onChange={onchange} />
                                </div>
                                <div>
                                    <label htmlFor="link">Event Link : </label>
                                    <input type="url" name='link' id='link'  onChange={onchange} />
                                </div>
                            </div>
                        </div>
                    </div>
                </form>
                <button onClick={handleclick}><b>Save</b></button>
            </div>
            
        </div>
    )
}

export default Addevent
