import React from 'react'
import { View, ScrollView } from 'react-native'
import LineGraph from '../components/charts/LineGraph'
import PieGraph from '../components/charts/PieGraph'
import ProgressGraph from '../components/charts/ProgressGraph'
import StackedGraph from '../components/charts/StackedGraph'
import DATA from '../data/index.json'

export default function Home(props) {
    return (
        <View>
            <ScrollView>
                <PieGraph />
                <LineGraph
                    Lables={DATA.map(el => el.year).reverse()}
                    set={DATA.map(el => el.population / 1000000).reverse()}
                />
                <ProgressGraph
                    Lables={["Total", "male", "female"]}
                    set={[1, DATA[0].male / DATA[0].population, DATA[0].female / DATA[0].population]}
                />
                <StackedGraph
                    Lables={DATA.map(el => el.year).reverse()}
                    set={DATA.map(el => [Number(Number(el.female / 1000000).toFixed(0)), Number(Number(el.male / 1000000).toFixed(0))]).reverse()}
                />
            </ScrollView>
        </View>
    )
}
