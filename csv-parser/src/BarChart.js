import { ArgumentAxis, BarSeries, Chart, Title, ValueAxis,Legend } from '@devexpress/dx-react-chart-material-ui'
import { Animation , ValueScale } from "@devexpress/dx-react-chart"
import { Paper } from '@material-ui/core'
import React, { useState,useEffect } from 'react'
import "./BarChart.css"


function BarChart(props) {
    const{data}=props
    const[students,setStudents]=useState([])
    useEffect(()=>{
     const result = data.filter((member)=>{
         return member.GUEST === "Yes"
     })
     setStudents(result)
    },[data])
    console.log(students,"students")
    return (
    <div className="bar_chart">
         <Paper 
        style={{boxShadow:"5px 5px 10px black",
             borderRadius:"3px"}}>
         <Chart data={students} >
          <ArgumentAxis />
          <ValueAxis scaleName="Duration" />
          <ValueScale name="Duration"/>
          <BarSeries 
                   name="Duration"
                   color="blue"
                barWidth="0.5"
           argumentField="NAME" 
              valueField="DURATION" 
               scaleName="Duration"
              />
          <Title 
            text="Live Session Stats" />
          <Animation />
          <Legend position="bottom"/>
         </Chart>
         </Paper>
    </div>
    )
}

export default BarChart
