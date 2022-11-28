import React from 'react'
import { Link } from 'react-router-dom';
import Reload from '../../assets/img/reload.png';
import styles from './Error.module.scss'

function ErrorLoading() {
  return (
    <div className={`container ${styles.errorLoading}`}>
        <h2>Произошла ошибка 😕</h2>
        <p>Попробуйте еще раз.</p>
        <Link to='/'><img src={Reload} alt='Reload img' /></Link>
    </div>
  )
}

export default ErrorLoading;