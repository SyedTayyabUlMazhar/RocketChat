import React, {  } from 'react';
import { View } from 'react-native';
import styles from './styles';
import { Button } from '@common';
import { NavigationService, SocketUtil } from '@utils';

console.clear();

export default Home = (props) =>
{
  async function connect ()
  {
    try 
    {
      await SocketUtil.connect();
      NavigationService.navigate('Login');
    }
    catch (e)
    {
      console.log('Error:', e);
    }
  };

  return (
    <View style={styles.container}>
      <Button title={"Connect"} onPress={connect} />
    </View>
  );
};
