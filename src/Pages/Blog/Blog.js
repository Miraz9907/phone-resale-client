import React from "react";

const Blog = () => {
  return (
    <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
      <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 ">
          Blog
        </h2>
        <p className="font-normal text-gray-500 sm:text-xl dark:text-gray-700">
          A few Basic Question about Backend and Server.
        </p>
      </div>
      <div className="grid gap-6 lg:grid-cols-2">
        <article className="p-6 rounded-lg border shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
            What are the different ways to manage a state in a React
            application?
          </h2>
          <p className="mb-5 font-normal text-black">
            <strong>State Management</strong> React state management is a
            process for managing the data that React components need in order to
            render themselves. This data is typically stored in the component's
            state object. When the state object changes, the component will
            re-render itself. React state management is basically half of a
            React app
            <br />
            <strong>Types</strong> The Four Kinds of React State to Manage
            <br /> 1. Local state. <br /> 2. Global state. <br /> 3. Server
            state. <br /> 4. URL state. <br /> React's useState is the best
            option for local state management.
          </p>
        </article>
        <article className="p-6 rounded-lg border shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
            How does prototypical inheritance work?
          </h2>
          <p className="mb-5 font-normal text-black">
            <strong>prototypical inheritance</strong> In JavaScript, an object
            can inherit properties of another object. The object from where the
            properties are inherited is called the prototype. The Prototypal
            Inheritance is a feature in javascript used to add methods and
            properties in objects. It is a method by which an object can inherit
            the properties and methods of another object. Traditionally, in
            order to get and set the [[Prototype]] of an object, we use Object.
            getPrototypeOf and Object.
          </p>
        </article>
        <article className="p-6 rounded-lg border shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
            What is a unit test? Why should we write unit tests?
          </h2>
          <p className="mb-5 font-normal text-black">
            <strong>Unit Test</strong> Unit testing is testing the smallest
            testable unit of an application. It is done during the coding phase
            by the developers. To perform unit testing, a developer writes a
            piece of code (unit tests) to verify the code to be tested (unit) is
            correct. <br />
            Unit testing ensures that all code meets quality standards before
            it's deployed. This ensures a reliable engineering environment where
            quality is paramount. Over the course of the product development
            life cycle, unit testing saves time and money, and helps developers
            write better code, more efficiently.
          </p>
        </article>
        <article className="p-6 rounded-lg border shadow-md ">
          <h2 className="mb-2 text-2xl font-bold tracking-tight text-black">
            React vs. Angular vs. Vue?
          </h2>
          <p className="mb-5 font-normal text-black">
            <strong>React </strong> is the JavaScript library of User
            Interfaces. It is build single-page applications and also allows you
            to create reusable UI components. It does not follow any specific
            pattern, developers have the freedom to choose any design pattern.
            It begins with a single root component. <br />
            <strong>Angular </strong> developed by Google, was released in the
            year 2010. It is a TypeScript-based framework that uses a regular
            DOM. Angular follows MVC (Model-View-Controller) architecture, also
            you don’t have restrictions in following only MVC architecture.
            Since Angular is also component-based. <br />
            <strong>Vue </strong> was developed by a former Google employee and
            was released in the year 2014. It was developed to make the best
            version of Angular and make a custom tool. It is used for developing
            single-page engaging and high-quality web applications. Vue has
            become so popular these days and it is one of the hottest topics in
            terms of technology <br />
          </p>
        </article>
      </div>
    </div>
  );
};

export default Blog;
