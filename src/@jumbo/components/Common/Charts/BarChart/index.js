import React, { useCallback, useState } from 'react'
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Text,
} from 'recharts'
import { COLORS } from '@src/common/constants'
import { useStyles } from './BarChart.style'

const EllipsisAxisTick = (props) => {
  const { maxLines = 3, payload, textAnchor, name, iconUrl, ...rest } = props
  const classes = useStyles()
  const badge = name === payload.value
  const [text, setText] = useState(payload.value)
  const [suffix, setSuffix] = useState('')

  const measuredRef = useCallback(
    (node) => {
      if (node === null) {
        return
      }
      let { wordsByLines } = node.state
      let biggestLine = wordsByLines.reduce((a, b) =>
        a.width > b.width ? a : b
      )
      let tempText = text
      const tempSuffix =
        wordsByLines.length > maxLines || biggestLine.width > rest.width
          ? '…'
          : ''

      while (wordsByLines.length > maxLines || biggestLine.width > rest.width) {
        tempText = tempText.slice(0, -1)
        wordsByLines = node.getWordsByLines(
          {
            ...rest,
            children: tempText + tempSuffix,
          },
          true
        )
        biggestLine = wordsByLines.reduce((a, b) => (a.width > b.width ? a : b))
      }

      if (tempText !== text) {
        setText(tempText)
        setSuffix(tempSuffix)
      }
    },
    [maxLines, rest, text]
  )

  return (
    <g>
      {badge && iconUrl && (
        <image
          href={iconUrl}
          x={props.x - 60}
          y={props.y - 20}
          height="53px"
          width="32px"
          style={{
            transform: 'translate(25px, -40px)',
          }}
        />
      )}
      <Text
        className={classes.barTxt}
        textAnchor={textAnchor}
        fill={'#000'}
        {...rest}
        ref={measuredRef}
      >
        {text + suffix}
      </Text>
      <title className={classes.barTxt} textAnchor={textAnchor} fill={'#000'}>
        {payload.value}
      </title>
    </g>
  )
}

const CustomTooltip = ({ active, payload, label }) => {
  const classes = useStyles()
  if (active && payload && payload.length) {
    return (
      <div className={classes.customToolTIp}>
        <p className="label">{label}</p>
        {/* <p className="percentage">{`% : ${payload[0].payload.percentage}`}</p> */}
        <p className="raw">{`Count : ${payload[0].value}`}</p>
      </div>
    )
  }

  return null
}

const ThemeBarChart = ({ data, winnerName, iconUrl }) => {
  return (
    <ResponsiveContainer width="100%" height={320}>
      <BarChart
        width={100}
        height={320}
        margin={{ right: 25, left: 25 }}
        data={data}
        layout="vertical"
        barSize={38}
        barGap={7}
      >
        <CartesianGrid strokeDasharray="3 3" width={5} />
        <XAxis type="number" />
        <YAxis
          width={90}
          type="category"
          dataKey="name"
          tick={
            <EllipsisAxisTick
              maxLines={3}
              iconUrl={iconUrl}
              name={winnerName}
            />
          }
        />
        <Tooltip content={<CustomTooltip />} />
        <Bar dataKey="rawCount">
          {data.map((entry, index) => (
            <Cell
              key={`bar-${index}`}
              height={38}
              fill={COLORS[entry.option === 'optionA' ? 0 : 1]}
            />
          ))}
        </Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}

export default ThemeBarChart
