import { lab } from 'd3-color'
import React from 'react'
import { View, Dimensions } from 'react-native'
import { ProgressChart } from 'react-native-chart-kit'
import DATA from '../../data/index.json'

const screenWidth = Dimensions.get("window").width;
const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
};

export default function ProgressGraph({ Lables, set }) {
    return (
        <View>
            <ProgressChart
                data={{ labels: Lables, data: set }}
                width={screenWidth - 20}
                height={220}
                strokeWidth={16}
                radius={32}
                chartConfig={chartConfig}
                hideLegend={false}
                style={{
                    marginVertical: 8,
                    marginHorizontal: 10,
                    borderRadius: 16,
                }}
            />

        </View>
    )
}

const chartConfig = {
    backgroundGradientFrom: "#2c3e50",
    backgroundGradientFromOpacity: 1,
    backgroundGradientTo: "#3498db",
    backgroundGradientToOpacity: 1,
    color: (opacity = 1) => `rgba(173, 730, 146, ${opacity})`,
    strokeWidth: 2, // optional, default 3
    barPercentage: 0.5,
    useShadowColorFromDataset: false // optional
};
