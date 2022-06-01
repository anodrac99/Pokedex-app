import React from 'react';
import '../styles/pagination.css'

const Pagination = ({postPerPage,totalPost,paginate,currentPage}) => {
    const PageNumbers=[];
    const paginationButtons = Math.ceil(totalPost/postPerPage);
    for(let i=currentPage-5;i<=paginationButtons;i++){
        if(i>0){
            if(PageNumbers.length<10){
                PageNumbers.push(i);
            }

        }
       
    }
  
    return (
        <div className='pagination-container'>
            <ul className="pagination">
                {
                    PageNumbers.map(number=>(
                        <li key={number}>
                            <button onClick={()=>paginate(number)}>
                                {number}
                            </button>
                        </li>
                    ))
                }
            </ul>
            
        </div>
    );
};

export default Pagination;