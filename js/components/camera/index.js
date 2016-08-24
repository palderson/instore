
'use strict';

import React, {Component} from 'react';
import {connect} from 'react-redux';
import { Image, View, TouchableOpacity,Platform } from 'react-native';

import {pushNewRoute} from '../../actions/route';
import {openDrawer} from '../../actions/drawer';

import {Container, Header, Content, Text, Button, Icon, Card} from 'native-base';
import { Grid, Col, Row } from "react-native-easy-grid";
import Swiper from 'react-native-swiper';

import theme from '../../themes/base-theme';
import styles from './styles';

class Camera extends Component {

    pushNewRoute(route) {
         this.props.pushNewRoute(route);
    }
  render() {
      return (
        <Container theme={theme} style={{backgroundColor: '#fff'}}>
            <Header>
                <Button transparent onPress={this.props.openDrawer} style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon} >
                    <Icon name="ios-menu" />
                </Button>
                <Image source={require('../../../images/Header-Logo.png')} style={styles.logoHeader} />
                <Button transparent style={Platform.OS === 'android' ? styles.aheaderIcon : styles.iosheaderIcon}>
                    <Icon name="ios-search" />
                </Button>
            </Header>
            <Content>
                <View>

                </View>
            </Content>
          </Container>
      )
  }
}

module.exports = Camera
