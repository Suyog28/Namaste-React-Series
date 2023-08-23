import React from 'react';
import * as ReactDOM from 'react-dom/client';
import Header from './components/Header';
import Body from './components/Body';
import { createBrowserRouter, RouterProvider, Outlet } from 'react-router-dom';
import Aboutus from './components/Aboutus';
import Contact from './components/Contact';
import Error from './components/Error';
import ResMenu from './components/ResMenu';



//JSX => React.createElement => ReactElement-JS Object => HTMLElement(render)

//React Element

// const headingelement = <h1>Hello Element in react</h1>;

// const Heading = () =>
// (
//     <h1> Namaste React- JSX is not a HTMl but HTML like Syntax</h1>//JSX added
// );

//React Component
//Class Based Component - OLD
//Functional Component - NEW

// const HeadingComponent = () => {
//     return <div className='container'>
//         {headingelement} {/*React Element */}
//         <Heading /> {/*Functional Component */}
//         <h1>Namste React Functional Component</h1>
//     </div>
// };


//Props Passing
// const ResCard = (props) => {
//     return (
//         <div className='ResCard'>
//             <img className="cardlogo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf' alt='cardLogo' />
//             <h3> {props.resname}</h3>
//             <h4>{props.cusine}</h4>
//             <h5>4.0 Star</h5>
//         </div>
//     )
// }


//Cool Deveoper passing props directly using destructuring
// const ResCard = ({ resname, cusine }) => {
//     return (
//         <div className='ResCard'>
//             <img className="cardlogo" src='https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/e33e1d3ba7d6b2bb0d45e1001b731fcf' alt='cardLogo' />
//             <h3> {resname}</h3>
//             <h4>{cusine}</h4>
//             <h5>4.0 Star</h5>
//         </div>//dd
//     )
// }



const AppLayout = () => {
    return (
        <div>
            <Header />
            <Outlet />
        </div>
    )
}

const appRouter = createBrowserRouter(
    [
        {
            path: "/",
            element: <AppLayout />,
            children: [
                {
                    path: "/",
                    element: <Body />,
                },
                {
                    path: "/Aboutus",
                    element: <Aboutus />
                },
                {
                    path: "/Contact",
                    element: <Contact />
                },
                {
                    path: "/ResMenu/:id",
                    element: <ResMenu />
                }
            ],
            errorElement: <Error />
        }
    ]
)

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />);
