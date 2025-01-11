import { database } from '../initFirebase'
import { set, ref } from 'firebase/database'
import { v4 as uuidv4 } from 'uuid'
import { Poll, PollOptions } from './types'

export async function create( question: string, options: string[] ): Promise<{pollId: string}> {
    try {
        if (!question) {
            throw new Error("Question must be provided");
        }

        if (!options || options.length < 2) {
            throw new Error('2 or more options must be provided')
        }

        const pollId = uuidv4()
        // Create a reference to the new poll in the Firebase database
        const newPollRef = ref(database, `poll/${pollId}`);

        const newPoll: Poll = {
            id: pollId,
            options: toPollOptions(options),
            question
        }

        // Use set method to add the new poll at refrence
        await set(newPollRef, newPoll);

        return {
            pollId,
        };

    } catch (error: any) {
        // Handle errors and send an error response back to the client
        return error;
    }
}

const toPollOptions = (clientOptions: string[]): PollOptions => {
    return clientOptions.reduce((collection: PollOptions, option: string) => {
        const optionId = uuidv4();
        collection[optionId] = { id: optionId, text: option, votes: 0 }
        return collection;
    }, {} as PollOptions);
}
