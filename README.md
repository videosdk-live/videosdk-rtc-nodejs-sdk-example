# Video SDK RTC Node JS Auth Code Sample

This code sample represents example of authentication server for video sdk.

Before running the app, you need to setup and run the authentication server.
Use our official _videosdk-rtc-nodejs-sdk-example_ to perform server authentication.

## Getting started

1. Clone the repo

   ```sh
   git clone https://github.com/videosdk-live/videosdk-rtc-nodejs-sdk-example
   ```

2. Copy the `.env.example` file to `.env` file.

   ```sh
   cp .env.example .env
   ```

3. Update the api key and secret values in the `.env` file with the ones generated from the developer console.

   ```
   VIDEOSDK_API_KEY=''
   VIDEOSDK_SECRET_KEY=''
   VIDEOSDK_API_ENDPOINT=https://api.videosdk.live
   ```

4. Install NPM packages

   ```sh
   npm install
   ```

5. Run the server

   ```sh
   npm run start
   ```

## Resources

Visit, [https://www.videosdk.live/](https://www.videosdk.live/) to generate API key and secret.
