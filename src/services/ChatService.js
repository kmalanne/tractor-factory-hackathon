import Firebase from './Firebase';

const REFERENCE = 'chat';

export const send = ({
  sender = 'anon',
  message = null
}) => {
  if (message === '') {
    return Promise.resolve();
  }
  if (message === null) {
    throw new Error('Message body missing');
  }

  const timestamp = new Date().toISOString();
  return Firebase.database()
    .ref(REFERENCE)
    .push({ sender, message, timestamp });
};

let currentQuery;
let currentCallback;

export const subscribe = (callback, maxMessages = 100) => {
  if (!callback) {
    throw new Error('A subscription callback required!');
  }

  if (currentQuery && currentCallback) {
    currentQuery.off('value', currentCallback);
    currentQuery = null;
    currentCallback = null;
  }

  currentQuery = Firebase.database()
    .ref(REFERENCE)
    .limitToLast(maxMessages);
  currentCallback = callback;

  currentQuery.on('value', snapshot => {
    const data = snapshot.val();
    const messages = [];
    for (const key in data) {
      const { sender, message, timestamp } = data[key];
      messages.push({
        key,
        sender,
        message,
        timestamp: timestamp ? new Date(timestamp) : new Date(2000, 0, 1)
      });
    }

    callback(messages);
  });
};