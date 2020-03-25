## Presentational components

Presentational components are those components whose only job is to render a view according to the 
styling and data passed to them. Essentially, they do not contain any business logic. That's why 
they are sometimes also called `dumb components`. This means that they don't have direct access to 
Redux or other data stores. Data is passed to them via props.

Therefore, presentational components:

- are children of a container and receive data and callbacks needed to construct the UI exclusively 
via props.
- are concerned with how things look, have markup and styles of their own.
- have no dependencies on the rest of the app, such as Redux stores.
- don’t specify how the data is loaded or mutated.
- rarely have their own state. When they do, it’s UI state rather than data, so you would utilise 
the react hooks (useEffect, useRef, useState) here, which should mostly be avoided in a container.

For more information see [this article](https://thoughtbot.com/blog/best-practices-while-developing-a-react-native-app).
