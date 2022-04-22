# Challenge: "Frontend Mentor's REST Countries API with color theme switcher (React)"

This excellent challenge was created by, and lives at [frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

In _this_ document we will simply break down that challenge into approachable levels, and give extra tips for getting started.

## Challenge Overview

Your _eventual_ challenge is to make a React app integrate with the REST Countries API to fetch country data and display it like in the designs provided by [frontendmentor.io](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca).

However, in the earlier levels you will be given a file containing with the downloaded countries data, so that you do not have to fetch it from the API.

## Pre-requisites - what do I need to know to finish this challenge?

Level 1 - React week 1:

- React `props`
- The `array.map` method and its use in React JSX
- Lots of CSS (flexbox recommended)

Later levels - React week 2:

- Event handlers: `onClick` for buttons
- Event handlers: `onChange` for input fields and `select` elements
- `useState`: The React State hook
- `useEffect`: The React Effect hook, and how to use it with `fetch`.

## Getting Started

- **Don't** clone this repo.
- Read Level 1 below, but don't start
- Carefully read [the brief in the frontend mentor challenge](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca)
- Sign in to frontendmentor.io and download and expand the starter pack
- Read the instructions and guidance in that pack.
- Read Level 1 below, again! It tells you what you can ignore!
- Make your own React app using `create-react-app`. See [(this guide)](https://docs.codeyourfuture.io/students/guides/creating-a-react-app) if you have forgotten how.
- Copy the [./countriesAll.json](./countriesAll.json) data file into your `src/` directory, and then import it.
- Put your project on GitHub (see below)
- Host it on Netlify (see below)
- Write a plain HTML prototype (e.g. on codepen) with some copy-pasted country "cards". THEN, once you are confident about the HTML you need to create...
- Start to code the React app!

### The data:

- The data you will need is available in the file [./countriesAll.json](./countriesAll.json). This is a list of all countries, obtained from `https://restcountries.eu/rest/v2/all`
- Read "Getting Started" for what to do with this file.
- In _later_ levels you will make your app fetch the data directly from the API as described in the frontendmentor challenge.

## GitHub & Hosting:

Add your project in github and host it on Netlify.

| site:        | correct name                             |
| ------------ | ---------------------------------------- |
| GitHub repo  | `countries-react`                        |
| Netlify site | `cyf-YOURGITHUBUSERNAME-countries-react` |

# Level 1 Challenge

- Write a react app to present the list of countries as shown in the frontend mentor challenge.
- Get as close as possible to the presentation.
- Format the population correctly
- Ignore the search box
- Ignore the region select
- Ignore the colour theme selector
- Ignore the requirement to allow "clicking into" specific countries. Just show the main list.
- Publish your project on GitHub and Netlify with the correct names (see Hosting, above).

# Level 2 challenge

- Add the search box
- When the search box has text in it, your app should update the displayed list of countries to only show matches
  - Accept matches of the string in the country name **AND** matches in the capital's name
- Matches should be case-insensitive.
- When the search bar is clear, all countries should be shown.

# Level 3 challenge

- Add the "region select" menu
- When this is changed, only show the countries which:
  - have the chosen region, AND
  - match the search box term (if there is one)
- When a region is not selected (i.e. the menu is set to "Filter by region") then countries should NOT be filtered by region and only the search rules should apply.

# Level 4 challenge

- Allow users to click on a country and view that country's full details, as shown in the frontendmentor challenge.
- Make sure to allow clicking on bordering countries to visit these neighbours
- Don't forget the "back" button

# Level 5 challenge

- Implement the colour scheme picker

# Beyond - ideas for more work

- easy: Add a "random country" button
- Advanced: Make a quiz where a country card is shown and 5 random capitals - the user must correctly guess the correct capital.
  - use a separate component to develop this without affecting your main app
- Advanced: Make a game where two countries are named and the user tries to navigate from one country to another via their bordering countries in the fewest possible steps.
- record "favourite" countries
  - Find a way to persist these even after the browser tab is closed
- See the existing [CYF Group project: Countries](https://github.com/CodeYourFuture/group-project-countries) for more ideas

# Credits

This is a presentation (and further structuring) of a free challenge made available [here](https://www.frontendmentor.io/challenges/rest-countries-api-with-color-theme-switcher-5cacc469fec04111f7b848ca) by [Frontend Mentor](https://www.frontendmentor.io/). Code Your Future are grateful for that excellent resource!

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
