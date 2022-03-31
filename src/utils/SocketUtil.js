// @ts-check
import * as RocketChat from '@rocket.chat/sdk';

async function connect ()
{
  try
  {
    let response = await RocketChat.driver.connect({
      host: 'http://167.172.207.17:3000',
      useSsl: false,
    });
    console.info('SocketUtil connect Response:', response);
    return response;
  } catch (e)
  {
    console.error('SocketUtil connect Error:', e);
    alert('Failed');
    throw e;
  }
}
/**
 * 
 * @param {string} username 
 * @param {string} password 
 * @returns {Promise<string>} id
 */
async function login (username, password)
{
  try
  {
    console.info('SocketUtil onLoginPress:', { username, password });
    const id = await RocketChat.driver.login({
      username,
      password,
    });
    console.info('SocketUtil onLoginPress Response:', id);

    return id;
  } catch (e)
  {
    console.error('SocketUtil onLoginPress Error:', e);
    alert('Failed');
  }
};

/**
 * @param {string} username
 * @param {string} message
 */
async function sendMessageToUser (username, message)
{
  try
  {
    const roomId = await RocketChat.driver.getDirectMessageRoomId(username);
    console.log(`sendMessageToUser roomId of ${username}`, roomId);
    const response = await RocketChat.driver.sendToRoomId(message, roomId);

    console.log('sendMessageToUser Response:', response);

    return response;
  }
  catch (e)
  {
    console.error('Error sendMessageToUser:', e);
    throw e;
  }
};

export default 
{ 
  connect, 
  login, 
  sendMessageToUser,
};