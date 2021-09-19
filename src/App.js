import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import {ApolloProvider} from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './components/Home';

function App() {
  return (
   <ApolloProvider client={client}>
     <Router>
       <div>
         <Switch>
           <Route exact path='/' component={Home}/>
         </Switch>
       </div>
     </Router>
   </ApolloProvider>
  );
}

export default App;
