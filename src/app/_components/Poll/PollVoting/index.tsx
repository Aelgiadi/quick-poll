'use client';
import React from 'react';
import { useRouter } from 'next/navigation';
import { CardContent, CardHeader, Stack, Button } from '@mui/material';

import { vote as voteForOption } from '@/app/_backend/poll/vote';
import { usePoll } from '../usePoll';

export const PollWhileVoting = () => {
  const router = useRouter();
  const poll = usePoll();

  const handleVote = async (optionId: string) => {
    if (!poll) return;

    await voteForOption(poll.id, optionId);
    router.push(`/results/${poll.id}`);
  };

  if (!poll) {
    return <div>Loading poll...</div>;
  }

  return (
    <>
      <CardHeader title={poll.question} />
      <CardContent>
        <Stack direction={'column'} spacing={2}>
          {Object.entries(poll.options).map(([optionId, option]) => (
            <Button
              key={optionId}
              variant={'outlined'}
              onClick={() => handleVote(optionId)}
            >
              {option.text}
            </Button>
          ))}
        </Stack>
      </CardContent>
    </>
  );
};
