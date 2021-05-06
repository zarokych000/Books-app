import styled from 'styled-components';
import './header.css';
import {Link, NavLink} from 'react-router-dom';

const HeaderWrapper = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 10px;
    margin-top: 1rem;
    border-radius: 5px;

    background: #eee;

    @media (max-width: 745px) {
        flex-direction: column;
        padding-bottom: 2rem;
    }
`;

const Ul = styled.ul`
    padding: 0;
    margin: 0;

    display: flex;
    justify-content: space-between;
    align-items: center;
    list-style: none;

    width: 290px;
    margin-right: 40px;

    @media (max-width: 720px) {
        margin-right: 0;
    }

    @media (max-width: 400px) {
        flex-direction: column;
    }
`

const Li = styled.li`
    @media (max-width: 400px) {
        margin-bottom: 1rem;
    }
`;

const Logo = styled.div`
    font-size: initial;
    margin: 0;

    @media (max-width: 745px) {
        margin-bottom: 1rem
    }
`;


const Header = () => {
    return (
        <>
            <HeaderWrapper>
                <Logo>
                    <Link to="/" className="logo" style={{textDecoration: 'none', color: "#31acd2"}}>
                        Books app
                    </Link>
                </Logo>
                <div className="col-sm-8 col-md-7 col-lg-5 d-flex justify-content-center justify-content-sm-end" >
                    <Ul>
                        <Li><NavLink className="header__link" exact to="/" activeClassName="header__link--active">Поиск</NavLink></Li>
                        <Li><NavLink className="header__link" exact to="/shelves" activeClassName="header__link--active">Полка</NavLink></Li>
                        <Li><NavLink className="header__link" exact to="/registr" activeClassName="header__link--active">Регистрация</NavLink></Li>
                    </Ul>
                </div>
            </HeaderWrapper>
        </>
    );
};

export default Header;