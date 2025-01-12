'use client';
import { useState, useEffect } from 'react';
import { useParams } from 'next/navigation';

import { subToPoll } from '@/app/_backend/poll/subToPoll';
import type { Poll } from '@/app/_backend/poll/types';

export const usePoll = () => {
  const { id } = useParams<{ id: string }>();
  const [poll, setPoll] = useState<(Poll & { id: string }) | null>(null);

  useEffect(() => {
    if (id) {
      console.log('id: ', id);
      subToPoll(id, setPoll);
    }
  }, [id]);

  return poll;
};
