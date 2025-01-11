'use client';
import React from 'react';
import { CardContent, CardHeader, Stack } from '@mui/material';

import { LinearProgressWithLabel } from '@/app/_components/LinearProgressWithLabel';
import type { PollOption as Option } from '@/app/_backend/poll/types';
import { usePoll } from './usePoll';

export const PollResults = () => {
  const poll = usePoll();

  if (!poll) {
    return <div>Loading poll...</div>;
  }

  const totalVotes = Object.values(poll.options).reduce(
    (total, option) => total + option.votes,
    0
  );

  return (
    <>
      <CardHeader title={poll.question} />
      <CardContent>
        <Stack direction={'column'} spacing={2}>
          {Object.entries(poll.options).map(([optionId, option]) => (
            <PollOptionProgression
              key={optionId}
              option={option}
              totalVotes={totalVotes}
            />
          ))}
        </Stack>
      </CardContent>
    </>
  );
};

interface PollOptionProps {
  option: Option;
  totalVotes: number;
}

const PollOptionProgression = ({ option, totalVotes }: PollOptionProps) => {
  const calculateResultPercentage = (): number => {
    return Math.ceil((option.votes / totalVotes) * 100);
  };

  return (
    <LinearProgressWithLabel
      sx={{
        height: '2rem',
        borderRadius: 5,
      }}
      variant='determinate'
      value={calculateResultPercentage()}
      displayValue={option.votes}
      label={option.text}
    />
  );
};
