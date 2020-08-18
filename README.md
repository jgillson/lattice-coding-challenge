## Objective
Build a small web app for finding information about all of your favorite movies using the [The Movie Database API](https://developers.themoviedb.org/3/getting-started).

## Minimum Feature Set

1. When first loaded, the user should see a list of the most [popular movies](https://developers.themoviedb.org/3/movies/get-popular-movies) and a search bar.
2. A user should be able to [search](https://developers.themoviedb.org/3/search/search-movies) for a movie by title in the search bar, and the matching results should show up in the list of movies.
3. A user can click on a [movie](https://developers.themoviedb.org/3/movies) in the list and be taken to a page that displays more details for the movie (title, movie poster, release date, cast, synopsis, etc)

## Technical Requirements

1. Using Node.js, create a backend application that accepts requests to power the features above. This app should query the Movie DB API and return the results to the user.
2. Compose your UI using React.
3. Please include a README.md with step-by-step instructions for running the app. Be careful to ensure there are not local dependencies that have been overlooked in the readme.


## Extra Points (optional)
1. Add more features that you think are cool! Some ideas:
    - Add filtering by genre
    - Show related movies
    - Add a page for individual actor details
2. Add a caching layer for your requests to the 3rd party API.
3. This not a design exercise, but UX polish that demonstrates your mastery of your frontend tool set is encouraged.
4. Add unit testing for your API.

## Getting Started

The following instructions will enable the application to run locally for testing purposes:

### Installation

Please ensure you have the latest versions of [Node](https://nodejs.org/) and [Yarn](https://yarnpkg.com/) installed via [Homebrew](https://brew.sh/):

```
brew install node
brew install yarn
```

Once Node and Yarn have been installed, please install the project dependencies, run the NodeJS server and React application:

#### NodeJS server

In the project root directory (i.e., `/lattice-coding-challenge`), please run the following commands:

```
/lattice-coding-challenge > yarn install
/lattice-coding-challenge > yarn start
```

#### React application

In the project app directory (i.e., `/lattice-coding-challenge/app`), please run the following commands:

```
/lattice-coding-challenge/app > yarn install
/lattice-coding-challenge/app > yarn start
```

Once the NodeJS server and React application are both started, the application will be available at:

http://localhost:3001

### Testing

To execute the NodeJS tests including coverage, please run the following command in the project root directory (i.e., `/lattice-coding-challenge`):

```
/lattice-coding-challenge > yarn test
```

### Dependencies

The dependencies used in this project are as follows:

```
axios ^0.19.2
chai ^4.2.0
express ^4.17.1
@material-ui/core ^4.11.0
@material-ui/icons ^4.9.1
mocha ^8.1.1
nock ^13.0.4
node 14.8.0
nodemon ^2.0.4
nyc ^15.1.0
sinon ^9.0.3
@testing-library/jest-dom ^4.2.4
@testing-library/react ^9.3.2
@testing-library/user-event ^7.1.2
react ^16.13.1
react-dom ^16.13.1
react-router-dom ^5.2.0
react-scripts 3.4.3
yarn 1.22.4
```
