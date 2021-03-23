import React from 'react'
import PublishIcon from '@material-ui/icons/Publish';
import "./NoFile.css"

function NoFile(props) {
    return (
        <div className="no_file">
            <div>
                <div id="upload_icon"><PublishIcon style={{fontSize:"100px"}} /></div>            
            <div>No File To Parse. Upload your .csv file</div>
            </div>
        </div>
    )
}

export default NoFile
