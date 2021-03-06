import React, { Component } from "react";

// NativeBase
import { Footer, FooterTab, Button, Icon } from "native-base";

// Router
import { Link } from "react-router-native";

class MainFooter extends Component {
  render() {
    return (
      <Footer>
        <FooterTab>
          <Link component={Button} to="/">
            <Icon type="MaterialCommunityIcons" name="baby" />
          </Link>
          <Link component={Button} to="/privateLul">
            <Icon name="lock" />
          </Link>
          <Link component={Button} to="/profile">
            <Icon name="person" />
          </Link>
        </FooterTab>
      </Footer>
    );
  }
}

export default MainFooter;
