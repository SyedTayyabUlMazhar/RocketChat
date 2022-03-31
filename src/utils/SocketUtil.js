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

export default 
{ 
  connect, 
};