import React, { Component } from "react";
import store from "../stores/store";

// NativeBase
import { Header, Body, Text, Left, Button, Icon, Right } from "native-base";

// Routing
import { withRouter } from "react-router-native";
import { Link } from "react-router-native";

class MainHeader extends Component {
  render() {
    return (
      <Header>
        <Left>
          <Button transparent onPress={() => this.props.history.goBack()}>
            <Icon name="arrow-back" />
          </Button>
        </Left>
        <Body>
          <Text>What the shop</Text>
        </Body>
        <Right>
          <Link component={Button} to='/Cart' transparent>
            <Text>
              {store.counter} <Icon name="beer" />
            </Text>
          </Link>
        </Right>
      </Header>
    );
  }
}

export default withRouter(MainHeader);
