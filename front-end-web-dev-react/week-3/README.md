## Forms
* Cohesive, effective and compelling data entry experience
* Extensively used in websites and web
applications for
  * log in
  * submit information (placing orders, booking a ticket etc.)

## HTML Forms
* Form Tag 
  ```html
  <form> . . . </form>
  ```
* Form elements:
  ```html
  <input>
  ```
* type: text, password, submit, radio, checkbox, button, color, date, datetime, email, month, number, range, search, tel, time, url, week
  ```html
  <textarea>
  ```
  ```html
  <button>
  ```
  ```html
  <select>
  ```
* These elements maintain their own state and update it based on user input

## Controlled Components
* Make the React component control the form that it renders:
  * Single source of truth
  * Tying the form state to component state
  * Controlled component
* Every state mutation will have an associated handler function

## Uncontrolled Components
* Ideally you should implement forms within controlled components
* Sometimes this approach may be too tedious
* Uncontrolled component approach allows you to handle the form data by the DOM itself

## Uncontrolled Components
* Instead of writing an event handler for every state update, use a ref to get form values from the DOM
* More easier to integrate React with non-React code

## Design Patterns
* Well-documented solution to a recurring problem
  * Also referred to as an architectural pattern
* Software design pattern
  * Reusable solution to commonly occurring problems
  * Gang of four: E. Gamma et al. Design Patterns: Elements of Reusable Object-Oriented Software, Addison-Wesley, 1994

## The Model-View-Controller (MVC)
Framework
* Software engineering architecture pattern
  * Isolation of domain logic from user interface
  * Permits independent development, testing and maintenance (separation of concerns)

## MVC Framework
* Model
  * manages the behavior and data of the application domain
  * responds to requests for information about its state (usually from the view)
  * responds to instructions to change state (usually from the controller)
  * In event-driven systems, the model notifies observers (usually views) when the information changes so that they can react

* View
  * renders the model into a form suitable for interaction, typically a user interface element
  * Multiple views can exist for a single model for different purposes
  * A viewport typically has a one to one correspondence with a display surface and knows how to render to it

* Controller
  * receives user input and initiates a response by making calls on model
objects
  * A controller accepts input from the user and instructs the model and viewport to perform actions based on that input

## Model View View-Model (MVVM)
* Descendent of MVC
* Sometimes called ModelView-Binder
* View model
  * Abstraction of the view that exposes public properties and commands
  * Declarative data binding

## React and MVC
* Initially React was viewed as the “V” in MVC
  * Not emphasized any more
* Facebook found issues with using the standard MVC architecture pattern
  * Discarded in favor of the Flux architecture
  * Problems with cascading updates, decentralized mutations, race conditions
* Unidirectional Data Flow
* New actions propagated through the system in response to user interactions

## What is Redux?
* Predictable state container for JavaScript apps
* Inspired by Flux, Elm, Immutable
* Makes state mutations predictable

## Main Principles of Redux
* Single source of truth
  * Single state object tree within a single store
* State is read-only (only getters, no setters)
  * Changes should only be done through actions
* Changes are made with pure functions
  * Take previous state and action and return next state
  * No mutation of the previous state
* Single store and single state tree enables powerful techniques:
  * Logging
  * API handling
  * Undo/redo
  * State persistence
  * “time-travel debugging”
* Uni-directional data flow

## Redux Concepts
* State: stored in plain JS object
* Action: plain JS object with a type field that specifies how to change something in the state
* Reducer: pure functions that take the current state and action and return a new state
  * Update data immutably (do not modify inputs)

## Redux Store
* Holds the current state value
* Created using createStore()
* Supplies three methods:
  * dispatch(): states state update with the provided action object
  * getState(): returns the current stored state value
  * subscribe(): accepts a callback function that will be run every time an action is dispatched

## React with Redux
* Use the react-redux package for bindings between React and Redux
  * connect(): generates a wrapper “container” component that subscribes to the store
  * Surround your App root with <Provider>
* Takes the store as an attribute
* Makes store accessible to all connected components
* The connect() function takes two optional arguments:
  * mapStateToProps(): called every time store state changes. Returns an object full of data with each field being a prop for the wrapped component
  * mapDispatchToProps(): receives the dispatch() method and should return an object full of functions that use dispatch()