import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

const ChartBar = props => {
    const [totalKey,setTotalKey] = useState([]);
    let [totalValue,setTotalValue] =useState([]);
    const [name,setName] = useState('')
    const chartHandle = e => {
        // alert("배열 보기: "+[1,2,,3])
        axios
            .get(`http://localhost:8080/user/data/${name}`)
            .then((res)=>{
                alert("성공" + res.data)
                const keykey =[];
                const valuesvalues =[];
                Object.entries(res.data).forEach(([key,value])=>{
                    keykey.push(key)
                    valuesvalues.push(value)
                })
                alert("배열 값: "+valuesvalues)
                setTotalKey(keykey);
                setTotalValue(valuesvalues)
                console.log(totalValue)
                alert("차트 데이터값"+totalValue)
            })
            .catch((err)=>{
                alert("실패")
                throw err;
            })
    }
    console.log(totalValue)
    const chartData = {
        labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        datasets: [
            {
                label: totalKey,
                // data: totalValue.map(data=>(data)),
                // data: totalValue.forEach(data=>(data)),
                // data: totalValue={totalValue},
                // data: "totalValue",
                // data: ["23,42,56,15,65,15,48,98"],
                // data: totalValue.push(totalValue),
                // data: parseInt(totalValue),
                data: parseInt(totalValue),
                backgroundColor: 'rgba(120,29,29,0.3)',
                borderWidth: 4,
                LineTension: 0
            }
        ]
    }
    const {chartValue} = props
    const [dataType, setDataType] = useState(chartData)
    // const switchCase = (param) =>{
    //     switch(param){
    //         case "Sales": return setDataType(chartData)
    //     }
    // }
    // switchCase(chartValue)
    return (
        <div>
            <h2>{chartValue}</h2>
            <input type="text" onChange={e => setName(e.target.value)}/>
            <input type="button" onClick={chartHandle} value={"회원조회"}/>
            <Bar
                data={chartData}
            />
        </div>
    );
}

export default ChartBar