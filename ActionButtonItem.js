import React, { Component } from 'react'
import { Animated, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

export default class ActionButtonItem extends Component {

  render () {
    return (
      <Animated.View
        style={[{
          opacity: this.props.anim,
          flexDirection: 'row',
          transform: [
            {
              translateY: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, (this.props.itemNumber * -60) + -90],
              })
            },
            {
              translateX: this.props.anim.interpolate({
                inputRange: [0, 1],
                outputRange: [0, 0],
              })
            },

          ]
        }]}
      >
        <View style={{flex: 1, alignItems: 'flex-end'}}><Text style={{
          position: 'absolute',
          right: 60,
          top: 15,
          color: 'white',
          fontWeight: 'bold'
        }}>{this.props.title}</Text>
          <TouchableOpacity style={{width: this.props.size, height: this.props.size}}
                            activeOpacity={this.props.activeOpacity || 0.85} onPress={this.props.onPress}>
            <View
              style={[styles.actionButton, {
                width: this.props.size,
                height: this.props.size,
                borderRadius: this.props.size / 2,
                backgroundColor: this.props.buttonColor,
              }]}
            >
              {this.props.children}
            </View>

          </TouchableOpacity>
        </View>
      </Animated.View>
    )
  }

}

ActionButtonItem.defaultProps = {
  onPress: () => {},
}

const styles = StyleSheet.create({
  actionButton: {
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row',
    paddingTop: 2,
    shadowOpacity: 0.3,
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowColor: '#444',
    shadowRadius: 1,
    backgroundColor: 'red',
    position: 'absolute',
  },
})
