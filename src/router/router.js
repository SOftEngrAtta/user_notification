import React, { Component } from "react";
import { createDrawerNavigator, createAppContainer, createStackNavigator } from "react-navigation";

//screens 
import { HomeComponent } from '../components/home/home';

//drawer screen 
import { SideBarTab } from '../components/sidebar/sidebar'

const AppStack = createStackNavigator({
    Home: { screen: HomeComponent },
}, {
        initialRouteName: 'Home' 
});


const DrawerStack = createDrawerNavigator(
    {
        Main: AppStack
    },
    {
        contentComponent: SideBarTab
    }
);

const AppNavigator = createStackNavigator({
    Drawer: { screen: DrawerStack }
}, {
        initialRouteName: 'Drawer',        
        headerMode: 'none'
    })

const MyApp = createAppContainer(AppNavigator);

export class Routers extends Component {
    render() {
        return <MyApp />
    }
}