import { lab } from 'd3-color'
import React from 'react'
import { View, Dimensions } from 'react-native'
import { StackedBarChart } from 'react-native-chart-kit'
import DATA from '../../data/index.json'

const screenWidth = Dimensions.get("window").width;

export default function StackedGraph({ Lables, set }) {
    const data = {
        labels: Lables,
        legend: ["female", 'male'],
        data: set,
        barColors: ["#2980b9", "#2c3e50"]
    };
    return (
        <View>
            <StackedBarChart
                data={data}
                width={screenWidth - 20}
                height={220}
                chartConfig={chartConfig}
                style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                    borderRadius: 16,
                }}
                segments={5}
                bezier
                decimalPlaces={0}
                yAxisSuffix="m"
            />
        </View>
    )
}

const chartConfig = {
    backgroundColor: "#e26a00",
    backgroundGradientFrom: "#a43931",
    backgroundGradientTo: "#3B4371",
    color: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.8,
    decimalPlaces: 0, // optional, defaults to 2dp
    useShadowColorFromDataset: false, // optional,
};