import { useState } from "react";
import EventContext from "./EventContext";

const EventState = (props) =>{
    
    const eventinitial =[]

    

    const [events,setEvents]=useState(eventinitial)
    const [previewevent , setPreviewevent] = useState(null)

    const getEvents=async ()=>{

        const response = await fetch(`https://git.heroku.com/eventappjs.git/api/event/fetchall`,{
            method:'GET',
            headers:{
                'auth-token':localStorage.getItem('token')
            }
          
        });
       const json = await response.json();
        console.log(json)     
        setEvents(json)   
    }


    //add a note
    const addEvent=async (name,banner,description,detail,language,edate,etime,link,price)=>{

        const response = await fetch(`https://git.heroku.com/eventappjs.git/api/event/addevent`,{
            method:'POST',
            headers:{
                'Content-Type':'application/json',
                'auth-token':localStorage.getItem('token')
            },
            body: JSON.stringify({name,banner,description,detail,language,edate,etime,link,price})
        });
        const event = await response.json();
        setEvents(events.concat(event))
    }
    return(
        <EventContext.Provider value={{events,setEvents,addEvent,getEvents,previewevent,setPreviewevent}}>
            {props.children}
        </EventContext.Provider>
);

}

export default EventState