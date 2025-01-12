import { database } from '../initFirebase';
import { ref, get as getFirebaseData, update } from 'firebase/database';
import { Poll } from './types';

export async function vote(pollId: string, optionId: string) {
  if (!pollId) {
    throw new Error('Missing Poll ID');
  }

  if (!optionId) {
    throw new Error('Missing Option ID');
  }

  // get DB refrence for the poll
  const pollRef = ref(database, `poll/${pollId}`);

  const snapshot = await getFirebaseData(pollRef);

  if (!snapshot.exists() || !snapshot.val()) {
    throw new Error('Poll not found');
  }

  const poll: Poll = snapshot.val();

  if (poll.options[optionId]) {
    // increment the specific option's votes by 1
    poll.options[optionId].votes++;
  }

  // Use update method to update the poll object
  await update(pollRef, poll);

  return {
    pollId,
  };
}
