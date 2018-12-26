import React from "react";
import { Button } from 'react-native'

export class HomeComponent extends React.Component {

    constructor(props){ super(props) }

    
    render() {
        return (
            <Button
              title="Go to Details"
              onPress={() => this.props.navigation.toggleDrawer() } />
        );
    }
}
