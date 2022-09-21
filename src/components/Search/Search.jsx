import React from 'react'
import styles from './Search.module.scss'
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';

function Search({searchValue, setSearchValue}) {
  
  return (
    <div className={styles.search}>
        <img className={styles.icon} src={SearchIcon} alt='Search icon'/>
        <input value={searchValue} onChange={(e) => setSearchValue(e.target.value)} className={styles.input} placeholder='Поиск пиццы'/>
        {
          searchValue && <img onClick={() => setSearchValue('')} className={styles.cancel} src={Close} alt='cancel icon'/>
        }
    </div>
  )
}

export default Search;

// Нам необходимо отфильтровать пиццы, для этого нам необходимо передать из инпута вэлью в  компонент Header,