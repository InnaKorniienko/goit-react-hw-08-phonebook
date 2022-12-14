import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAuthentication } from 'redux/authentication/authenticationSlice';
import { logoutUser } from 'redux/authentication/authenticationOperation';
import { NavLink, useNavigate } from 'react-router-dom';
import style from './UserMenu.module.css';

export const UserMenu = () => {
  const { user, isLoggedIn } = useSelector(getAuthentication);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const onLogoutClick = () => {
    dispatch(logoutUser());
    navigate('/login');
  };

  return (
    <nav className={style.navWrapper}>
      {/* {isLoggedIn && <NavLink to="/contacts">Contacts</NavLink>} */}
      {isLoggedIn ? (
        <div className={style.userWrapper}>
          <p className={style.welcomeName}>{`Welcome, ${user.name}!`}</p>
          <button
            type="button"
            className={style.button}
            onClick={onLogoutClick}
          >
            Log Out
          </button>
        </div>
      ) : (
        <div className={style.menuWrapper}>
          <NavLink to="/register" className={style.link}>
            Register
          </NavLink>
          <NavLink to="/login" className={style.link}>
            Login
          </NavLink>
        </div>
      )}
    </nav>
  );
};
