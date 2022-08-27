import React,{useContext} from 'react'
import EventContext from '../Context/event/EventContext'

const Preview = () => {
    const context = useContext(EventContext);
    const {previewevent } = context;
    return (
        <div className="preview">
            <img src={previewevent.banner} />
            <div className="body">
                <div className='content'>
                    <h2>{previewevent.name}</h2>
                    <p>{previewevent.description}</p>
                    <h2>What will you get ?</h2>
                    <p>{previewevent.detail}</p>
                </div>
                <div className="card">
                    <p>Date : {previewevent.edate}</p>
                    <p>Time : {previewevent.etime}</p>
                    <a href={previewevent.link}>Link</a>
                    <p>{previewevent.price}</p>
                </div>
            </div>

        </div>
    )
}

export default Preview
