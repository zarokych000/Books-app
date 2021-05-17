import React, {Component} from 'react';
import Shelf from '../shelf';
import BookService from '../../service/bookService';

import styled from 'styled-components';

const shortId = require('shortid');

const Wrapper = styled.div`
    margin-top: 100px;
`;

const ShelveTitle = styled.h2`
    text-align: center;
`;

const ShelvesWrapper = styled.div`
    padding: 0 20px 80px 20px;
`;


export default class ShelvesPage extends Component {
    bookService = new BookService();
    
    state = {
        shelves: [],
        titles: []
    }

    parseShelves(data) {
        const items = {
            shelves: [],
            titles: []
        }

        for(let key in data) {
            items.titles.push(key);
            items.shelves.push(data[key]);
        };

        return items
    }

    componentDidMount() {
        const {searchShelf} = this.bookService;

        searchShelf()
            .then(this.parseShelves)
            .then(({shelves, titles}) => {
                this.setState({
                    shelves,
                    titles
                })
            });
    }

    onHandleDelete = (title) => {
        const {searchShelf, changeShelves} = this.bookService;

        searchShelf()
            .then(data => {
                const dbShelf = {};

                for (let key in data) {
                    if (key !== title) {
                        dbShelf[key] = data[key];
                    }
                }

                changeShelves(dbShelf);

                this.setState(() => {
                    const {shelves, titles} = this.parseShelves(dbShelf);
                    return {
                        shelves,
                        titles
                    }
                });
            });
    };

    render() {
        const {shelves, titles} = this.state;
        
        const items = shelves.map((item, i) => {
            const id = shortId.generate();
            return (
                <Shelf
                    key={id || i} 
                    shelf={item}
                    title={titles[i]}
                    onDelete={() => this.onHandleDelete(titles[i])}
                />
            );
        });

        return (
            <Wrapper>
                <ShelveTitle>Полки</ShelveTitle>
                <ShelvesWrapper>
                    {items}
                </ShelvesWrapper>
            </Wrapper>
        );
    }
}