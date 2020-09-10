import React from "react";
import "./Header.css";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div className="header">
      <MenuIcon className="header__menu" />
      <Link to="/">
        <div className="header__icon">
          <img
            src="http://pngimg.com/uploads/amazon/amazon_PNG11.png"
            alt="logo"
          />
        </div>
      </Link>
      <div className="header__search">
        <form>
          <select name="search-dropdown" class="header__searchDropdown">
            <option selected="selected" value="">
              Tutte le categorie
            </option>
            <option value="">Alimentari</option>
            <option value="">App e Giochi</option>
            <option value="">Buoni Regalo</option>
            <option value="">CD e Vinili</option>
            <option value="">Elettronica</option>
            <option value="">Film e TV</option>
            <option value="">Kindle Store</option>
            <option value="">Libri</option>
            <option value="">Meno di 10€</option>
            <option value="">Prime Video</option>
            <option value="">Sport e tempo livero</option>
            <option value="">Videogiochi</option>
          </select>
        </form>
        <input type="text" className="header__searchInput" />
        <SearchIcon className="header__searchIcon" />
      </div>
      <div className="header__tools">
        <Link to="/login" className="header__link">
          <div className="header__tool">
            <span className="header__tool-line-1">Ciao, Accedi</span>
            <span className="header__tool-line-2">Account e liste</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__tool">
            <span className="header__tool-line-1">Resi</span>
            <span className="header__tool-line-2">& ordini</span>
          </div>
        </Link>
        <Link to="/" className="header__link">
          <div className="header__tool">
            <span className="header__tool-line-1">Iscriviti a</span>
            <span className="header__tool-line-2">Prime</span>
          </div>
        </Link>
        <Link to="/checkout" className="header__link">
          <div className="header__tool-basket">
            <ShoppingCartIcon />
            <span className="header__tool-line-2 header__basket-count">0</span>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
