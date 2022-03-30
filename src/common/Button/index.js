import React from 'react';
import { Text, TouchableOpacity } from 'react-native';
import styles from './styles';


export default Button = (props) =>
{
  const { title, onPress } = props;
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.title}>{title}</Text>
    </TouchableOpacity>
  );
};
