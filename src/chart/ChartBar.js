import React, {useState} from "react";
import {Bar} from 'react-chartjs-2'
import axios from 'axios'
import {string} from "prop-types";

const ChartBar = props => {
    const [totalKey,setTotalKey] = useState([]);
    const [totalValue,setTotalValue] =useState([]);
    const [name,setName] = useState('')

    const chartHandle = e => {
        axios
            .get(`http://localhost:8080/user/data/${name}`)
            .then((res)=>{
                alert("성공" + res.data)
                const keyContainer =[];
                const valueContainer  = [];
                Object.entries(res.data).forEach(([key,value])=>{
                    console.log("밸류값"+value)
                    keyContainer.push(key)
                    valueContainer.push(value)
                    setTotalKey(keyContainer);
                    setTotalValue(valueContainer)
                    totalValue.split(',').map(Number)
                    console.log(totalValue)
                })
            })
            .catch((err)=>{
                alert("실패")
                throw err;
            })
    }
    const chartData = {
        labels: ['1월','2월','3월','4월','5월','6월','7월','8월','9월','10월','11월','12월'],
        datasets: [
            {
                label: totalKey,
                data: totalValue,
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