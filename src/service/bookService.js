import axios from 'axios';


export default class BookService {
    constructor() {
        this._apiSearchBase = 'https://www.googleapis.com/books/v1/volumes';
        this._apiBase = "http://localhost:3000"
        this.plugImage = "https://stat.rs24.ru/OA_MEDIA/endeca/images/no_image.jpg";
        this._transformBooks = this._transformBooks.bind(this);
    }
    // base methods
    getResource = async (url) => {
        const res = await axios.get(url);

        if (!(res.status >= 200 && res.status <= 300)) {
            throw new Error(`Could not fetch ${url} status: ${res.status}`);
        }

        return res.data;
    }

    // search method

    searchBooks = async (term) => {
        const modTerm = term.split(' ').join('%20');
        const books = await this.getResource(`${this._apiSearchBase}?q=${modTerm}`)
        return books.items.map(this._transformBooks);
    }
    // shelf manipulation

    searchShelf = async () => {
        const req = await this.getResource(`${this._apiBase}/shelves`);
        return await req;
    }

    changeShelves = async (data) => {
        const change = await axios.post(`${this._apiBase}/shelves`, data);
        return await change;
    }

    // proccessing data from server

    _isSet(value) {
        if (value) {
            return value;
        } else {
            return 'no data :('
        }
    }

    _proccesDescr(str) {
        if (str.length > 200) {
            return `${str.slice(0, 200)}...`;
        } else {
            return str ? str : '';
        }
    }

    _proccesImage(img) {
        return img ? img.thumbnail : this.plugImage;
    }

    _transformBooks(rawItem) {
        let book;
        const {volumeInfo: item} = rawItem;
        try {
            book = {
                id: this._isSet(rawItem.id),
                title: this._isSet(item.title),
                authors: this._isSet(item.authors),
                description: this._proccesDescr(this._isSet(item.description)),
                url: this._proccesImage(item.imageLinks),
                published: this._isSet(item.publishedDate)
            }
        } catch(e){
            console.log(e);
        }

        return book;
    }
}