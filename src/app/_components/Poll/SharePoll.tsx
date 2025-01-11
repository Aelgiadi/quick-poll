'use client';
import { QRCodeSVG } from 'qrcode.react';
import { Box, CardContent, CardHeader } from '@mui/material';
import {
  FacebookShareButton,
  TwitterShareButton,
  LinkedinShareButton,
  EmailShareButton,
  FacebookIcon,
  TwitterIcon,
  LinkedinIcon,
  EmailIcon,
} from 'react-share';
import { usePoll } from '@/app/_storage/PollContext';

export const SharePoll: React.FC = () => {
  const { pollId, poll } = usePoll();
  const basePath = window.location.origin;
  const title = 'Check out the poll!';

  if (!poll || !pollId || !basePath) return null;

  const shareURL = `${basePath}/vote/${pollId}`;

  return (
    <>
      <CardHeader
        sx={{ textAlign: 'center' }}
        title={'🎉 Share your poll! 🎉'}
      />
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          gap: 2,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Box
          sx={{
            display: 'flex',
            gap: 2,
          }}
        >
          <FacebookShareButton url={shareURL} title={title}>
            <FacebookIcon size={32} round />
          </FacebookShareButton>

          <TwitterShareButton url={shareURL} title={title}>
            <TwitterIcon size={32} round />
          </TwitterShareButton>

          <LinkedinShareButton url={shareURL} title={title}>
            <LinkedinIcon size={32} round />
          </LinkedinShareButton>

          <EmailShareButton
            url={shareURL}
            subject={title}
            body='Check out this poll I created:'
          >
            <EmailIcon size={32} round />
          </EmailShareButton>
        </Box>
        <QRCodeSVG value={shareURL} size={176} />
      </CardContent>
    </>
  );
};
