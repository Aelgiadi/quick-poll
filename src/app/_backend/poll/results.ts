import { database } from '../initFirebase';
import { ref, get as getFirebaseData } from 'firebase/database';

export async function results(pollId: string) {
  if (!pollId) {
    throw new Error('Missing Poll ID');
  }

  // Create a reference to the new poll in the Firebase database
  const pollRef = ref(database, `poll/${pollId}`);

  const snapshot = await getFirebaseData(pollRef);

  if (!snapshot.exists() || !snapshot.val()) {
    throw new Error(`Poll with id ${pollId} not found`);
  }

  return {
    poll: snapshot.val(),
  };
}
