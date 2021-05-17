import {Component} from 'react';
import BookService from '../../service/bookService';
import ShelfItem from '../shelfItem';
import {Col} from 'react-bootstrap';
import styled from 'styled-components';

const shortId = require('shortid');

const ShelfItemsWrapper = styled.div`
    display: flex;
    flex-direction: column;

    margin-top: 100px;
`;

const ShelfItemsTitle = styled.h1`
    text-align: center;
`;


const ShelfItemsList = styled.ul`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;

    list-style: none;

    padding: 0;
    margin-top: 70px;
`;


export default class ShelfPage extends Component {
    bookService = new BookService();
    state = {
        data: []
    }
    id = '';

    componentDidMount() {
        const req = this.bookService.searchShelf();
        req.then(data => {
            for (let key in data) {
                if (key === this.id) {
                    this.setState(({
                        data: data[key],
                    }))
                }
            }
        })
    }

    changeData = (newItem) => {
        this.bookService.searchShelf()
            .then((data) => {
                let mutableData;

                for (let key in data) {
                    if (key === this.id) {
                        mutableData = data[key];
                    }
                }

                const index = mutableData.findIndex((item) => {
                    return item.id === 3;
                });
                const newData = [...mutableData.slice(0, index), newItem, ...mutableData.slice(index + 1)];

                for (let key in data) {
                    if (key === this.id) {
                        data[key] = newData
                    }
                }
                this.bookService.changeShelfItemsOrder(data)
            });
    }

    render() {
        const {data} = this.state;
        const {id} = this.props.match.params;
        this.id = id;


        const items = data.map((item) => {
            const {title, url} = item;
            const id = shortId.generate();
            return (
                <ShelfItem key={id} title={title} url={url} shelfPage={true}/>
            );
        });

        return (
            <>
                <Col>
                    <ShelfItemsWrapper>
                        <button onClick={() => this.changeData(
                            {
                                "title": "Harry Potter and the Philosopher's Stone",
                                "author": "J. K. Rowling",
                                "url": "https://i.pinimg.com/originals/d5/40/d9/d540d9ce13f7240f8d061b9ef41e5361.jpg",
                                "id": 3
                            }
                        )}>Post</button>
                        <ShelfItemsTitle>{id}</ShelfItemsTitle>
                        <ShelfItemsList>
                            {items}
                        </ShelfItemsList>
                    </ShelfItemsWrapper>
                </Col>
            </>
        )
    }
}

