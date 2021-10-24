import logo from './logo.svg';
import './App.css';
import react, {useState} from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { ApolloProvider } from '@apollo/react-hooks';
import ApolloClient from 'apollo-boost';
import Home from './components/Home';
import Menu from './components/Menu'
const client = new ApolloClient({
  request: (operation) => {
    const token = localStorage.getItem('id_token');
    operation.setContext({
      headers: {
        authorization: token ? `Bearer ${token}` : '',
      },
    });
  },
  uri: 'http://localhost:3001/graphql',
});

function App() {
  return (
   <ApolloProvider client={client}>
     <Router>
       <div>
         <Switch>
           <Route exact path='/' component={Home}/>
           <Route exact path='/Menu' component={Menu}/>
         </Switch>
       </div>
     </Router>
   </ApolloProvider>
  );
}

export default App;
