import Container from '@material-ui/core/Container';
import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import About from './pages/About';
import Artist from './pages/Artist';
import Home from './pages/Home';
import MainMenu from './components/MainMenu';


function App() {
    return (
        <Router>
            <MainMenu />
            <Container maxWidth="lg">
                <Switch>
                    <Route path="/about"><About /></Route>
                    <Route path="/artist/:id"><Artist /></Route>
                    <Route path="/"><Home /></Route>
                </Switch>
            </Container>
        </Router>
    );
}

export default App;