# Givelify Todo Application

[View Demo](https://givelify-todo-application.herokuapp.com/)

This todo application is designed to allow users to create, modify, and delete todo items. Users have the ability to assign and reassign todo items to specific date categories (e.g. Today, Tomorrow, Next Week). Active todo items are shown in association with their respective categories. Completed items can be viewed at the bottom of the application.

This application was built using React with [Create React App](https://create-react-app.dev/) as its starter template. Styling was done using [styled-components](https://styled-components.com/).

## Getting Started

Please run the following commands to load the application locally:

```
git clone https://github.com/djsaun/Givelify-Todo-Application.git

cd Givelify-Todo-Application

yarn && yarn start
```

The application will run in development mode and will be accessible at [http://localhost:3000](http://localhost:3000)

## Future Todos

The following updates should be made to the application in the future:

[ ] Set up a database to persist application data.\
[ ] Configure authentication so that users can only access their personal todo items.\
[ ] Set up a [Storybook](https://storybook.js.org) instance to develop and view components in isolation of each other and the application.\
[ ] Configure [Cypress](https://www.cypress.io/) for end-to-end testing of application components and functionality. \
[ ] Allow users to edit item text after it has been created. \
[ ] Allow users to reopen closed items. \
[ ] Replace the category select component (right now it's using the default HTML select element) with a custom solution. This would allow us to further customize the options styling and dropdown arrow placement within the select element.
