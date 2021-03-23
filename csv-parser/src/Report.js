import React from 'react'
import "./Report.css"
function Report(props) {
    const{Host,guest,Length}=props
    return (
        <div className="report_Container"> 
        {Object.keys(guest).length===0 ? 
         <div className="report">
            <div><span>Host</span> : {Host.NAME}</div>
            <div><span>Total Participants</span> : {Length} </div>
            <div><span>Total Duration</span> : {Host.DURATION} 
            minutes {Host.DURATION>60 && `(${Math.floor(Host.DURATION/60)}hours ${Host.DURATION%60}minutes)`} </div>
            
        </div> :
        <div className="report">
            {guest.GUEST ==="Yes" ? <div><span>Guest</span> : {guest.NAME}</div> : <div><span>Host</span> : {guest.NAME}</div>}
             <div><span>Total Participants</span> : {Length} </div>
            <div><span>Total Duration</span> : {guest.DURATION} 
            minutes {guest.DURATION>60 && `(${Math.floor(guest.DURATION/60)}hours ${guest.DURATION%60}minutes)`} </div>
        </div> }
        </div>       
    )
}

export default Report
