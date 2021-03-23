import  React,{useState}  from 'react'
import DataTable from './DataTable'
import CSVReader from "react-csv-reader"
import NoFile from "./NoFile.js"
import "./FileUpload.css"
function FileUpload(props) {
    const[participants,setParticipants]=useState([])
    const papaparseOptions = {
        header: true,
        dynamicTyping: true,
        skipEmptyLines: true,
        transformHeader: (header) =>
          header
            .toUpperCase()
            .replace(/(USER\s|TOTAL\s|\s\(MINUTES\)|\s\(ORIGINAL NAME\))/g ,"" )
      }
    return (
        <div>
         <div className="upload_Container">
            <div>Upload your file here -  </div>
            <CSVReader 
                 cssClass="csv-reader-input"
            cssInputClass="csv-input"
            cssLabelClass="csv-label"
             onFileLoaded={ data => setParticipants(data)}
            parserOptions={papaparseOptions}
               inputStyle={{color: 'olive',fontWeight:"bold"}}
            />
            </div>
            {participants.length ? <DataTable data={participants}/> : <NoFile/>}
        </div>
    )
}

export default FileUpload
