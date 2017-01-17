# react-native-facebook-firebase
Template for using Facebook login with Firebase. State management with Flux + Redux.
This example app simply displays your Facebook profile picture, as well as a "bio" that gets stored in the users table of your firebase app.

##Installation

###Step 1
Create a firebase app:
https://firebase.google.com/docs/web/setup#add_firebase_to_your_app

###Step 2
Get an Facebook App Id from https://developers.facebook.com/

###Step 3 Install the project files
  i) Create a new react-native project.

  ii) Copy package.json, index.*.js, App.js, and src/ directory to your new project.

  iii) Run npm install --save

  iv) Run react-native link to compile Facebook SDK native extensions.


###Step 4 - ANDROID configuration

Make the following changes to your android project files:

	i) Add app id string to strings.xml
  
	ii) Add meta data tag to AndroidManifest.xml
  
	iii) Modify MainActivity.java and MainApplication.java
  
  
See ANDROID_TEMPLATE_FILES/ in this project for reference.

More information can be found at https://github.com/facebook/react-native-fbsdk.

###Step 4 - IOS configuration
Not tested yet.

