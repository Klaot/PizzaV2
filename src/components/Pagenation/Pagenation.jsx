import React from 'react'
import ReactPaginate from 'react-paginate';
import styles from './pagenation.module.scss';

function Pagenation({setCurrentPage}) {
    
  return (
        <>
            <ReactPaginate className={styles.root}
                breakLabel="..."
                nextLabel=" >"
                onPageChange={(e) => setCurrentPage(e.selected + 1)}
                pageRangeDisplayed={5}
                pageCount={4}
                previousLabel="< "
                renderOnZeroPageCount={null}
            />
        </>
  )
}

export default Pagenation