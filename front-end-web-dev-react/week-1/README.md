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
  * Private and fully controlled by the component
  * Can be passed as props to children
* Only class components can have local state

## Props
* JSX attributes are passed into a component as a single object
  * Available in the component as “props”
  * Can pass in multiple attributes
  * Cannot modify props within the component

## Handling Events
* Handling events is similar to the way you handle events on DOM elements:
  * Use camelCase to specify events
  * Pass function as the event handler
* Example:
```javascript
<Card onClick={() => this.onDishSelect(dish)}>
```

## Lifting State Up
- Sometimes several components may share the same data
- Changes to data in one component needs to be reflected to another component
- Best to move the shared state to a common ancestor component

## React Component Lifecycle
* React Component goes through the following
lifecycle stages:
  * Mounting
  * Updating
  * Unmounting
* Several lifecycle methods available in each stage

## Mounting Lifecycle Methods
* Called when an instance of a component is being created
and inserted into the DOM:
  * constructor()
  * getDerivedStateFromProps()
  * render()
  * componentDidMount()
* An earlier method now deprecated called componentWillMount()

## Updating Lifecycle Methods
* Called when a component is being re-rendered
  * Can be caused by changes to props or state
  * getDerivedStateFromProps()
  * shouldComponentUpdate()
  * render()
  * getSnapshotBeforeUpdate()
  * componentDidUpdate()
* Two methods that are now deprecated:
componentWillReceiveProps() and componentWillUpdate()

## Unmounting Lifecycle Methods
* Is called when the component is being removed
from the DOM:
  * componentWillUnmount()
* Error Handling: called when there is an error
during rendering, in a lifecycle method or in the
constructor of any child component
  * componentDidCatch()