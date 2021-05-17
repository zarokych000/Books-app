import React, {Component} from 'react';

import {Container, Row, Col} from 'react-bootstrap';
import {Switch, Route} from 'react-router-dom';
import Header from '../header';
import SearchPage from '../pages/searchPage';
import ShelvesPage from '../pages/shelvesPage';
import ShelfPage from '../pages/shelfPage';

export default class App extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <Header/>
                    </Col>
                </Row>
                <Row>
                    <Switch>
                        <Route path="/" exact>
                            <Col sm={{span: 6, offset: 3}}>
                                <SearchPage/>
                            </Col>
                        </Route>
                        <Route path="/shelves/" exact>
                            <Col>
                                <ShelvesPage/>
                            </Col>
                        </Route>
                        <Route path="/registr/">
                            <Col sm={{span: 6, offset: 3}}>
                                <h1>Регистрация</h1>
                            </Col>
                        </Route>
                        <Route path="/shelves/:id" component={ShelfPage}>
                        </Route>
                    </Switch>
                </Row>
            </Container>
        );
    }
};
