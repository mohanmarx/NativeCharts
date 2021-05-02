import { lab } from 'd3-color'
import React from 'react'
import { Dimensions, View, Text } from 'react-native'
import { PieChart } from 'react-native-svg-charts'
import DATA from '../../data/index.json'
import { Text as SvgText } from 'react-native-svg'

const randomColor = () => ('#' + ((Math.random() * 0xff) << 0).toString(16) + 'ffffff').slice(0, 7)
const values = [15, 25, 35, 45, 55];

export default function PieGraph({ }) {

    const pieData = DATA.reverse()
        .map((el, index) => ({
            key: `pie-${index}`,
            value: Number(Number(el.population / 1000000).toFixed(0)),
            svg: {
                fill: randomColor(),
                onPress: () => console.log('press', index),
            },
            arc: { outerRadius: (70 + values[index]) + '%', padAngle: 0 },
            ...el
        }))


    const Labels = ({ slices, height, width }) => {
        return slices.map((slice, index) => {
            const { labelCentroid, pieCentroid, data } = slice;
            return (
                <SvgText
                    key={index}
                    x={pieCentroid[0]}
                    y={pieCentroid[1]}
                    fill={'black'}
                    textAnchor={'middle'}
                    alignmentBaseline={'middle'}
                    fontSize={12}
                    stroke={'black'}
                    strokeWidth={0.2}
                >
                    {`${data.value}M`}
                </SvgText>
            )
        })
    }

    return (
        <View style={{ flexDirection: "row", backgroundColor: "rgba(8,98,113,1)", elevation: 5, marginHorizontal: 10, borderRadius: 10, paddingVertical: 20 }}>
            <View style={{ justifyContent: 'flex-start', flex: 1 }}>
                <PieChart
                    valueAccessor={({ item }) => item.value}
                    data={pieData}
                    spacing={0}
                    outerRadius={'80%'}
                    innerRadius={'20%'}
                    style={{ height: 180 }}
                >
                    <Labels />
                </PieChart>
            </View>
            <View style={{ paddingHorizontal: 20, flexDirection: "column", justifyContent: "space-around" }}>
                {pieData.map(el =>
                    <View key={el.key} style={{ flexDirection: "row", alignItems: "center" }}>
                        <View style={{ backgroundColor: el.svg.fill, height: 10, width: 10, marginRight: 8 }} />
                        <Text key={el.key} style={{ color: el.svg.fill }}>{el.year}</Text>
                    </View>
                )}
            </View>

        </View>
    )
}
