import React from 'react';
import * as ReactDOM from 'react-dom/client';

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element

const headingelement = <h1>Hello Element in react</h1>;

const Heading = () =>
(
    <h1> Namaste React- JSX is not a HTMl but HTML like Syntax</h1>//JSX added
);

//React Component
//Class Based Component - OLD
//Functional Component - NEW

const HeadingComponent = () => {
    return <div className='container'>
        {headingelement} {/*React Element */}
        <Heading /> {/*Functional Component */}
        <h1>Namste React Functional Component</h1>
    </div>
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<HeadingComponent />);
