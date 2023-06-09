import React from 'react';
import s from './Header.module.css';

const Header = () => {
  return (
    <header className={s.header}>
      <div className={s.name}>
        Social Network
      </div>
      {/* <img className={s.logo} src="https://upload.wikimedia.org/wikipedia/en/thumb/c/cc/OnlyFans_logo.svg/2560px-OnlyFans_logo.svg.png"></img> */}
    </header>
  )
}

export default Header;