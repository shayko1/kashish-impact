# Kashish Impact client

<p>
  <!-- iOS -->
  <img alt="Supports Expo iOS" longdesc="Supports Expo iOS" src="https://img.shields.io/badge/iOS-4630EB.svg?style=flat-square&logo=APPLE&labelColor=999999&logoColor=fff" />
  <!-- Android -->
  <img alt="Supports Expo Android" longdesc="Supports Expo Android" src="https://img.shields.io/badge/Android-4630EB.svg?style=flat-square&logo=ANDROID&labelColor=A4C639&logoColor=fff" />
  <!-- Web -->
  <img alt="Supports Expo Web" longdesc="Supports Expo Web" src="https://img.shields.io/badge/web-4630EB.svg?style=flat-square&logo=GOOGLE-CHROME&labelColor=4285F4&logoColor=fff" />
</p>

This App is based on:
- React Native app (create-react-native-app)
- Mobx as state management
- Android studio as emulator
- Wix UI for Mobile
- 

```sh
npx create-react-native-app -t with-typescript
```

## 🚀 How to use

#### Creating a new project
- Install [Android Studio](https://developer.android.com/studio) and run an Emulator
- Clone the repo
- run yarn start

## 📝 Notes

- [Expo TypeScript guide](https://docs.expo.dev/versions/latest/guides/typescript/)

## [Miro link](https://miro.com/app/board/uXjVOsrZSVw=/)

## [Lucidchart link - design](https://lucid.app/lucidchart/073ff1e9-03e1-437a-a419-c573d34549a3/edit?page=0_0&invitationId=inv_c2180b75-41f3-4906-87a0-f930d7dfa366#)

## [swagger](https://kashish-impact-test.herokuapp.com/api/#/default/)

## [Wix UI for Mobile](https://wix.github.io/react-native-ui-lib/docs/getting-started/setup)

## Build + Deploy
using expo.dev, build by runnig `eas build --platform android`. 
The build manager (Team City like) can be seen at [Expo Builds](https://expo.dev/accounts/dudu-bernhard/projects/user-kashish/builds)
Expo enable to submit from [Expo Submissions](https://expo.dev/accounts/dudu-bernhard/projects/user-kashish/submissions)
submit can be done by running: ``

## Android deploy
In order to add the app to google play:
- Add a user to expo.dev
- Create a new project in Expo
- Login from your code to Expo (using your credentials + keystore).
- Add a new user to Google Play console.
- Create a app_00..000.json auth file and use it during submit process.
- Build project (eas build --platform android) -> an .aab file with be generated.
- Because of an error, `eas submit` is not working (need to check...). In order to publish manually (on testing mode) go to ```https://play.google.com/console/u/1/developers/6636937385538026181/app/4973852792863535591/tracks/internal-testing?tab=testers```

## Download Android App
- Please send your user email to `dudub@wix.com` in order to be able to connect to this App.
- Use the following link from your android phone: `https://play.google.com/apps/internaltest/4701480184624288630`
- 
