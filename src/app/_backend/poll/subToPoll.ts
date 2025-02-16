import { ref, onValue } from 'firebase/database';
import { database } from '../initFirebase';
import { Poll } from './types';

export const subToPoll = (pollId: string, updatePoll: (poll: Poll) => void) => {
  const pollRef = ref(database, `poll/${pollId}`);

  onValue(pollRef, (snapshot) => {
    const poll = snapshot.val();

    if (!poll) return;

    updatePoll(poll);
  });
};
