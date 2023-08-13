import React from 'react';
import * as ReactDOM from 'react-dom/client';

//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)
const heading = <h1> Namaste React- JSX is not a HTMl but HTML like Syntax</h1>;//JSX added
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(heading);
