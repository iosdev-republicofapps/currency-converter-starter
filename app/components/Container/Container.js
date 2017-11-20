import React, { PropTypes } from 'react';
import { View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import styles from './styles';

const Container = ({ children }) => (
  <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
    <View style={styles.container}>{children}</View>
  </TouchableWithoutFeedback>
);

Container.PropTypes = {
  children: PropTypes.element.isRequired,
};

export default Container;
