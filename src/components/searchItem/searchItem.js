import styled from 'styled-components';

const ItemLi = styled.li`
    display: flex;
    flex-wrap: wrap;

    min-height: 12rem;
    height: 100%;
    padding: 4px;
    margin-bottom: 20px;

    border: 2px solid #eee;
    box-shadow: 0 .125rem .25rem rgba(0,0,0,.075);
`;

const ImageWrapper = styled.div`
    display: block;
    flex: 1 1 4rem;
`;

const ItemImage = styled.img`
    max-width: 100%;
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const BookData = styled.div`
    display: flex;
    flex-direction: column;

    margin-left: 10px;
    padding: 10px;

    flex: 3 1 10rem;
`

const BookName = styled.h4`
    margin-bottom: 0;
    font-size: 18px;
`;

const BookAuthor = styled.h5`
    margin-top: 10px;
    margin-bottom: 0;
    font-size: 14px;
`;

const BookDescr = styled.p`
    margin-top: 10px;
    font-size: 12px;
`;

const RealeseYear = styled.p`
    font-size: 12px;
    color: #898989;
`;

const SearchItem = (props) => {
    const {url, title, authors, description, publishedDate} = props;
    return ( 
        <ItemLi>
            <ImageWrapper>
                <ItemImage
                    src={url}
                    alt=""/>
            </ImageWrapper>
            <BookData>
                <BookName>{title}</BookName>
                <BookAuthor>{authors}</BookAuthor>
                <BookDescr>{description}</BookDescr>
                <RealeseYear>{publishedDate}</RealeseYear>
            </BookData>
        </ItemLi>
    );
};

export default SearchItem;