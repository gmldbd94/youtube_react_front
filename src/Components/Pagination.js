import React from 'react';
import { Pagination, PaginationItem, PaginationLink } from 'reactstrap';
import { Link } from 'react-router-dom';


const PaginationView = ({page, maxPage, sort, category, keyword}) => {
  const createPagePath = (page) => {
    return `?sort=${sort}&category=${category}&keyword=${keyword}&page=${page}`
  }
  
  const showPageNum = (page, index) => {
    if(page+index <= maxPage && page+index > 0){
      if(index === 0)
        return(
          <PaginationItem active>
            <Link to={createPagePath(page)}>
              <PaginationLink>
                {page+index}
              </PaginationLink>
            </Link>
          </PaginationItem>
        )
      else{
        if(maxPage > page+index)
          return(
            <PaginationItem>
              <Link to={createPagePath(page+index)}>
                <PaginationLink>
                  {page+index}
                </PaginationLink>
              </Link>
            </PaginationItem>
          )
      }      
    }
  }
  return (
    <Pagination aria-label="Page navigation">
      {/* 맨처음으로 */}
      <PaginationItem disabled={page === 1}>
        <Link disabled={page === 1} to={createPagePath(0)}>
          <PaginationLink first />
        </Link>
      </PaginationItem>
      {/* 이전 */}
      <PaginationItem disabled={page === 1}>
      
          <PaginationLink previous to={createPagePath(page-1)} />
    
      </PaginationItem>
      {showPageNum(page,-2)}
      {showPageNum(page,-1)}
      {showPageNum(page,0)}
      {showPageNum(page,1)}
      {showPageNum(page,2)}
      {/* 다음 */}
      <PaginationItem disabled={page === maxPage}>
        <PaginationLink next href="#" />
      </PaginationItem>
      {/* 맨마지막으로 */}
      <PaginationItem disabled={page === maxPage}>
        <PaginationLink last href="/page/maxPage" />
      </PaginationItem>
    </Pagination>
  );
}

export default PaginationView;