import React, {useEffect, useState} from "react";
import {Bar} from 'react-chartjs-2'
import axios from 'axios'

const ChartBar = props => {
    const [totalKey,settotalKey] = useState([]);
    const [totalValue,settotalValue] =useState([]);
    const [chart,setChart] =useState({})
    const [name,setName] = useState('')


    const chartHandle = e => {
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
                settotalKey(keykey);
                settotalValue(valuesvalues)
                alert("차트 데이터값"+totalValue)
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
            },
            // {
            //     label: '방문자',
            //     data: totalValue,
            //     backgroundColor: '#FFE4C4'
            // },
        ]
    }
    const {chartValue} = props
    const [dataType, setDataType] = useState(chartData)
    const switchCase = (param) =>{
        switch(param){
            case "Sales": return setDataType(chartData)
        }
    }
    switchCase(chartValue)
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