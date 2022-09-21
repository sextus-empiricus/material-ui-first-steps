import React from 'react';
import { AccessTime, Pets } from '@mui/icons-material';
import { Box, Paper, Rating, Typography } from '@mui/material';
import classes from './TourCard.module.css';

interface Props {}

const TourCard = (props: Props) => {
   return (
      <Paper elevation={3}>
         <img
            src="https://bit.ly/3BW0ws8"
            alt="cat"
            className={classes.img}
         />
         <Box paddingX={1}>
            <Typography
               variant="subtitle1"
               component="h2">
               Super flying cat
            </Typography>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <AccessTime sx={{ width: 12.5 }} />
               <Typography
                  variant="body2"
                  component="p"
                  marginLeft={0.5}>
                  5 hours
               </Typography>
            </Box>
            <Box sx={{ display: 'flex', alignItems: 'center' }}>
               <Rating
                  readOnly
                  precision={0.5}
                  icon={<Pets fontSize="inherit" />}
                  emptyIcon={<Pets fontSize="inherit" />}
                  value={4.5}
               />
            </Box>
         </Box>
      </Paper>
   );
};
export { TourCard };
