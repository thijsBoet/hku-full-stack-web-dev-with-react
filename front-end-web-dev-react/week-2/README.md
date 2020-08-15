## Component Types
* Can be classified based how they are used
  * Presentational vs Container
  * Skinny vs Fat
  * Dumb vs Smart
  * Stateless vs Stateful

## Presentational Components
* Mainly concerned with rendering the “view”
  * How things look (markup, styles)
* Render the view based on the data that is passed
to them in props
* Do not maintain their own local state
  * Can be relaxed to maintain only UI state than data

## Container Components
* Responsible for making things work
  * Data fetching, state updates
* Make use of presentational components for rendering
  * Can wrap presentational components in wrapping divs
* Provide the data to the presentational components
* Maintain state and communicate with data sources

## Class Components
* Extend React.Component to get class
components
* Need to implement the render() method that
returns the view
* Can have local state
* Lifecycle hooks

## Functional Components
* Simplest way to define React components
* JavaScript function that returns a React element,
or a collection of React elements that define the
view
* Receives a “props” object as a parameter
* Cannot have local state or access lifecycle hooks

## Virtual DOM
* Browser DOM is a browser object
* Virtual DOM is a React object
  * A lightweight representation of the Browser DOM
  * In-memory tree data structure of plain JS objects
  * Manipulations extremely fast compared to modifying
the browser DOM
  * Created completely from scratch on every setState

## Updating the DOM
* Diffing algorithm will detect those nodes that are changed
  * Updates the entire sub-tree if diffing detects that two elements
are of different types
  * Using “key” you can hint child elements as stable
* No need to re-render where keys do not change
* React Fiber: new reconciliation algorithm in React 16
  * Incremental rendering

## React Router
* Collection of navigational components
  * Enables navigation among views
  * Router components, route matching components and
navigation components
* Uses a browser-based bookmarkable URLs as an instruction
to navigate to a client-generated view in your web app
  * Can also pass along optional parameters

## Web App Routing
* Install react-router-dom
* Router component: <BrowserRouter>
  * Creates specialized history object
  * Also <HashRouter> if you are using a static file server
  * Enclose your app in BrowserRouter

## Route Matching
* Route matching components: <Route> and <Switch>
  * <Route>’s path prop enables specification of the current location’s
pathname
  * <Route>’s component prop specifies the corresponding view for the
location
  * Using exact attribute ensures that the path must be exactly matched
  * <Redirect> enables the default route specification
  * <Switch> enables grouping together several routes
* Will iterate over all its children and find the first one that matches the path

## Navigation
* Navigation is supported through the <Link>
and <NavLink> components:
  * <Link> creates links in your application
* Will render as <a> in the HTML
  * <NavLink> also attaches the active class to the link
when its prop matches the current location

## What is Single Page Application?
* Web application or web site that fits in a single
page
  * No need to reload the entire page
  * UX like a desktop/native application
  * Most resources are retrieved with a single page load
  * Redraw parts of the page when needed without
requiring a full server roundtrip

## Challenges in SPA
* Search engine optimization
* Partitioning the responsibility between client and
server
* Maintaining history
* Analytics
* Speeding up the initial page load

## React Router
* Paths specified as a URL
* Paths can also carry parameter values:
  * e.g., /menu/42 where 42 is a route parameter
* Route parameters specified in the path
specification as a token
  * e.g., path: ‘menu/:id’ where id is the token

## Route Parameters
* Route parameters can be specified using a link parameter
while specifiyng the link
  * e.g., <Link to{`/menu/${dish.id}`} >
* Route passes three props to the component:
  * match, location, history

## match Object
* match object provides information about how a <Route
path> matched the URL
  * params: an object that contains key/value pair parsed from
the URL corresponding to the dynamic segments of the
path
  * e.g. if path is specified as /menu/:id, then a path like
/menu/42 will result in match.params.id being equal to
“42”## 