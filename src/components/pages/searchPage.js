import React, {Component} from 'react';
import styled from 'styled-components';

import SearchForm from '../searchForm';
import SearchItem from '../searchItem';


const SearchWrapper = styled.div`
    margin-top: 6rem;
    width: 100%;

`;

const SearchItemList = styled.ul`
    margin-top: 2rem;
    padding-bottom: 4rem;
    padding-left: 0;
    list-style: none;
`;

export default class SearchPage extends Component{
    constructor(props) {
        super(props);
        
        this.state = {
            data: [],
        }
        this.onHandleSearch = this.onHandleSearch.bind(this);
    }

    putToStorage(key, data) {
        const items = JSON.stringify(data);
        sessionStorage.setItem(key, items);
    }

    retrieveFromStorage(key) {
        const data = sessionStorage.getItem(key);
        return JSON.parse(data);
    }

    onHandleSearch(data) {
        this.setState({data});
        this.putToStorage('data', data);
    }

    render () {
        let {data} = this.state;

        let storageItems;
        if (sessionStorage.getItem('data')) {
            storageItems = this.retrieveFromStorage('data')
        }

        data = data.length !== 0 ? data : storageItems || data;

        const searchItem = data.map((item) => {
            const {id, title, authors, description, url, published} = item;
            return (
                <SearchItem
                    key={id}
                    url={url}
                    title={title}
                    authors={authors}
                    description={description}
                    publishedDate={published}/>
            );
        });

        return (
            <SearchWrapper>
                <SearchForm onSubmit={this.onHandleSearch}/>
                <SearchItemList>
                    {searchItem}
                </SearchItemList>
            </SearchWrapper>
        );
    }
}
