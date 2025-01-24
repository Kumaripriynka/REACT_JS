import React from 'react';
import ReactDOM from 'react-dom/client';
const heading = React.createElement('h1',{id:"head"},'Hello World from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);
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