import Layout from './components/Layout/Layout.jsx';
import Home from './components/Home/Home.jsx';

import { BrowserRouter, Route, Switch } from 'react-router-dom';


function App() {
  return (
    <BrowserRouter>
    <Layout>
      <Switch>
        <Route exact path="/" component={Home} />
        {/* <Route component={NotFound} /> */}
      </Switch>
    </Layout>
   
   </BrowserRouter>
  );
}

export default App;
