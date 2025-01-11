'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { subToPoll } from '@/app/_backend/poll/subToPoll';
import type { Poll } from '@/app/_backend/poll/types';

export const usePoll = (recordError?: (error: string) => void) => {
  const { id: pollId } = useParams<{ id: string }>();
  const [poll, setPoll] = useState<(Poll & { id: string }) | null>(null);

  useEffect(() => {
    if (pollId) {
      subToPoll(pollId, setPoll);
    }
  }, [pollId]);

  return poll;
};
