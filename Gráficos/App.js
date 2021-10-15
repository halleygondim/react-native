import React from 'react'
import { View } from 'react-native'
import { VictoryChart, VictoryLine,VictoryBoxPlot, VictoryCandlestick, VictoryLabel, VictoryPie, VictoryScatter, VictoryBar } from 'victory-native'

//npx react-native init grafico
//DOCUMENTAÇÃO: https://formidable.com/open-source/victory/docs/native
//yarn add victory-native
//react-native install react-native-svg


const dadosBarra = [
  { mes: 'Jan', colheita: 13000 },
  { mes: 'Fev', colheita: 16500 },
  { mes: 'Mar', colheita: 14250 },
  { mes: 'Abr', colheita: 19001 }
]

const exemploCandlestick = [
  {
    x: 'Janeiro',
    open: 5,
    close: 10,
    high: 15,
    low: 0
  },
  {
    x: 'Fevereiro',
    open: 10,
    close: 15,
    high: 20,
    low: 5
  },
  {
    x: 'Março',
    open: 15,
    close: 20,
    high: 22,
    low: 10
  },
  {
    x: 'Abril',
    open: 20,
    close: 10,
    high: 25,
    low: 7
  },
  {
    x: 'Maio',
    open: 10,
    close: 8,
    high: 15,
    low: 5
  }
];



export default function App() {
  return (
    <View style={{
      flex: 1,
      justifyContent: 'center',
      alignContent: 'center',
      backgroundColor: '#f5fcff'
    }}>


      <VictoryChart width={350}  >

        {/*
        <VictoryLine interpolation="natural"
          labels={({ datum  }) => datum.y}
          style={{
            data: { stroke: '#c43',
                    strokeWidth: 5
            }
          }}

          data={[
            { x: 10, y: 22 },
            { x: 15, y: 10 },
            { x: 20, y: 5 },
            { x: 25, y: 10 },
            { x: 30, y: 2 }
          ]
          }

        />
        */}

        {/*
      <VictoryPie
        colorScale={['blue', 'orange', 'yellow']}
        data={[
          { x: 'Batata', y: 50 },
          { x: 'Feijão', y: 25 },
          { x: 'Arroz', y: 25 },
        ]}
      />
      */}

        {/*
        <VictoryScatter
          style={{
            data: { fill: "#c43" }
          }}
          size={8}
          data={[
            { x: 1, y: 2 },
            { x: 2, y: 3 },
            { x: 3, y: 5 },
            { x: 4, y: 4 },
            { x: 5, y: 7 },
          ]}

        />
        */}

        {/*
        <VictoryBar data={dadosBarra} x='mes' y='colheita'
          alignment="start"
          labels={({ datum }) => datum.mes}
          style={{ labels: { fill: 'blue' } }}
          labelComponent={<VictoryLabel dx={10} />}
        />
        */}
        {/*
        <VictoryCandlestick data={exemploCandlestick} 
        candleColors={{ positive: '#5f5', negative: '#c43'}}
        closeLabels={({ datum}) => datum.close}
        closeLabelComponent={
          <VictoryLabel
           dy={1}
           textAnchor='start'
          />
        }

        />
      */}


        <VictoryBoxPlot
          boxWidth={20}
          data={[
            { x: 1, y: [1, 2, 3, 5] },
            { x: 2, y: [3, 2, 8, 10] },
            { x: 3, y: [2, 8, 6, 5] },
            { x: 4, y: [1, 3, 2, 9] }
          ]}
          style={{
            min: { stroke: "red" },
            max: { stroke: "green" },
            q1: { fill: "red" },
            q3: { fill: "green" },
            median: { stroke: "white", strokeWidth: 2 },
            minLabels: { fill: "red" },
            maxLabels: { fill: "green" }
          }}
        />



      </VictoryChart >





    </View>
  )
}