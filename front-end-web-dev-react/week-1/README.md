## Software frameworks?
- Abstraction in which software provides generic functionality that can be selectively changed by additional user-written code
- Universal, reusable environment that provides particular functionality as part of a larger software platform
- e.g. Angular

## Software Library
- Collection of implementations of behavior with a well-defined interface by which the behavior is invoked
- Reuse of behavior
- Modularity
- e.g. Jquery

## Framework vs Library
- A Library is a collection of functions. Your code is in charge and it calls into the Library when it sees fit.
- A particular implementation of a web application, where your code fills in the details. The framework is in charge and it calls into the code when it needs something app specific.

## Framework
- Hollywood principle: Don't call us, we'll call you!
- Inversion of control
- Imperative vs Declarative programming

## What is React?
- A Javascript Library for building user interfaces
- Declarative
- Component based approach
- Technology stack agnostic
- Designed for Speed, Simplicity and Scalability

## JSX
- Syntactical extension to JS
- Shorthand notations to represent JS function calls that evaluate to JS objects
- Avoids artificial separation of rendering logic from other UI logic

## React Components
- A component returns a set of React elements that should appear on the screen
- Components enable you to split your UI into independent, reusable pieces
- Components also accept inputs
- Different kinds of components can be defined in React

## Component Conventions
- User-defined component names must always be capitalized (These compile to React.createElement(. . .))
- Tags starting with lowercase letters are treated as DOM tags (Built-in components)

## State
* Each component can store its own local information in its “state”
  – Private and fully controlled by the component
  – Can be passed as props to children
* Only class components can have local state

## Props
* JSX attributes are passed into a component as a single object
  – Available in the component as “props”
  – Can pass in multiple attributes
  – Cannot modify props within the component

## Handling Events
* Handling events is similar to the way you handle events on DOM elements:
  – Use camelCase to specify events
  – Pass function as the event handler
* Example:
```javascript<Card onClick={() => this.onDishSelect(dish)}>```