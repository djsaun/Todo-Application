import React from 'react';
import {
  ThemeProvider
} from 'styled-components';
import calendar from '../icons/calendar.svg';
import folder from '../icons/folder.svg';
import inbox from '../icons/inbox.svg';
import sun from '../icons/sun.svg';


// Create a default theme for the application that contains all of our colors, icons, etc.
const givelifyTheme = {
  colors: {
    black: '#000',
    gray700: '#6B6F7C',
    gray500: '#848791',
    grayBackground: '#F9FAFC',
    white: '#FFF',
    categories: {
      today: '#FF006E',
      tomorrow: '#FB5607',
      this_week: '#FFBE0B',
      no_date: '#9D9FA7'
    }
  },
  icons: {
    categories: {
      today: inbox,
      tomorrow: sun,
      this_week: calendar,
      no_date: folder
    }
  }
}

// Create a styled-components ThemeProvider (https://styled-components.com/docs/advanced#theming) that we'll import into our application
// This will expose our givelifyTheme object to all of our components using React's context API.
const GivelifyThemeProvider = (props) => {

  // Create a default theme object that includes the givelifyTheme
  const theme = {
    givelifyTheme: Object.assign({}, givelifyTheme, props.theme),
  };

  // Pass our givelifyTheme to the ThemeProvider
  return <ThemeProvider theme = {
    theme
  } > {
    props.children
  } < /ThemeProvider>;
};

export default GivelifyThemeProvider;
