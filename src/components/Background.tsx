import * as React from 'react';
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineDot from '@mui/lab/TimelineDot';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import { Typography } from '@mui/material';

export default function Component() {
  return (
    <div>
        <div className="header">
            <h1 className="title">Background</h1>
        </div>
        <Timeline position="alternate">
        <TimelineItem>
            <TimelineOppositeContent
                align="right"
                color="white"
                >
                9:30 am
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Eat</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>          
                <Typography variant="h5" component="span">
                    Code
                </Typography>
            </TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineSeparator>
            <TimelineDot />
            <TimelineConnector />
            </TimelineSeparator>
            <TimelineContent>Sleep</TimelineContent>
        </TimelineItem>
        <TimelineItem>
            <TimelineOppositeContent
                align="right"
                color="white"
                >
                September 2019
            </TimelineOppositeContent>
            <TimelineSeparator>
            <TimelineDot />
            </TimelineSeparator>
            <TimelineContent>Moving to UK, starting BEng Biomedical Engineering</TimelineContent>
            
        </TimelineItem>
        </Timeline>
    </div>
  );
}
