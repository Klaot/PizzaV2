import React, { useState } from 'react'
import styles from './Search.module.scss'
import Close from '../../assets/img/delete_icon.svg';
import  SearchIcon  from '../../assets/img/search_icon.svg';
import debounce from 'lodash.debounce';
import { useCallback } from 'react';
import {setSearchValue} from '../../redux/slices/filter'
import { useDispatch, useSelector } from 'react-redux';

function Search() {

  const [ value, setValue ] = useState('')
  const inputRef = React.useRef()
  const { searchValue } = useSelector(state => state.filter)
  const dispatch = useDispatch()
  
  
  const setInputRefFocus = () => {
     dispatch(setSearchValue(value));
     setValue('')
     inputRef.current.focus()
  }

  const updateSearchValue =  useCallback(
        debounce((e) => {
          dispatch(setSearchValue(e));
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
