<!-- PROJECT SHIELDS -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[![LinkedIn][linkedin-shield]][linkedin-url]
[![project_license][license-shield]][license-url]

<!-- PROJECT LOGO -->
<br />
<div align="center">
  <a href="https://github.com/itsrilay/cv-app">
    <img src="src/assets/icon.svg" alt="Logo" width="80" height="80">
  </a>

<h3 align="center">CV App</h3>

  <p align="center">
    Application for generating a CV.
    <br />
    <br />
    <a href="https://cv-app-es5.pages.dev/">View Demo</a>
  </p>
</div>

<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li>
      <a href="#project-overview">Project Overview</a>
      <ul>
        <li><a href="#built-with">Built With</a></li>
      </ul>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
  </ol>
</details>

<!-- PROJECT OVERVIEW -->

## Project Overview

![Product Screen Shot][product-screenshot]

This project is a SPA (Single Page Application), with everything happening in the page on the screenshot above. You can edit your CV with the forms inside the dropdown menus **Personal**, **Education** and **Work**. Finally, after each save the CV is updated on the right in real time.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

### Built With

- [![React][React.js]][React-url]
- ![JavaScript][Javascript]
- ![CSS][CSS]
- ![HTML][HTML]

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- GETTING STARTED -->

## Getting Started

To get a local copy up and running follow these simple steps.

### Prerequisites

Make sure you're ready for the installation process.

- npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1. **Clone the repo**
   ```sh
   git clone https://github.com/itsrilay/cv-app
   ```
2. **Navigate to the local repository folder**
   ```sh
   cd cv-app
   ```
3. **Install NPM packages**
   ```sh
   npm install
   ```
4. **(Optional) Change Git remote URL**  
   If you're planning to make changes to the project but don't want to accidentally push to the original repository.

   ```sh
   git remote set-url origin itsrilay/cv-app
   git remote -v # confirm the changes
   ```

5. **Start the app**  
   To start the app, run:

   ```sh
   npm run dev
   ```

6. **Visit**  
   Open a browser and visit http://localhost:5173.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- LICENSE -->

## License

This project is distributed under the MIT License - see [LICENSE](LICENSE) for more details.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

<!-- MARKDOWN LINKS & IMAGES -->
<!-- https://www.markdownguide.org/basic-syntax/#reference-style-links -->

[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://linkedin.com/in/ruis2003
[license-shield]: https://img.shields.io/github/license/itsrilay/cv-app.svg?style=for-the-badge
[license-url]: https://github.com/itsrilay/cv-app/blob/master/LICENSE.txt
[product-screenshot]: src/assets/screenshot.png
[React.js]: https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB
[React-url]: https://reactjs.org/
[Javascript]: https://img.shields.io/badge/JavaScript-%23F7DF1E?style=for-the-badge&logo=javascript&logoColor=black
[CSS]: https://img.shields.io/badge/CSS-%23264DE4?style=for-the-badge&logo=css&logoColor=white
[HTML]: https://img.shields.io/badge/HTML-%23E44D26?style=for-the-badge&logo=html5&logoColor=white
