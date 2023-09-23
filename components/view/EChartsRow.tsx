"use client"
import ReactEcharts from "echarts-for-react"
import { chartType } from '@/interface/interface'


function EChartsRow({ chartRec }:{chartRec: chartType[]}) {

  let catArr = chartRec.map((item) => item?.category)
  let valArr = chartRec.map((item) => item?.value)

  const options = {
    grid: { top: 20, right: 40, bottom: 20, left: 40 },
    xAxis: {
      type: "category",
      data: catArr || []
    },
    yAxis: {
      type: "value"
    },
    series: [
      {
        data: valArr || [],
        type: "bar",
        smooth: true
      }
    ],
    tooltip: {
      trigger: "axis"
    }
  }

	return (
    <div className="chart">
      <ReactEcharts
        option={options}
        style={{ width: "100%", height: "300px" }}
      />
    </div>
  )
}
export default EChartsRow