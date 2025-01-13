const heading = React.createElement('h1',{id:"head"},'Hello World from React!');
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(heading);

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