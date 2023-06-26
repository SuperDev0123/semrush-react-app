import React, { useEffect, useState } from 'react'
import {
  PieChart,
  Pie,
  Cell,
  Sector,
  ResponsiveContainer,
  Tooltip,
} from 'recharts'
import { COLORS } from '@src/common/constants'
import { useStyles } from './PieChart.style'

const TwoLevelPieChart = ({ data, winnerName, iconUrl }) => {
  const classes = useStyles()
  const [activeIndex, setActiveIndex] = useState(0)
  const [chartData, setChartData] = useState([])
  const [isData, setIsData] = useState(false)
  const percentage = (partialValue, totalValue) => {
    return (100 * partialValue) / totalValue
  }

  const RenderActiveShape = ({ ...props }) => {
    const {
      cx,
      cy,
      innerRadius,
      outerRadius,
      startAngle,
      endAngle,
      fill,
      payload,
    } = props

    return (
      <g>
        {isData ? (
          <text
            x={cx}
            y={cy}
            dy={8}
            textAnchor="middle"
            fill={isData ? fill : '#000'}
          >
            {payload.name}
          </text>
        ) : (
          <>
            <text
              x={cx}
              y={cy - 7}
              dy={8}
              textAnchor="middle"
              fill={isData ? fill : '#000'}
            >
              {payload.name}
            </text>
            <text x={cx} y={cy + 7} dy={8} textAnchor="middle" fill={'#000'}>
              recorded
            </text>
          </>
        )}
        <Sector
          cx={cx}
          cy={cy}
          innerRadius={innerRadius}
          outerRadius={outerRadius}
          startAngle={startAngle}
          endAngle={endAngle}
          fill={fill}
        />
      </g>
    )
  }

  const CustomTooltip = (props) => {
    const { active, payload } = props
    let sum = 0
    for (const element of chartData.entries()) {
      sum += element[1].value
    }
    if (active && payload && payload.length && isData) {
      const { name, value } = payload[0]
      return (
        <div
          className={classes.customTooltipWrapper}
          style={{
            transform: `translate( ${50}px ,${-30}px )`,
          }}
        >
          <div
            className={classes.react}
            style={{ backgroundColor: payload[0].payload.fill }}
          />
          <div>
            <div className={classes.labelTitle}>{name}</div>
            <div className={classes.labelValue}>
              {percentage(value, sum).toFixed(2)} %
            </div>
          </div>
        </div>
      )
    }

    return null
  }
  const onPieEnter = (_, index) => {
    setActiveIndex(index)
  }
  useEffect(() => {
    let sum = 0
    for (const element of data.entries()) {
      sum += element[1].value
    }
    if (sum <= 0) {
      setIsData(false)
      setChartData([
        {
          name: 'No data',
          option: 'NoDat',
          value: 1,
        },
      ])
    } else {
      setIsData(true)
      setChartData(data)
    }
  }, [data])

  return (
    <ResponsiveContainer width="100%" height={320} className={classes.root}>
      <PieChart width={100} height={320}>
        <Tooltip content={<CustomTooltip />} />
        <Pie
          activeIndex={activeIndex}
          activeShape={<RenderActiveShape iconUrl={iconUrl} />}
          data={chartData}
          cx="50%"
          cy="50%"
          startAngle={0}
          endAngle={360}
          innerRadius={80}
          outerRadius={110}
          fill="#8884d8"
          paddingAngle={3}
          dataKey="value"
          onMouseEnter={onPieEnter}
        >
          {chartData.map((entry, index) => (
            <Cell
              key={`cell-${index}`}
              winner={winnerName}
              fill={
                isData ? COLORS[entry.option === 'optionA' ? 0 : 1] : '#c5c5c5'
              }
            />
          ))}
        </Pie>
      </PieChart>
    </ResponsiveContainer>
  )
}

export default TwoLevelPieChart
