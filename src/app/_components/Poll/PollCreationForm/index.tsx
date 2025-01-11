'use client';
import { useState } from 'react';
import type { ChangeEvent, FormEvent } from 'react';
import { useRouter } from 'next/navigation';
import {
  Button,
  TextField,
  FormLabel,
  CardHeader,
  CardContent,
} from '@mui/material';

import { PollFormOptions } from './PollFormOptions';
import { create as createPoll } from '@/app/_backend/poll/create';
import { PollBase } from '../PollBase';

const PollCreationForm = () => {
  const [question, setQuestion] = useState('');
  const [options, setOptions] = useState(['']);
  const router = useRouter();

  const handleQuestionChange = (event: ChangeEvent<HTMLInputElement>) => {
    setQuestion(event.currentTarget.value);
  };

  const handleChangeOption = (index: number, value: string) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDeleteOption = (index: number) => {
    const newOptions = options.filter((_, i) => i !== index);
    setOptions(newOptions);
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const { pollId } = await createPoll(question, options);

      router.push(`/share/${pollId}`);
    } catch (err) {}
  };

  return (
    <PollBase>
      <CardHeader title='Create a Poll' />
      <CardContent>
        <form
          onSubmit={handleSubmit}
          style={{ display: 'flex', flexDirection: 'column', gap: '.5em' }}
        >
          <FormLabel>Ask a question</FormLabel>
          <TextField
            placeholder='Type your question...'
            onChange={handleQuestionChange}
          />
          <PollFormOptions
            options={options}
            onChangeOption={handleChangeOption}
            onAddOption={handleAddOption}
            onDeleteOption={handleDeleteOption}
          />
          <Button type='submit' variant='contained'>
            Create Poll
          </Button>
        </form>
      </CardContent>
    </PollBase>
  );
};

export default PollCreationForm;
