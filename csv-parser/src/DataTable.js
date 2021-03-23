import React,{useState,useEffect} from 'react'
import BarChart from './BarChart'
import ParticipantsTable from './ParticipantsTable'
import Report from './Report'
import "./DataTable.css"

function DataTable(props) {
    const{data}=props
    const[Host,setHost]=useState({})
    const[members,setMembers]=useState({})
   useEffect(() => {
    const host = data.filter((member)=>{
        return member.GUEST === "No"
    })
    setHost({...host[0]})
   }, [data]) 
    function showMember(member){
          setMembers({...member})
    }
    return (
        <div className="content_container">
            <div className="table_Chart">
            <Report Host={Host} guest={members} Length={data.length}/>
            <BarChart data={data}/>            
            </div>
            <ParticipantsTable data={data} showMember={showMember}/>
           
        </div>
    )
}

export default DataTable
