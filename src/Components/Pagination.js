import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
const PaginationView = ({page, maxPage, onClick}) => {
  const showPageNum = (page, index) => {
    if(page+index <= maxPage && page+index > 0){
      
      if(index === 0)
        return(
          <PaginationItem active >
            <PaginationLink onClick={onClick} value={page+index} name="page">
              {page+index}
            </PaginationLink>
          </PaginationItem>
        )
      else{
        if(maxPage >= page+index)
          return(
            <PaginationItem>
              <PaginationLink onClick={onClick} value={page+index} name="page">
                {page+index}
              </PaginationLink>
            </PaginationItem>
          )
      }      
    }
  }
  return (
    <Pagination aria-label="Page navigation">
      {/* 맨처음으로 */}
      <PaginationItem disabled={page === 1}>
          <PaginationLink first onClick={onClick} value={1} name="page" />
      </PaginationItem>
      {/* 이전 */}
      <PaginationItem disabled={page === 1}>
      
          <PaginationLink previous onClick={onClick} value={page-1} name="page" />
    
      </PaginationItem>
      {showPageNum(page,-2)}
      {showPageNum(page,-1)}
      {showPageNum(page,0)}
      {showPageNum(page,1)}
      {showPageNum(page,2)}
      {/* 다음 */}
      <PaginationItem disabled={page === maxPage}>
        <PaginationLink next onClick={onClick} value={page+1} name="page" />
      </PaginationItem>
      {/* 맨마지막으로 */}
      <PaginationItem disabled={page === maxPage}>
        <PaginationLink last onClick={onClick} value={maxPage} name="page" />
      </PaginationItem>
    </Pagination>
  );
}

export default PaginationView;