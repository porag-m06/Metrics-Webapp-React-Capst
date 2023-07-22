# The Metrics Webapp
<a name="readme-top"></a>

<div align="center">
  <img src="./porag-logo.png" alt="logo" width="140"  height="auto" />
  <br/>
</div>

# 📗 Table of Contents

- [ The Metrics Webapp](#about-project)
- [📖  The Metrics Webapp](#about-project)
  - [🛠 Built With React](#-built-with-)
    - [React Instructions ](#react-stack-)
    - [Tech Stack ](#tech-stack-)
    - [Key Features ](#key-features-)
  - [🚀 Video & Live Demo ](#-live-demo-)
  - [💻 Getting Started ](#-getting-started-)
    - [Prerequisites](#prerequisites)
    - [Setup](#setup)
    - [Usage](#usage)
    - [To add dependencies and run linter tests](#to-add-dependencies-and-run-linter-tests)
    - [Deployment](#deployment)
  - [👥 Author ](#-author-)
    - [Authors](#authors)
  - [🔭 Future Features ](#-future-features-)
  - [🤝 Contributing ](#-contributing-)
  - [⭐️ Show your support ](#️-show-your-support-)
  - [🙏 Acknowledgments ](#-acknowledgments-)
  - [❓ FAQ ](#-faq-)
  - [📝 License ](#-license-)


# 📖 The Metrics Webapp<a name="about-project"></a>

The "Metrics Webapp" is a simple yet powerful, React and Redux capstone, single page mobile web application build around a list of metrics (numeric values) fetched from an external API with several pages. 

The home page consists of a filterable list of items in which each item navigates to the item's details info grid.

  
**Home page**
  - When the page loads, the webapp shows the list of categories that could be filtered out by some parameter, for example by the category name.
  - Along with the category name, displays numeric values per category that come from the API.
  - When the user clicks (or taps) on a category item, the application navigates to the details page.

**Details page**
  - In the details page, the webapp retrieves data from the API to show detailed data in the category.
  - When the user clicks on the "Back" button (<), the user navigates to the home page.

#### Home Page
 <img src="./src/assets/metrics_app.png" alt="home page"/>


## 🛠 Built With React<a name="built-with"></a>

### React Instructions <a name="react-stack"></a>
This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).
-Available Scripts
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

### Tech Stack <a name="tech-stack"></a>
<details>
  <summary>Client</summary>
  - React
  <ul>
    <li>Components</li>
    <li>Hooks</li>
    <li>Props</li>
    <li>Events</li>
    <li>Router</li>
    <li>Redux</li>
    <li>Fetch data from API</li>
    <li>Unit Test</li>
    <li>Integration Test</li>
    <li>Deploy</li>
  </ul>
</details>


<details>
  <summary>Server</summary>
  <ul>
    <li>The project can be deployed and accessible online using [Render](https://render.com), [Netlify](https://www.netlify.com/) or [GitHub Pages](https://pages.github.com/).</li>
  </ul>
</details>

<details>
<summary>Database</summary>
  <ul>
    <li>N/A</li>
  </ul>
</details>

### Key Features <a name="key-features"></a>
- **Use of React Components**
- **Use of Events**
- **Use of React Router**
- **Use of API to fetch data**
- **Use of JEST & RTL for unit and integration test**
- **Use of React Redux (e.g store, reducers, actions)**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🚀 Video & Live Demo <a name="live-demo"></a>

> Please follow the link for a video & live demo.
- [Video Presentation:](https://www.loom.com/share/c59cff2aaf524bc2989f29c857c7b3c5?sid=1172c318-b745-4211-a048-7575dce85e8e)
- [The matrices webapp:](https://air-pollution-index.onrender.com/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 💻 Getting Started <a name="getting-started"></a>

To get a local copy up and running, follow these steps.

### Prerequisites

In order to run this project you need:
- Git.
- An IDE (e.g. VS Code)
- Browser to run. 

### Setup

Clone this repository to your desired folder:
 - Using Git Bash or any integrated terminal of you choice.
 - Open with code editor (e.g. VS Code).
 - Open the index.html file using any local server (e.g. live server extension in VS Code)

### Usage

To run the project, execute the following command:
- Open the index.html file on a local server on your browser. 

### To add dependencies and run linter tests 

Follow the following:

**************
Initial Step:
**************
- mkdir .github/workflows
- copy the **linters.yml** file to the directory created above.
- touch .gitignore if not created already and add **node_modules/** to it.
- initialize npm to create package.json file by running the command: 
> $ npm i -y 

*******
ESLint
*******
1. Run 
    ```
    npm install --save-dev eslint@7.x eslint-config-airbnb@18.x eslint-plugin-import@2.x eslint-plugin-jsx-a11y@6.x eslint-plugin-react@7.x eslint-plugin-react-hooks@4.x @babel/eslint-parser@7.x @babel/core@7.x  @babel/plugin-syntax-jsx@7.x  @babel/preset-react@7.x @babel/preset-react@7.x
    ```
2. Copy [.eslintrc.json](./.eslintrc.json) and [.babelrc](./.babelrc) to the root directory of your project.
3. Run `npx eslint "**/*.{js,jsx}"` on the root of your directory of your project.
5. Fix linter errors.
For more on ESLint & autocorrent options, click [here](https://eslint.org/docs/latest/use/command-line-interface#fixing-problems)

**************
For Stylelint
**************
1. Run
   ```
   npm install --save-dev stylelint@13.x stylelint-scss@3.x stylelint-config-standard@21.x stylelint-csstree-validator@1.x
   ```
2. Copy [.stylelintrc.json](./.stylelintrc.json) to the root directory of your project.
3. Run `npx stylelint "**/*.{css,scss}"` on the root of your directory of your project.
5. Fix linter errors.
For more on Stylelint & autocorrent options, click [here](https://stylelint.io/user-guide/options/)



<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 👥 Author <a name="authors"></a>

> Developed by: 

### Authors
- GitHub: [@porag-m06](https://github.com/porag-m06)
- Twitter: [@twitterhandle](https://twitter.com/twitterhandle)
- LinkedIn: [LinkedIn](https://www.linkedin.com/in/muhammad-porag-nsu-cse/)

<p align="right">(<a href="#readme-top">back to top</a>)</p>

## 🔭 Future Features <a name="future-features"></a>

- **Improve Aesthetics & Design**

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🤝 Contributing <a name="contributing"></a>

Contributions, issues, and feature requests are welcome!

Feel free to check the [issues page](https://github.com/porag-m06/Metrics-Webapp-React-Capst/issues).

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ⭐️ Show your support <a name="support"></a>

As a tech enthusiast, your support is always appreciated. If you like this project please do let me know with your support in any way you see fit.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## 🙏 Acknowledgments <a name="acknowledgements"></a>
Original design idea by [Nelson Sakwa on Behance](https://www.behance.net/sakwadesignstudio).
Additionally, I would like to thank  [Microverse](https://github.com/microverseinc) for this project info & guidelines.

<p align="right">(<a href="#readme-top">back to top</a>)</p>


## ❓ FAQ <a name="faq"></a>
- **Can I fork this project?**
  - Yes, feel free to fork and knock yourself out :) . 

- **Can I share this project with others?**
  - Yes, you can share this project for any educational purposes. 

<p align="right">(<a href="#readme-top">back to top</a>)</p>



## 📝 License <a name="license"></a>
This project is [MIT](./LICENSE) licensed.

<p align="right">(<a href="#readme-top">back to top</a>)</p>

