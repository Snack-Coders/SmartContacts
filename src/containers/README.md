## Container components 

Containers are React components which have access to the store. These components make API calls, 
do processing and contain the business logic of the app. Container components shouldn't have the 
view logic or presentational logic. The job of container components is to compute the values and 
pass them as props to the presentational components. Hence, these components are sometimes also 
referred to as _Smart Components_.

Therefore, container components:

- are concerned with how things work.
- don’t usually have any markup of their own (no View, Text, etc.) except for some wrapping Views, 
and never have any styles.
- provide the data and behavior to presentational or other container components.
- call Redux actions and provide these as callbacks to the presentational components. This means 
the redux hooks (useDispatch, useSelector, etc.), redux actions, redux selectors (extract useful 
data for the container from App state) must live here.
- are often stateful, as they tend to serve as data sources.
- are usually generated using higher order components such as connect() from React Redux, 
createContainer() from Relay, or Container.create() from Flux Utils, rather than written by hand.

For more information see [this article](https://thoughtbot.com/blog/best-practices-while-developing-a-react-native-app).
