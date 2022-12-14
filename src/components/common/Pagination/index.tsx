import React from "react";
import { ReactComponent as Prev } from "images/prev.svg";
import { ReactComponent as Next } from "images/next.svg";
import { MetaData } from "types";

import styles from './pagination.module.scss';

interface Props {
  meta: MetaData,
  type: 'player' | 'team',
  // setPage: Dispatch<SetStateAction<number>>
  // setPerPage: Dispatch<SetStateAction<number>>
  handlePageChange: (page: number) => void;
  handlePerPageChange: (page: number) => void;
} 

export const Pagination:React.FC<Props> = ({ 
  meta, 
  type, 
  handlePageChange,
  handlePerPageChange,
}) => {
  const { container, subContainerLeft, subContainerRight, select, prevPage, nextPage } = styles;
  
  const { per_page, current_page, total_pages, total_count } = meta;

  const maxPerPage = type === 'team' ? 30 : 25;
  const optionsStep = type === 'team' ? 5 : 4;

  const displayRangeMin = current_page * per_page - per_page + 1; 
  const displayRangeMax = current_page === total_pages ? total_count : current_page * per_page;
  
  const renderPageOptions = () => {
    return (
      <>
        {[...Array(total_pages)].map((e, i) => {
          const value = i + 1;

          return <option key={value}value={value}>{value}</option>
        })}
      </>
    )
  }

  const renderPerPageOptions = () => {
    const totalAmountOfOptions = Math.trunc(maxPerPage / optionsStep) 

    return (
      <>
        {[...Array(totalAmountOfOptions)].map((e, i) => {
          const value = optionsStep + optionsStep * i;
          
          return (
            <option key={value} value={value}>{value}</option>
          )
        })}
      </>
    )
  }

  return (
    <div className={container}>
      <div className={subContainerLeft}>
        <div>Items per page</div>

        <select 
          className={select}
          value={per_page}
          onChange={(event) => handlePerPageChange(+event.target.value)}
        >
          { renderPerPageOptions() }
        </select>

        <div>
          {`Displaying ${displayRangeMin}-${displayRangeMax} of ${total_count} items`}
        </div>
      </div>

      <div className={subContainerRight}>
        <div>{`${current_page} of ${total_pages} pages`}</div>

        <div>
          <button 
            className={prevPage}
            disabled={current_page === 1}
            onClick={() => handlePageChange(current_page - 1)}
          >

            <Prev stroke="#14141E"/>
          </button>

          <select
            className={select} 
            value={current_page}
            onChange={(event) => {handlePageChange(+event.target.value)}}
          >
            { renderPageOptions() }
          </select>

          <button 
            className={nextPage}
            disabled={current_page === total_pages}
            onClick={() => handlePageChange(current_page + 1)}
          >
            <Next stroke="#14141E" />
          </button>
        </div>
      </div>
    </div>
  )
};
