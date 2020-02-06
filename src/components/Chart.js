import React, {useState, useEffect} from 'react';
import {Doughnut} from 'react-chartjs-2';

export default function Chart() {
  const [chartData,setChartData] = useState();

  useEffect(()=>{
    setChartData({
      labels:['concluído','não concluido'],
      datasets:[{
        label:'tarefa',
        data:[10,50],
        backgroundColor:[
          'rgba(198, 52, 235, 0.5)',
          'rgba(52, 235, 165, 0.5)'
        ],
        borderColor:[
          '#c634eb',
          '#34eba5'
        ],
        borderWidth: 2
      }],
    })
  },[])

  return (
    <div>
      <Doughnut
        data={chartData}
        width={10}
        height={5}
        options={{
          circumference: Math.PI,
          rotation: Math.PI*(1.0025),
          layout: {
            padding: {
                left: 0,
                right: 0,
                top: 0,
                bottom: 0
            }
          },
          title:{
            display:true,
            text:'Tarefas',
            fontSize:25
          },
        }}
      />

    </div>
  );
}
