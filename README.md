# React Trello Board

In this two-day sprint you will be building a [Trello](https://trello.com/) clone. Trello is a popular application for managing tasks and projects, often used in agile software development. We will probably use Trello in our own project later in the course so please sign up with Trello now and explore its functionality.

In this sprint, you should aim to implement an MVP (Minimum Viable Product), i.e, a basic prototype with core functionality which can be extended at a later date. A user should be able to create and delete lists, and add, update and delete cards from each list.

NB. This project should use `webpack` to bundle your work and load CSS and images, and should use `webpack-dev-server` to serve your project. `webpack-dev-server` gives us a 'live reload' which automatically reloads the page when it detects changes in our source files. This will greatly aid your development workflow.

## Objectives

- To get used to using and configuring Webpack to bundle your project and transpile and load code

- To practice *Thinking in React* and planning an application with more complex state

- To carefully consider user interaction and to build an appealing user interface

- To practice using a range of React Event Handlers

- To continue to improve your CSS skills


## Steps

1. Spend some time 'Thinking in React' and planning your component hierarchy and the shape of your state.

2. Initialise your project, creating `src` and `public` directories. Add a boilerplate HTML file to your public directory and create a `js` directory into which you will emit your bundled JavaScript file.

3. Create a simple Webapack configuration that loads JavaScript files in your `src` directory and outputs them into a bundle in `public/js/`. First just test the configuration by console logging something - don't write React code yet.

4. Add the Babel loader to transpile React and ES6 code and create a React component to test the configuration.

5. Add CSS and image loaders and try loading CSS and rendering images to test the configuration. Remember to keep your images and CSS in your `src` directory.

6. Begin working on your application. Start by creating the stateless components you need. Either style them nicely with [Bulma](http://bulma.io/) or write the CSS entirely yourself.

7. Add state into your application, hardcoding it initially.

8. One by one, add the user interaction features. Perhaps begin by adding create/update/delete features on a single list, and then think about allowing for extra lists to be added/deleted.


## Bonus 

Trello boards have lots of features - here are just a few ideas.

- Add a button to allow a user to move a card up or down a list.
- Allow a user to change the background color of the page.
- Allow each list to have an updatable title.
- Add a dropdown menu on the card to allow a user to move it from one list to another.
- Allow a user to set a Due By date on each card. If the due date is in the past, visually signal that the card is overdue.
- Use a library like [Dragula](https://github.com/bevacqua/react-dragula) or [React Drag and Drop Library](http://react-dnd.github.io/react-dnd/) to allow a user to drag cards between lists.


## Resources

[Webpack Concepts explained](https://webpack.js.org/concepts/)

[Webpack configuration explained](https://webpack.js.org/configuration/)

[Loading Images in Webpack](http://survivejs.com/webpack/understanding-loaders/loading-images/)

[Advanced Webpack Online Book - recommended for later reading](https://survivejs.com/webpack/introduction/)