import React from 'react'
import { StatusBar } from 'react-native'
import { Body, Header, Left, Right, Title, Button } from "native-base";
import Icon from 'react-native-vector-icons/Entypo';

export default function header({ page, navigation }) {
    return (
        <Header style={{ backgroundColor: "rgba(151, 235, 244, .7)", elevation: 1 }}>
            <StatusBar backgroundColor="rgba(151, 235, 244, .7)" barStyle="dark-content" />
            <Left>
                <Button
                    transparent
                    onPress={() => navigation.toggleDrawer()}>
                    <Icon name="menu" size={30} />
                </Button>
            </Left>
            <Body style={{ alignItems: "flex-end" }}>
                <Title style={{ color: "#000", fontSize: 25, textTransform: "uppercase", fontWeight: "bold" }}>{page}</Title>
            </Body>
            <Right />
        </Header>
    )
}
