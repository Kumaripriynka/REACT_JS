import React from 'react';
import ReactDOM from 'react-dom/client';
// const heading = React.createElement('h1',{id:"head"},'Hello World from React!');
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(heading);
// root.render will render the values in div, but what will happen if some value will be already there , it will replace the value.

// #####  Props are known to be something that have children + attributes ,here h1 is a react element and "hello world from react " is a children and attribute {id:"head"} , these are passes through the props.

 console.log(heading)  //This will return an object simply we can say


//  How we can create  nested type of structure using react ??
{/* <div id = "parent">
    <div id ="child">
        <h1>I'm an h1 tag</h1>
        </div>
        </div> */}

const parent = React.createElement
('div',
{id:"parent"},
React.createElement('div',
    {id:"child"},
  React.createElement('h1',{},"I'm an h1 tag")  
)
);

const test = ReactDOM.createRoot(document.getElementById('test'));
test.render(parent);

// ***** Conclusion from over , that Every ReactElement is an object at the end and that object is an html which browser understand i.e, ReactElement(Object) <=> HTML(Browser understands)

// If We want to create siblings after h1,is h2 how we can do it??


const anotherparent = React.createElement('div',
  {id:"parent"},
  React.createElement('div',
    {id:"child"},
  [React.createElement('h1',{},"I hava also a sibling below"),
  React.createElement('p',{id:"para"},"I'm a paragraph and also the siblings of h1")
]
  )
);

const test2 = ReactDOM.createRoot(document.getElementById('test2'));
test2.render(anotherparent);


{/* <div id = "parent1">
<div id ="child1">
    <h1>I'm an h1 tag</h1>
    <h3>I'm an h3 tag</h3>
    </div>
    </div> 
 <div id ="child2">
     <h2>I'm an h2 tag</h2>
     <p>I'm a paragraph tag</p>
     </div>
     </div> 
     */}

  const newparent = React.createElement('div',{id:"parent1"},
    [React.createElement('div',
      {id:"child1"},
     [React.createElement('h1',{},"I'm an h1 tag"),React.createElement('h3',{},"I'm an h3 tag")]
    ) ,
  React.createElement('div',
    {id:"child2"},
    [React.createElement('h2',{},"I'm an h2 tag"),React.createElement('p',{},"i'm a paragraph tag")]
  )]

  );

  const test3 = ReactDOM.createRoot(document.getElementById('test3'));
  test3.render(newparent);


  // NOTE: All written above code is looking so complex means for small things we have to write long code ,but react make things easier ,so here comes the concept of JSX to make things easier. we don't use this type of code but ,yes these are the core of react.

  //only react can't make web app faster ,it needs various packages to manage all these,let's know about npm and install npm
  // What is npm?
  //  >>NPM is the default package manager for the Node.js runtime environment.
// >>It is used to manage libraries, tools, and dependencies for JavaScript projects.
// >>NPM allows developers to install, share, and manage reusable code packages (modules).

// Key Components of NPM:
// NPM Registry: A public repository where developers publish their JavaScript packages.
// NPM CLI: A command-line tool to interact with the NPM ecosystem (install, update, uninstall packages).
// Package.json: A file that lists a project's dependencies and metadata for managing the project.
// Example Commands:

// # Initialize a new project
// npm init

// # Install a package (e.g., lodash)
// npm install lodash

// # Install a package globally
// npm install -g nodemon

// # Uninstall a package
// npm uninstall lodash

// ***Needs of bundler in React
// A bundler in React gathers all the code and assets of your app and combines them into optimized files ready for deployment. It ensures everything works together by managing dependencies, reduces file sizes through techniques like minification and tree shaking, and splits code into smaller chunks for better performance. It also converts modern JavaScript into a format older browsers can understand, handles images and styles, and makes development easier with features like live updates. Popular bundlers include tools like Webpack,parcel and Vite. and we will be use parcel.

// What are dependencies?
// Dependencies are external libraries or tools a project relies on to function.

// Types:
// 1. Direct: Explicitly used in the project (e.g., React).
// 2. Transitive: Indirect dependencies of your dependencies.
// 3. Development: Needed only during development (e.g., testing framework tools like Jest and build tools like Webpack).
// 4. Production: Required for the app to run in production (e.g., database drivers).
// 5. Peer: Requires specific versions provided by the host project.
// 6. Optional: Non-critical, used if available.
// 7. Bundled: Included in the distributed package.
// Effective dependency management ensures stable and efficient applications.

 // he caret (^) is a symbol used in dependency versioning (especially in npm and Yarn) to specify compatible versions of a package. It allows updates that do not break the major version, following semantic versioning principles.

//  What is package.json and package-lock.json ,what are the key differences in both
// Key Difference:
// package.json: Says what your project needs (e.g., express version ^4.17.1).
// package-lock.json: Locks the exact versions installed (e.g., express 4.17.1), and keep all the records of the version of that package or dependencies.

// ## What is node_modules folder in our project
// node_modules is a storage folder for all the external libraries your React project depends on.
// It’s critical for running the app but is usually excluded from version control because it can be regenerated.

// Why is node_modules Important in React?
// Without it, your React app cannot run because the required libraries (like React and Webpack) are not available.
// It allows modularity and reusability by downloading only the code your project needs.

// ### What is npx?/
// npx is a tool that lets you execute Node.js packages directly from the npm registry without installing them globally. It’s perfect for:
// Running CLI tools temporarily (e.g., npx create-react-app).
// Avoiding global installations, saving disk space.
// Running specific versions of packages (e.g., npx [email protected]).
// Using locally installed tools in your project.
// In short, it simplifies workflows and reduces system clutter! 

//***** Difference Between npm and npx:
// 1 npm:
// Purpose      :	Installs and manages packages.
// Installation :	Installs packages globally or locally.	
// Use Case     :	Used to install dependencies and tools.

// 2. npx:
// Purpose      :	Executes packages directly.
// Installation :	Does not require global/local installation.
// Use Case     :	Used to run packages or tools temporarily.

// Now we use the command npx parcel,what it do in our project??
// The npx parcel command is used to start or build your application using the Parcel bundler. Parcel is a zero-configuration web application bundler that simplifies the process of bundling JavaScript, CSS, HTML, and other assets in your project.
// Starts the Development Server: Running npx parcel in our React app starts a development server. It automatically bundles our app and serves it at a local URL (e.g., http://localhost:1234)
//ex-  npx parcel index.html
// This assumes that index.html is the entry point of our application.

// ### What parcel do for us
// This create Dev Build, local server and auto refreshing of our page when saved the code
// Means HMR = Hot Module Replacement
// Parcel uses File watching algorithm-written in c++
// catching - faster builds
// Image optimization
// minification of files
// bundles the file
// Compressing files
// Consistent hashing
// spliting code
// differential bundling-support of older browser also
// Diagnosting
// error handling
// https
// Tree shaking-remove unused code
// different devlopment and production bundle


// ** For building production build we use the command npx parcel build index.html
// it will be irritating to write this command again and again so, we write a script in package.json i.e "start":"parcel index.html" but it is used for development build , now for production build we use "build":"parcel build index.html"

// Now we use npm start or npm run start (i.e npm start = npm run start) to start the project and for build project we use  npm run build,, npm build doesn't work


// ==============================================Another Part==================================================

// React Element: 
// A React element is a plain JavaScript object that represents a part of the UI, such as a tag or component. It is created using JSX (e.g., <div>Hello</div>) or React.createElement(). React elements are immutable and serve as the building blocks for the React Virtual DOM, helping React efficiently update the actual DOM.

// Key Points About React Elements:
//1. React Elements are Immutable: Once created, they cannot be changed. If something needs to change, React will create a new element and update the DOM accordingly.

//2. React Element vs React Component:

//  >>Element: Represents a single unit of the UI (e.g., div, h1, button).
// >>Component: A function or class that returns React elements (can be used to encapsulate logic and UI).

//3. Creating React Elements: React elements are typically created using JSX (JavaScript XML) syntax, though they can also be created manually using React.createElement().

// Ex: Creating React Element Using JSX
const element = <h1>Hello, World!</h1>;

// Creating React Element Using core React i.e React.createElement()
const heading = React.createElement('h1',{id:"head"},'Hello World from React ✌🤞🐱‍🏍!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
console.log(heading);

// NOTE: React Element is not an html element it is like this i.e (React.CreateElement =>ReactElement-Js Object => HtmlElement(render))

// now here comes the concept of JSX: what is JSX??
// JSX is a way to write code that looks like HTML, but it's actually inside JavaScript. It's commonly used with React, a library for building user interfaces.
// With JSX, we can write above code in a simpler way, like HTML, inside your JavaScript:

const headings = <h1 id="head">Hello, world from JSX!</h1>;
// But this code is not understandable by Js engine,because js engine only understand ES6 ,so here behind the scene parcel works.so, JSX(transpiled before it reaches javascript engine(Babel tool))
console.log(headings);
root.render(headings);
// Although it looks like HTML, it's actually JSX and will be converted into regular JavaScript code by a tool like Babel when the application runs (i.e JSX => Babel transpiles it to React.CreateElement =>ReactElement-Js Object => HtmlElement(render) )

// The main benefit is that JSX lets you combine JavaScript and HTML-like code together, making it easier to create dynamic web pages.

// NOTE: It is nothing like that we can't write code without JSX ,we ofcourse can write without jsx also but it make our code developer friendly,and makes our life easy.

// In JSX we use className insted of class
const anotherHeading = <h2 className ="headings">Class is written as className in jsx</h2>;
console.log(anotherHeading);
root.render(anotherHeading);

// If we write Jsx in single line we don't need to add (),but for multiline we use paranthesis like this
const anotherHeadings = (<h2 className ="headingss" tabIndex="5">
    Class is written as className in jsx using multiline paranthesis
    </h2>);
console.log(anotherHeadings);
root.render(anotherHeadings);

// React Component
// A React component is like a building block for creating a website or app. It’s a piece of code that tells our app what to display on the screen. we can think of it as a small, reusable part of a webpage (like a button, a form, or a profile card) that we can use in multiple places in our app.

// There are two main types of components:
//1. Functional Components: These are just regular JavaScript functions that take in some information (called "props") and return what should be shown on the screen(ReactElement or some piece of jsx). They are simpler and more commonly used today, especially with newer features in React.

// For example, if we want to create a greeting message:
// const GreetingComponent = (props) => {
//     return <h1>Hello, {props.name}!</h1>;
//   };

//   We can write above functional component as,both will return same,but this is the convenient way to exactly written the functional component and JSX can be nested also.
// const GreetingComponent = () => (
// <div id ="container">
//     <h1>Hello,this is functional component</h1>
//     </div>
//     );

//2. Class Components: These are a bit more complex and were used in older versions of React. They are written as classes and can hold more complex behavior, like keeping track of changes in data (state).

// For example:
// class Greetings extends React.Component {
//     render() {
//       return <h1>Hello, {this.props.name}!</h1>;
//     }
//   }
  
  
//  Key Concepts:
// **Props: These are like settings or options you send to a component. For example, you could send the name of the person to greet as a "prop".

// **State: This is like data that can change over time. If the data changes, React will automatically update what’s shown on the screen. For example, you might have a counter that increases when a button is clicked.

// **JSX: It’s a syntax that looks like HTML but works with JavaScript. It's used to define what you want to show on the screen inside your components.

// Why Use React Components?
// >>Reusability: Once we create a component (like a button), we can use it many times in different parts of our app.
// >>Organization: Components let us split our app into smaller, manageable pieces, which makes it easier to build and maintain.
// >>Dynamic: React components can change based on the data they receive (props) or hold (state), making our app interactive.
// So, in simple terms, React components help us create parts of our app, keep them organized, and reuse them wherever needed.

// NOTE: In React before creating a component we should keep in mind that always starts the component name with Capital letter,and use CameCase otherwise it will throuh an error.

// How to render ReactComponent?
// root.render(<GreetingComponent />);

// Now I want to use another component in GreetinComponent,how we can do? And This is also known as Component composition
const TitleComponent = () => (
<h2 className ="head">
  I want to inject this component in our existing component GreetingComponent
  </h2>
);

// const GreetingComponent = () => (
//   <div id ="container">
//     <TitleComponent />
//       <h1>Hello,this is functional component</h1>
//       </div>
//       );

//       root.render(<GreetingComponent />);


      // NOTE: we can also enject any javascript code inside our react component using {}

      const number = 1000;
  const TestComponent = () => (
    <div id = "test">
      <h3 className ="testing">I am {number} ,and i came with my sibling{ 300 + 300}and trying to inject myself in between React component</h3>
    </div>
  );

  root.render(< TestComponent/>)

  // Note: 3 types to use and write functional component 
  
  const GreetingComponent = () => (
    <div id ="container">
      {TitleComponent()}
      <TitleComponent />
      <TitleComponent></TitleComponent>
        <h1>Hello,this is functional component</h1>
        </div>
        );
  
        root.render(<GreetingComponent />);
