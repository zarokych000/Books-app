import React, {Component} from 'react';
import BookService from '../../service/bookService';
import styled from 'styled-components';

const Search = styled.input`
    display: block;
    width: 100%;
    height: 40px;
    border: 2px solid #d2d2d2;
    border-radius: 3px;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);

    padding-left: 10px;
`;

const SearchWrapper = styled.form`
    display: flex;
`;

const SearchButton = styled.button`
    background: #31acd2;
    color: white;
    border: 2px solid #c4ecfd;
    padding: 0 10px;
    border-radius: 3px;

    transition: all 0.3s;

    &:hover {
        background: #0696c8;
        border-color: #23bfff;
    }
`;

export default class SearchForm extends Component {

    bookService = new BookService();

    constructor(props) {
        super(props);

        this.state = {
            value: '',
        };
    }

    onHandleChange(e) {
        this.setState({
            value: e.target.value,
        });
    }

    async onHandleSubmit(e) {
        e.preventDefault();
        const response = await this.bookService.searchBooks(this.state.value);
        
        this.props.onSubmit(response);
    }

    render() {
        const {value} = this.state;
        return (
            <SearchWrapper onSubmit={(e) => this.onHandleSubmit(e)}>
                <Search placeholder="Search" onChange={(e) => this.onHandleChange(e)} value={value}/>
                <SearchButton type="submit">Искать</SearchButton>
            </SearchWrapper>
        );
    }
};
