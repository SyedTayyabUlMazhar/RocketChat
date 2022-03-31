import { Button } from '@common';
import { SocketUtil } from '@utils';
import React, { useState } from 'react';
import { View, TextInput } from 'react-native';
import styles from './styles';


export default Chat = ({ route }) =>
{

  const [recepient, setRecepient] = useState(route?.params?.otherUserName ?? '');
  const [message, setMessage] = useState('Sample message');

  async function onPressSend ()
  {
    console.log('onPressSend:', recepient, message);
    try
    {
      await SocketUtil.sendMessageToUser(recepient, message);
      alert('Success');
    }
    catch (e)
    {
      console.log('onPressSend Error:', e);
      alert('Failed');
    }
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholderTextColor="gray"
        placeholder="Recepient"
        value={recepient}
        onChangeText={setRecepient}
      />
      <TextInput
        style={styles.textInput}
        placeholderTextColor="gray"
        placeholder="Message"
        value={message}
        onChangeText={setMessage}
      />
      <Button title="Send" onPress={onPressSend} />
    </View>
  );
};
