import React from "react";
import Header from "../../components/header/Header";
import SideBarComponent from "../../components/sideBar/SideBarComponent";

const LearnPage = () => {
  return (
    <>
      <Header />
      <div className="learn-page">
        <SideBarComponent />
        <container className="container container-learn-page ">
          <h1 className="text-center mt-2">Quick Start</h1>
          <h3 className="mt-3">What is ReactJs</h3>
          <p className=" font-italic">
            ReactJS, often referred to as React, is an open-source JavaScript
            library used for building user interfaces (UIs) for web
            applications. It was developed by Facebook and has gained
            significant popularity due to its efficiency, simplicity, and
            reusability.
          </p>
          <h3>Why ReactJs</h3>
          <p className=" font-italic">
            ReactJS has a large ecosystem with libraries and tools that enhance
            its functionality. It is widely adopted by companies and has a
            supportive community. React Native, built on top of ReactJS, enables
            the development of native mobile applications. The benefits of using
            ReactJS include code reusability, modularity, and easier
            maintenance. It offers performance optimization techniques, a
            declarative approach, and a vast ecosystem to support various use
            cases.
          </p>
          <div className=" card-leran-page card mb-3 p-2 ">
            <h3>You will learn</h3>
            <ul>
              <li>React Fundamentals</li>
              <li>React Hooks</li>
              <li>Component Composition</li>
              <li>Routing</li>
              <li>State Management</li>
              <li>Styling in React</li>
              <li>API Integration</li>
              <li>Testing React Components</li>
              <li>Performance Optimization</li>
            </ul>
          </div>
          <div>
            <h3 className="text-muted"> 1-React Fundamentals</h3>
            <p>
              Start by learning the core concepts of React, such as components,
              JSX syntax, props, state, and lifecycle methods. Understand how to
              create and render components, manage component state, and handle
              events.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 2-React Hooks</h3>
            <p>
              Learn about React Hooks, which were introduced in React 16.8.
              Hooks allow you to use state and other React features without
              writing class components. Explore popular hooks like useState,
              useEffect, useContext, and useReducer.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 3-Component Composition</h3>
            <p>
              Understand how to compose components by breaking them down into
              smaller, reusable pieces. Learn about component communication
              through props and how to structure your components in a scalable
              and maintainable way.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 4-Routing</h3>
            <p>
              Explore how to implement client-side routing in React using
              libraries like React Router. Learn how to set up routes, navigate
              between pages, and handle dynamic routing parameters.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 5-State Management</h3>
            <p>
              Learn about different state management solutions for larger React
              applications, such as Redux, MobX, or the React Context API.
              Understand how to manage application-level state and share data
              between components.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 6-Styling in React</h3>
            <p>
              Discover different approaches to styling React components,
              including CSS modules, inline styles, CSS-in-JS libraries like
              styled-components or Emotion, and UI component libraries like
              Material-UI or Ant Design.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 7-API Integration</h3>
            <p>
              Learn how to fetch data from APIs and update your component state
              accordingly. Understand asynchronous operations, handling loading
              and error states, and integrating with popular libraries like
              Axios or the Fetch API.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 8-Testing React Components</h3>
            <p>
              Explore testing methodologies and frameworks for testing React
              components, such as Jest and React Testing Library. Learn how to
              write unit tests, integration tests, and UI component tests.
            </p>
          </div>
          <div>
            <h3 className="text-muted"> 9-Performance Optimization</h3>
            <p>
              Learn techniques for optimizing React application performance,
              including code splitting, lazy loading, memoization, and
              performance monitoring.
            </p>
          </div>
        </container>
        <h1 className=" hayt text-center mt-2">haythem</h1>
      </div>
    </>
  );
};

export default LearnPage;
