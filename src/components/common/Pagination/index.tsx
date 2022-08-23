import React, { Dispatch, SetStateAction, } from "react";
import { ReactComponent as Prev } from "images/prev.svg";
import { ReactComponent as Next } from "images/next.svg";
import { MetaData } from "types";

import styles from './pagination.module.scss';

interface Props {
  meta: MetaData,
  type: 'player' | 'team',
  setPage: Dispatch<SetStateAction<number>>
  setPerPage: Dispatch<SetStateAction<number>>
} 

export const Pagination:React.FC<Props> = ({ 
  meta, 
  type, 
  setPage,
  setPerPage,
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

          return <option value={i + 1}>{i + 1}</option>
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
            <option value={value}>{value}</option>
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
          onChange={(event) => {
            setPage(1);
            setPerPage(+event.target.value);
          }}
        >
          { renderPerPageOptions() }
        </select>

        <div>
          {`Displaying ${displayRangeMin}-${displayRangeMax} of ${total_count} items`}
        </div>
      </div>

      <div className={subContainerRight}>
        <div>{`${current_page} of ${total_pages} pages`}</div>

        <button 
          className={prevPage}
          disabled={current_page === 1}
          onClick={() => setPage(current_page - 1)}
        >

          <Prev stroke="#14141E"/>
        </button>

        <select
          className={select} 
          value={current_page}
          onChange={(event) => setPage(+event.target.value)}
        >
          { renderPageOptions() }
        </select>

        <button 
          className={nextPage}
          disabled={current_page === total_pages}
          onClick={() => setPage(current_page + 1)}
        >
          <Next stroke="#14141E" />
        </button>
      </div>
    </div>
  )
};
