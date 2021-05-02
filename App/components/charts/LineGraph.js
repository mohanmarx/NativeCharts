import { lab } from 'd3-color'
import React from 'react'
import { View, Dimensions } from 'react-native'
import { LineChart } from 'react-native-chart-kit'

export default function LineGraph({ Lables, set }) {
    return (
        <View>
            <LineChart
                data={{
                    labels: Lables,
                    datasets: [{ data: set }]
                }}
                width={Dimensions.get("window").width - 20} // from react-native
                height={220}
                yAxisSuffix="m"
                yAxisInterval={1} // optional, defaults to 1
                chartConfig={{
                    backgroundColor: "#e26a00",
                    backgroundGradientFrom: "#fb8c00",
                    backgroundGradientTo: "#ffa726",
                    decimalPlaces: 0, // optional, defaults to 2dp
                    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    labelColor: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
                    style: {
                        borderRadius: 16
                    },
                    propsForDots: {
                        r: "6",
                        strokeWidth: "2",
                        stroke: "#ffa726"
                    },
                }}
                bezier
                style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                    borderRadius: 16,
                }}
            />
        </View>
    )
}
