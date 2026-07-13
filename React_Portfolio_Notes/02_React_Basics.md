# React Basics

## What is React?

React is a JavaScript library used to build interactive and reusable user interfaces.

## What is Vite?

Vite is a modern build tool that creates and runs React applications quickly.

Advantages:
- Fast development server
- Hot Module Replacement (HMR)
- Optimized builds

## What is JSX?

JSX stands for JavaScript XML.

It allows us to write HTML-like syntax inside JavaScript.

Example:

<h1>Hello React</h1>

## React Component

A React component is a reusable piece of the user interface.

Example:

Navbar
Hero
About
Skills
Projects
Footer

## Why Components?

- Reusable
- Easy to maintain
- Modular
- Better code organization

## First Component Created

Navbar.jsx

Code:

function Navbar() {
  return (
    <nav>
      <h2>My Portfolio</h2>
    </nav>
  );
}

export default Navbar;

## App.jsx

The Navbar component was imported into App.jsx.

Example:

import Navbar from "./components/Navbar";

function App() {
  return (
    <div>
      <Navbar />
    </div>
  );
}

export default App;

## New Concepts Learned

- React
- Vite
- JSX
- Component
- import
- export default
- return

## Creating the First Component

### Component Name
Navbar

### File Location
src/components/Navbar.jsx

### Purpose
To display the website navigation.

### Used in
src/App.jsx

### New Concept
React components can be imported into other components using the import statement.