<!-- Repository Information & Links-->

[![LinkedIn][linkedin-shield]][linkedin-url]
[![Instagram][instagram-shield]][instagram-url]

<br />

<p align="center">
Eddie Sosera · 21100419
</p>
    <br />

<!-- Cover Image-->
 <a href="https://github.com/eddiesosera/dbhunt">
    <img src="./assets/readme/cover.png" alt="Cover Image">
  </a>

<!-- HEADER SECTION -->
<br />

<p align="center">

  <a href="https://github.com/eddiesosera/dbhunt-v1">
    <img src="./assets//icon.png" alt="Logo" width="140" height="140">
  </a>
  
  <h3 align="center">DBHunt</h3>
  <p align="center">
    Let the Hunt begin!
    <br>
    <br>
<!--       <a href="https://github.com/eddiesoseradbhunt"><strong>Explore the docs »</strong></a>
   <br />
   <br /> -->
   <a href="path/to/demonstration/video">View Demo</a>
    ·
    <a href="https://github.com/username/dbhunt/issues">Report Bug</a>
    ·
    <a href="https://github.com/username/dbhunt/issues">Request Feature</a>
</p>
<!-- TABLE OF CONTENTS -->

## Table of Contents

- [About the Project](#about-the-project)
  - [Project Description](#project-description)
  - [Built With](#built-with)
- [Getting Started](#getting-started)
  - [Prerequisites](#prerequisites)
  - [How to install](#how-to-install)
- [Features and Functionality](#features-and-functionality)
- [Concept Process](#concept-process)
  - [Ideation](#ideation)
    <!-- - [Wireframes](#wireframes) -->
    <!-- - [User-flow](#user-flow) -->
- [Development Process](#development-process)
  - [Implementation Process](#implementation-process)
    - [Highlights](#highlights)
    - [Challenges](#challenges)
  - [Reviews and Testing](#peer-reviews)
    - [Feedback from Reviews](#feedback-from-reviews)
    - [Unit Tests](#unit-tests)
  - [Future Implementation](#peer-reviews)
- [Final Outcome](#final-outcome)
  - [Mockups](#mockups)
  - [Video Demonstration](#video-demonstration)
- [Conclusion](#conclusion)
- [Roadmap](#roadmap)
- [Contributing](#contributing)
- [License](#license)
- [Contact](#contact)
- [Acknowledgements](#acknowledgements)

<!--PROJECT DESCRIPTION-->

## About the Project

<img src="./assets/icon.png" alt="Logo" width="140" height="140">

### Project Description

Dragonball Hunt is a mobile game which allows players to create and join hunts (tournaments) in your region. Players go on hunts to collect dragonballs nearby and the player with the most dragonballs at the and of the tournament wins and is awarded with a Super Saiyan level increase.

### Built With

- [![React Native][react-badge]][react-url]
- [![Expo][expo-badge]][expo-url]
- [![Firebase][firebase-badge]][firebase-url]
- - [![Google Maps][googlemaps-badge]][googlemaps-url]

<!-- GETTING STARTED -->
<!-- Make sure to add appropriate information about what prerequesite technologies the user would need and also the steps to install your project on their own mashines -->

## Getting Started

The following instructions will get you a copy of the project up and running on your local machine for development and testing purposes.

### Prerequisites

Ensure that you have the latest version of [Expo](https://docs.expo.dev/get-started/introduction/) and [React Native](https://reactnative.dev/docs/integration-with-existing-apps) installed on your machine.

**The `Backend` for the app**
The project utilized [Firebase's](https://firebase.google.com/) services for backend functionality:

- `Firestore Database` was utilized for storing data.
- `Firebase Authentication` was used to handle authentication related service, like logging in and registering users.

### Installation

1.  Download the `Expo Go App` from `Google's Play Store` or `Apple's App store`.
2.  Open any IDE.

3.  Clone Repository </br>
    Run the following in the command line to clone the project:

    ```sh
    git clone https://github.com/eddiesosera/dbhunt-v1
    ```

        Open `Software` and select `File | Open...` from the menu. Select the cloned directory and press `Open` button.

4.  Install Dependencies </br>
    Run the following in the command line to install all the required dependencies:

    ```sh
    npm install
    ```

## How to Run the App

1. First, link your backend to your database by filling in the required data in the "\*\*\*" fields in both your config file and the data source file:

### Rules of the game:

1. Create an account to access competitions and profile or Log in.

<!-- FEATURES AND FUNCTIONALITY-->
<!-- You can add the links to all of your imagery at the bottom of the file as references -->

## Features and Functionality

<img src="./assets/readme/features/1feature1.jpg" alt="Feature 1"/>

Users look for dragon balls in different places on the map. If a dragon ball is collected it can no longer be collected again.
<br/>
<br/>

<img src="./assets/readme/features/2feature2.jpg" alt="Feature 2"/>

<!-- ### Feature 2: Finds dargonballs nearby

If you a user is offline and you are in their teritorry you can loot their dragon balls, by playing a card game where you have to choose the correct card. -->

<br/>

<img src="./assets/readme/features/3feature3.jpg" alt="Feature 3"/>

<!-- ### Feature 3: DragonBall Z avatars

Users sign up and can choose existing avatars based on DBZ characters. -->

<br/>

<img src="./assets/readme/features/4feature4.jpg" alt="Feature 4"/>

<!-- ### Feature 4: DragonBall Z avatars

Users sign up and can choose existing avatars based on DBZ characters. -->

<br/>

<img src="./assets/readme/features/5feature5.jpg" alt="Feature 5"/>

<!-- ### Feature 3: DragonBall Z avatars

Users sign up and can choose existing avatars based on DBZ characters. -->

## Concept Process

The `Conceptual Process` is the set of actions, activities and research that was done when starting this project.

### Ideation

#### MoodBoard

<img src="./assets/readme/moodboard.jpg">

<br>

<!-- ### Wireframes

Home Page Wireframe

<img src="readmeAssets\homeideation.png"> -->

<!-- ### User-flow

The user flow diagram

<img src="readmeAssets\userJourney.png"> -->

### Database Architecture

<img src="./assets/readme/databaseModel.jpg">

<!-- DEVELOPMENT PROCESS -->

## Development Process

The `Development Process` is the technical implementations and functionality done in the frontend and backend of the application.

### Backend Functionality

<br>

### Implementation Process

<!-- stipulate all of the functionality you included in the project -->

- Made use of both `functionality` to implement a specific feature.
- `MVC/MVVM` design architecture implemented.
- `Plugin` for this.
- ETC.

#### Highlights

- Synchronous communication

#### Challenges

- Intergrating Mapbox into the Expo workflow with EAS

<!-- stipulate how you've conducted testing in the form of peer reviews, feedback and also functionality testing, like unit tests (if applicable) -->

#### Feedback from Reviews

`Peer Reviews` were conducted by my fellow students and lecturer. The following feedback I found useful:

- Feedback one.
- Feedback two.

#### Unit Tests

`Unit Tests` were conducted to establish working functionality. Here are all the tests that were ran:

> [!Note]
> Post man and insomnia where both used to test all backend CRUD functionality.

**Test 1** of Create User functionality :

- We tested the back of the user create function using Postman to test the CRUD

### Future Implementation

<!-- stipulate functionality and improvements that can be implemented in the future. -->

- Refining (a process).

<br>

## Final Outcome

<!-- MOCKUPS -->

### Mockups

<img src="./assets/readme/mockup/1.jpg" alt="App mockup">

<br>
<br>

<!-- VIDEO DEMONSTRATION -->

### Video Demonstration

To see a run through of the application, click below:

[View Demonstration](https://drive.google.com/file/d/1o6S4B8dsGbbaqzqG9LFMmoX_ZjwM2ls9/view?usp=drive_link)

<!-- ROADMAP -->

## Roadmap

See the [open issues](https://github.com/username/projectname/issues) for a list of proposed features (and known issues).

<!-- CONTRIBUTING -->

## Contributing

Contributions are what makes the open-source community such an amazing place to learn, inspire, and create. Any contributions you make are **greatly appreciated**.

1. Fork the Project
2. Create your Feature Branch (`git checkout -b feature/AmazingFeature`)
3. Commit your Changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the Branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

<!-- AUTHORS -->

## Authors

<div style="display: flex; justify-content: space-between;">
  <div style="text-align: center;">
    <a href="https://github.com/eddiesosera/">
      <img src="https://github.com/eddiesosera.png" alt="eddie Sosera" width="100px">
    </a>
    <br>
    <sub>Eddie Sosera</sub>
  </div>
  </div>

<!-- LICENSE -->

## License

Distributed under the MIT License. See `LICENSE` for more information.\

<!-- LICENSE -->

## Contact

- **Eddie Sosera** - [email@address](mailto:email@address) - [LinkedIn](https//:www.linkedin.com/in/eddiesosera) - [Website](mailto:email@address) - [@instagram_handle](https://www.instagram.com/instagram_handle/)

- **Project Link** - https://github.com/eddiesosera/dbhunt
- **Backend Link** - https://github.com/eddiesosera/dbhunt-backend

<!-- ACKNOWLEDGEMENTS -->

## Acknowledgements

<!-- all resources that you used and Acknowledgements here -->

- [React Native](https://angular.io/tutorial/first-app)
- [Expo](path/to/resource)
- [Mapbox](https://www.pexels.com/photo/a-person-using-a-laptop-6372918/)
  -->

<!-- Refer to https://shields.io/ for more information and options about the shield links at the top of the ReadMe file -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=flat-square&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/eddiesosera/
[instagram-shield]: https://img.shields.io/badge/-Instagram-black.svg?style=flat-square&logo=instagram&colorB=555
[instagram-url]: https://www.instagram.com/edd13sc/

<!-- RESOURCES USED LINK -->

[react-badge]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[react-url]: https://reactnative.dev
[expo-badge]: https://img.shields.io/badge/Expo-000020?style=for-the-badge&logo=expo&logoColor=white
[expo-url]: https://docs.expo.dev/
[firebase-badge]: https://img.shields.io/badge/Firebase-FFCA28?style=for-the-badge&logo=firebase&logoColor=white
[firebase-url]: https://firebase.google.com/
[googlemaps-badge]: https://img.shields.io/badge/Google%20Maps-4285F4?style=for-the-badge&logo=googlemaps&logoColor=white
[googlemaps-url]: https://developers.google.com/maps
[vscode-badge]: https://img.shields.io/badge/VS%20Code-007ACC?style=for-the-badge&logo=visual-studio-code&logoColor=white
[vscode-url]: https://code.visualstudio.com/
