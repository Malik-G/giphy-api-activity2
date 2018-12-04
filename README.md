# Giphy API Activity

In this activity I did at Prime Digital Academy. I used Axios on the server to make requests to Giphy's API.

## Setup

1. Read through the [Giphy documentation](https://developers.giphy.com/) to determine which endpoints you need to complete this app.

2. Register an account in order to get your `API Key`. This key is used for all of your requests to authenticate your app to Giphy.

3. Create a `.env` file and add your API key.

    `GIPHY_API_KEY=YOUR_KEY_GOES_HERE`

4. Spin up your app:

    - `npm install`
    - `npm run server`
    - `npm run client`

## My Task List

- [ ] Make a `GET` request to Giphy from the `/random` router on your **server**, send the response from Giphy back to the client
- [ ] Make a `GET` request from the **client** to the `/random` route, save the response data in Redux
- [ ] Display the random gif on the page
- [ ] Add a button that allows the user to refresh the results by making another `GET` request to `/random`

## Stretch Goals

- [ ] Implement some of the optional request parameters available when making the Giphy API request
- [ ] Style the page to make it look better
