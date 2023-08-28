/* ************************************************************************** */
/*                                                                            */
/*                                                        :::      ::::::::   */
/*   labtab.js                                          :+:      :+:    :+:   */
/*                                                    +:+ +:+         +:+     */
/*   By: macbook <macbook@student.42.fr>            +#+  +:+       +#+        */
/*                                                +#+#+#+#+#+   +#+           */
/*   Created: 2023/03/23 05:45:33 by macbook           #+#    #+#             */
/*   Updated: 2023/03/23 05:50:51 by macbook          ###   ########.fr       */
/*                                                                            */
/* ************************************************************************** */

import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';

export default function LabTabs() {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Item One" value="1" />
            <Tab label="Item Two" value="2" />
            <Tab label="Item Three" value="3" />
          </TabList>
        </Box>
        <TabPanel value="1">xxxx One</TabPanel>
        <TabPanel value="2">yyyyy Two</TabPanel>
        <TabPanel value="3">zzzzz Three</TabPanel>
      </TabContext>
    </Box>
  );
}