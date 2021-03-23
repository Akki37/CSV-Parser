import { Table, TableCell, TableContainer, TableHead, TableRow ,TableBody} from '@material-ui/core'
import SearchIcon from '@material-ui/icons/Search';
import React,{useState} from 'react'
import _uniby from "lodash.uniqby"
import "./ParticipantsTable.css"


function ParticipantsTable(props) {
    const{data,showMember}=props
    const[search,setsearch]=useState("")
    const[filterData,setFilterData]=useState([])
    function handleChange(e){
        const input = e.target.value
        console.log(input);
        if(input.trim().length >0){
            let Search = [...data]
            for( let i = 0 ; i<input.trim().length;i++){
                const resultName = Search.filter((ele)=>{
                    return input.trim()[i].toLowerCase()=== ele.NAME.charAt(i).toLowerCase() 
                })
                const resultEmail = Search.filter((ele)=>{
                    return input.trim()[i].toLowerCase()=== ele.EMAIL.charAt(i).toLowerCase()
                })
                const resultMerge = resultName.concat(resultEmail)
                const uniqueValue = _uniby(resultMerge,"EMAIL")
                if(uniqueValue.length>0){
                    console.log(uniqueValue)
                   Search = uniqueValue
                }else{
                    Search = [] 
                }
             }
             
             setFilterData([...Search])
             
            }else{
                setFilterData([])
            }
        
      setsearch(e.target.value)
    }
    function handleSubmit(e){
        e.preventDefault()
    }
    return (
        <div className="tableContainer">
                 <form onSubmit={handleSubmit}>
                     <div className="search_bar_container">
                     <div className="search_bar">
                     <SearchIcon/>
                     <input id="search_input" name="search" type="search" value={search} placeholder="Search...(name/email)" onChange={handleChange}/>
                     </div>
                     </div>
                     
                 </form>
         <TableContainer className="table_box">
             <Table>
                 <TableHead>
                     <TableRow>
                         <TableCell>
                             NAME
                         </TableCell>
                         <TableCell>
                             EMAIL
                         </TableCell>
                         <TableCell>
                             DURATION
                         </TableCell>
                     </TableRow>
                 </TableHead>
                {search.length===0 ?
                <TableBody className="tbody"> 
                     {data.map((member)=>{
                         return <TableRow key={member.NAME}>
                             <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.NAME}{member.GUEST==="No" ? <sup id="host">*host</sup>: null}</TableCell>
                                <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.EMAIL}</TableCell>
                             <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.DURATION} minutes</TableCell>
                         </TableRow>
                     })}
                </TableBody>
                     :
                     filterData.length ?
                <TableBody>
                     {filterData.map((member)=>{
                         return <TableRow key={member.NAME}>
                             <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.NAME}{member.GUEST==="No" ? <sup id="host">*host</sup>: null}</TableCell>
                                <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.EMAIL}</TableCell>
                             <TableCell className="tdata" onClick={()=>{showMember(member)}}>{member.DURATION} minutes</TableCell>
                         </TableRow>
                     })}
                     
                 </TableBody> 
                 :
                 <TableBody>
                     <TableRow>
                         <TableCell colSpan="3">Record Not Found</TableCell>
                     </TableRow>
                 </TableBody>
                    }
             </Table>
         </TableContainer>
        </div>
    )
}

export default ParticipantsTable
