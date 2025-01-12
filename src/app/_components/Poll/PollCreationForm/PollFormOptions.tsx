'use client';
import type { KeyboardEvent } from 'react';
import { CloseOutlined, Add } from '@mui/icons-material';
import {
  IconButton,
  TextField,
  FormLabel,
  Card,
  Button,
  Stack,
} from '@mui/material';

interface Props {
  options: string[];
  onDeleteOption: (index: number) => void;
  onAddOption: () => void;
  onChangeOption: (index: number, value: string) => void;
}
export const PollFormOptions = ({
  options,
  onDeleteOption,
  onAddOption,
  onChangeOption,
}: Props) => {
  const handleOptionEnter = (e: KeyboardEvent<HTMLElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      onAddOption();
    }
  };
  return (
    <>
      <FormLabel>Options</FormLabel>
      <Card variant='elevation' elevation={0} style={{ padding: '1em' }}>
        <Stack direction='column' spacing={2}>
          {options.map((option, index) => (
            <div
              key={index}
              style={{
                display: 'flex',
                gap: '1rem',
                width: '100%',
                alignItems: 'center',
              }}
            >
              <TextField
                placeholder='Enter an option...'
                value={option}
                onChange={(e) => onChangeOption(index, e.target.value)}
                style={{ flex: 1 }}
                onKeyDown={handleOptionEnter}
              />
              <IconButton
                aria-label='remove'
                onClick={() => onDeleteOption(index)}
              >
                <CloseOutlined />
              </IconButton>
            </div>
          ))}
        </Stack>
        <Button
          startIcon={<Add />}
          variant='text'
          onClick={() => onAddOption()}
        >
          Add option
        </Button>
      </Card>
    </>
  );
};
