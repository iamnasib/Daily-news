import React, { useEffect, useState } from "react";
import Newsitem from "./Newsitem";
import Skeleton from "./Skeleton";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

const News = (props) => {
  const [articles, setArticles] = useState([]);
  const [page, setPage] = useState(1);
  // document.title = `Daily News - ${props.category}`;
  const [totalResults, setTotalResults] = useState(0);

  const getData = async (page) => {
    let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&
    category=${props.category}&apiKey=${props.apiKey}&page=${page}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
  };
  useEffect(() => {
    const fetchData = async () => {
      await getData();
    };
    fetchData();
  }, []); // eslint-disable-line
  //  The empty dependency array ensures this runs only once after the initial render

  const fetchMoreData = async () => {
    setPage(page + 1);
    setPage((prevPage) => {
      const newPage = prevPage + 1;
      getData(newPage);
    });
  };

  // handlePaginationClick = async (nxt) => {
  //   if (nxt) {
  //     this.setState(
  //       (prevState) => ({ page: prevState.page + 1 }),
  //       async () => {
  //         await this.getData();
  //       }
  //     );
  //   } else {
  //     this.setState(
  //       (prevState) => ({ page: prevState.page - 1 }),
  //       async () => {
  //         await this.getData();
  //       }
  //     );
  //   }
  // };

  return (
    <div
      className="max-w-screen-xl 
    mx-auto p-4">
      <InfiniteScroll
        dataLength={articles.length}
        next={fetchMoreData}
        hasMore={articles.length < totalResults}
        loader={<Skeleton />}>
        <div
          className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
    mx-auto p-4">
          {articles.map((element) => {
            if (
              element === null ||
              element.description === null ||
              element.urlToImage === null
            ) {
              return null;
            } else {
              return (
                <div>
                  <Newsitem
                    title={element.title.slice(0, 40)}
                    description={
                      element.description && element.description !== ""
                        ? element.description.slice(0, 60)
                        : ""
                    }
                    imageUrl={element.urlToImage}
                    newUrl={element.url}
                  />
                </div>
              );
            }
          })}
        </div>
      </InfiniteScroll>
      {/* <div className="flex flex-row justify-between p-4 max-w-screen-xl mx-auto">
          <button
            type="button"
            disabled={page === 1}
            onClick={() => {
              this.handlePaginationClick(false);
            }}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 
      border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
      dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Prev
          </button>
          <button
            type="button"
            disabled={
              page + 1 > Math.ceil(totalResults / 20)
            }
            onClick={() => {
              this.handlePaginationClick(true);
            }}
            className="py-2.5 px-5 me-2 mb-2 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border 
      border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 
      dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700">
            Next
          </button>
        </div> */}
    </div>
  );
};
News.defaultProps = {
  country: "us",
  category: "general",
};
News.propTypes = {
  country: PropTypes.string,
  category: PropTypes.string,
};
export default News;
