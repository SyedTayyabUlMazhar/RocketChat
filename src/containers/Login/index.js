import React, { useState } from 'react';
import { Button } from '@common';
import { View, TextInput } from 'react-native';
import styles from './styles';
import { NavigationService, SocketUtil } from '@utils';

const usernames = ['test19991', 'test19992']
const [_username, _password] = ['test19991', 'test123'];

const otherUserName = (() =>
{
  const index = usernames.findIndex(element => element !== _username);
  return usernames[index];
})();


export default Login = (props) =>
{
  const [username, setUsername] = useState(_username);
  const [password, setPassword] = useState(_password);

  async function onLoginPress ()
  {
    try
    {
      const userId = await SocketUtil.login(username, password);
      console.info('onLoginPress userId:', userId);

      NavigationService.navigate('Chat', { otherUserName })
    } catch (e)
    {
      console.error('onLoginPress Error:', e);
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="gray"
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
        defaultValue={"test19991"}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor="gray"
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
        defaultValue={"test123"}
      />
      <Button title="Login" onPress={onLoginPress} />
    </View>
  );
};
