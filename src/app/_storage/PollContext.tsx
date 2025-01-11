'use client';
import React, { createContext, useContext } from 'react';
import type { Poll } from '@/app/_backend/poll/types';
import { usePoll as useCurrentPoll } from '@/app/_components/Poll/usePoll';

interface IPollContext {
  pollId: string | undefined;
  poll: Poll | undefined;
  onCreate: () => void;
  onVote: () => void;
}

const PollContext = createContext<IPollContext | null>(null);

export const usePoll = () => {
  const context = useContext(PollContext);
  if (!context) {
    throw new Error('Missing Poll Context Provider');
  }
  return context;
};

export const PollContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const poll = useCurrentPoll();

  const onCreate = () => {};

  const onVote = () => {};

  return (
    <PollContext.Provider
      value={{
        pollId: poll?.id,
        poll: poll ?? undefined,
        onCreate,
        onVote,
      }}
    >
      {children}
    </PollContext.Provider>
  );
};
