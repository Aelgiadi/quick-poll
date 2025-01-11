export interface PollOption {
    id: string,
    text: string,
    votes: number
}

export interface PollOptions {
    [optionId: string]: PollOption
}

export interface Poll {
    id: string
    options: PollOptions,
    question: string,
}