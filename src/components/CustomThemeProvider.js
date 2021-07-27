import React from 'react';
import { ThemeProvider } from 'styled-components';
import calendar from '../icons/calendar.svg';
import folder from '../icons/folder.svg';
import inbox from '../icons/inbox.svg';
import sun from '../icons/sun.svg';


// Create a default theme for the application that contains all of our colors, icons, etc.
const customTheme = {
  colors: {
    gray900: '#0A1323',
    gray800: '#3B424E',
    gray700: '#6B6F7C',
    gray500: '#848791',
    gray400: '#9D9FA7',
    gray300: '#E4EBF1',
    grayBackground: '#F9FAFC',
    grayShadow: '#EBEEF5',
    green: '#03CEA4',
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
// This will expose our customTheme object to all of our components using React's context API.
const CustomThemeProvider = (props) => {

  // Create a default theme object that includes the customTheme
  const theme = {
    customTheme: Object.assign({}, customTheme, props.theme),
  };

  // Pass our customTheme to the ThemeProvider
  return <ThemeProvider theme = {
    theme
  } > {
    props.children
  } </ThemeProvider>;
};

export default CustomThemeProvider;
