import {
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
    Legend,
    Scatter,
    ResponsiveContainer,
    ScatterChart,
    ZAxis,
} from 'recharts'

import './nftChart.scss'


const NftChart = ({ nftChart }) => {

    const normalizeData = (data) => {
        return data.map((item) => {
            return {
                price: item.price.toFixed(2),
                timestamp: item.timestamp.substring(5, 10),
                media: item.media,
            }
        })
    }

    const CustomTooltip = ({ active, payload }) => {
        if (active && payload && payload.length) {
            const data = payload[0].payload

            return (
                <div className="custom-tooltip">
                    <img src={data.media} />
                    <div className="customTooltipTime">{data.timestamp}</div>
                    <div className="customTooltipPrice">
                        Price: SOL {data.price}
                    </div>
                </div>
            )
        }
        return null
    }

    const normalData = normalizeData(nftChart)

    return (
        <ResponsiveContainer width="100%" height="100%">
            <ScatterChart
                data={normalData}
                fill="#120c18"
                margin={{
                    top: 20,
                    right: 20,
                    bottom: 10,
                    left: 10,
                }}
            >
                <CartesianGrid stroke="#ffffff2f" fill="rgb(16 11 22)" />
                <XAxis reversed={true} dataKey="timestamp" tickCount={1} />
                <YAxis unit=" SOL" tickCount={7} />
                <ZAxis range={[25]} />
                <Legend />
                <Tooltip content={<CustomTooltip />} />
                <Scatter
                    dataKey="price"
                    fill="#04a067e5"
                    lineType="fitting"
                    line={{ stroke: '#04a067', strokeWidth: 3 }}
                />
            </ScatterChart>
        </ResponsiveContainer>
    )
}

export default NftChart
