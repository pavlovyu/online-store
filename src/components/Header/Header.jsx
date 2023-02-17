import PropTypes from 'prop-types';
import {ReactComponent as CartSvg} from "./icons/cart.svg";
import {ReactComponent as FavoriteSvg} from "./icons/favorites.svg";
import './Header.scss';
import {Link} from "react-router-dom";

function Header({cart, favorites}) {
    return (
        <header className="header">
            <div className="container">
                <div className="header__wrapper">
                    <Link to="/">
                        <div className="header__logo">
                            <img src="https://content.rozetka.com.ua/goods/images/original/308326671.jpg" alt="Music-Logo" className="logo"/>
                            <p className="logo-text">Life is musiC</p>
                        </div>
                    </Link>
                    <div className="header__actions">
                        <div className="header__favorites-list">
								<Link to="/favorite" className="icon-favorite">
									<span className="count">{favorites}</span>
									<FavoriteSvg/>
								</Link>
                        </div>
                        <div className="header__cart-list">
								<Link to="/cart" className="icon-cart">
									<span className="count">{cart}</span>
									<CartSvg/>
								</Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

Header.propTypes = {
    cart: PropTypes.number,
    favorites: PropTypes.number,
}

Header.defaultProps = {
    cart: 0,
    favorites: 0,
}

export default Header;
