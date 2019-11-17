import React, { useState } from 'react';
import classNames from 'classnames';
import image from './../img/logo-white.png';

const menu_items = [
  { display: 'NEWS', link: 'https://www.morcmtb.org/news' },
  { display: 'TRAILS', link: 'https://www.morcmtb.org/trails' },
  { display: 'CONDITIONS', link: 'https://trails.morcmtb.org/' },
  { display: 'PARTNERS', link: 'https://www.morcmtb.org/paartners' },
  { display: 'SUPPORT', link: 'https://www.morcmtb.org/join' },
  { display: 'ABOUT', link: 'https://www.morcmtb.org/about' },
  { display: 'MORC SWAG SHOP', link: 'https://teespring.com/stores/morc' }
];

export function Header({ children, ...rest }) {
  const [active, setActive] = useState(false);
  return (
    <header>
      <nav className="navbar is-info" aria-label="main navigation">
        <div className="container">
          <div className="navbar-brand">
            <a className="navbar-item" href="https://www.morcmtb.org">
              <img src={image} alt="morcmtb.org" />
            </a>
            <div
              onClick={e => setActive(!active)}
              className={classNames('navbar-burger ', { 'is-active': active })}
            >
              <span />
              <span />
              <span />
            </div>
          </div>
          <div
            className={classNames('navbar-end navbar-menu ', {
              'is-active': active
            })}
          >
            {menu_items.map((item, i) => {
              return (
                <a href={item.link} key={i} className="navbar-item">
                  {item.display}
                </a>
              );
            })}
          </div>
        </div>
      </nav>
    </header>
  );
}
