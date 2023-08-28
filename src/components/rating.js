/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   rating.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/22 05:45:19 by macbook           #+#    #+#             */
/*   Updated: 2023/03/22 18:08:58 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react';
import Box from '@mui/material/Box';
import Rating from '@mui/material/Rating';
import Brightness1Icon from '@mui/icons-material/Brightness1';
import FiberManualRecordRoundedIcon from '@mui/icons-material/FiberManualRecordRounded';

export default function TextRating(value) {
  return (
    <Box
      sx={{
        width: 200,
        display: 'flex',
        alignItems: 'center',
        width: 'fit-content',
      }}
    >
      <Rating
        icon={<FiberManualRecordRoundedIcon fontSize='small' style={{ fill: '#546a7b' }}/>}
        name="text-feedback"
        value={value.value}
        readOnly
        precision={0.5}
        emptyIcon={<FiberManualRecordRoundedIcon style={{ opacity: 0.55 }} fontSize="small" />}
      />
    </Box>
  );
}