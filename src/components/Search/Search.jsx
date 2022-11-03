import React, { useState } from 'react'
import styles from './Search.module.scss'
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';
import { useContext } from 'react';
import { SearchContext } from '../../App';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';

function Search() {

  const [ value, setValue ] = useState('')
  const inputRef = React.useRef()
  const {searchValue, setSearchValue} = useContext(SearchContext);
  
  
  const setInputRefFocus = () => {
     setSearchValue('')
     setValue('')
     inputRef.current.focus()
  }

  // const onChangeInput = useCallback(
  //   debounce((e) => {
  //     setSearchValue(e.target.value);
  //   }, 1000), []
  // )
  const updateSearchValue =  useCallback(
        debounce((e) => {
          setSearchValue(e);
        }, 250), []
      )


  const onChangeInput = (e) => {
    setValue(e.target.value)
    updateSearchValue(e.target.value)
  }


  return (
    <div className={styles.search}>
        <img className={styles.icon} src={SearchIcon} alt='Search icon'/>
        <input ref={inputRef} value={value} onChange={(e) => onChangeInput(e)} className={styles.input} placeholder='Поиск пиццы'/>
        {
          searchValue && <img onClick={() => setInputRefFocus()} className={styles.cancel} src={Close} alt='cancel icon'/>
        }
    </div>
  )
}

export default Search;
