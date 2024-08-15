# Task Management App

A simple task management application that allows users to add, edit, and delete tasks, with a focus on responsive design and user experience.

## Features

- Add, edit, and delete tasks
- Filter tasks by status
- Responsive design for desktop and mobile
- Local storage integration for offline use

# Code Structure

This document provides an overview of the code structure for the Task Management App, highlighting key directories and files and their purposes.

## Directory Overview

### `src/`

The main source directory contains all the code for the application.

#### `components/`

Contains reusable React components used throughout the application.

- **`TaskItem.js`**: Displays individual tasks with options to edit or delete. Styles include task status indicators and action buttons.
- **`AddTaskForm.js`**: Form component for adding new tasks. Includes input fields for title and description.
- **`EditTaskModal.js`**: Modal component for editing existing tasks. Allows users to update task details.

#### `hooks/`

Custom hooks for managing state and side effects.

- **`useTasks.js`**: Manages task-related operations including fetching, adding, updating, and deleting tasks. Also handles task filtering and local storage.

#### `api/`

Contains functions for making API calls.

- **`tasksApi.js`**: Includes functions for interacting with the backend API to get, add, update, and delete tasks.

#### `utils/`

Utility functions and helpers.

- **`localStorage.js`**: Functions for saving and retrieving tasks from local storage, ensuring persistence across sessions.

#### `styles/`

Styled components and global styles for the application.

- **`GlobalStyles.js`**: Global CSS styles applied across the app for consistent look and feel.

### `db.json`

- **`db.json`**: A file used for local development with a mock API server. It simulates the backend database and provides endpoints for tasks data. This file allows for quick setup and testing of the frontend application without requiring a real backend server. It is typically used in conjunction with tools like [json-server](https://github.com/typicode/json-server) to create a REST API for development purposes.


### File Descriptions

- **`App.js`**: The root component that integrates all other components. Manages global state and renders the main UI, including task filtering and the task list.
- **`index.js`**: Entry point of the application. Renders the `App` component into the root DOM element.
- **`README.md`**: This file, providing an overview of the project's code structure and other documentation.

### Key Design Patterns

- **Styled Components**: Used for component-level styling to enhance maintainability and scope styles locally.
- **Error Handling**: Basic error handling is implemented in API calls to manage and log errors effectively.


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)
