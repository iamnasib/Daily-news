import React, { Component } from "react";
import Newsitem from "./Newsitem";
import Skeleton from "./Skeleton";
import PropTypes from "prop-types";
import InfiniteScroll from "react-infinite-scroll-component";

export default class News extends Component {
  static defaultProps = {
    country: "us",
    category: "general",
  };
  static propTypes = {
    country: PropTypes.string,
    category: PropTypes.string,
  };
  constructor(props) {
    super(props);
    this.state = {
      articles: [],
      page: 1,
    };
    document.title = `Daily News - ${this.props.category}`;
  }

  async getData() {
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&
    category=${this.props.category}&apiKey=6572429788234cd397d42d185d536267&page=${this.state.page}&pageSize=15`;
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
    });
  }

  async componentDidMount() {
    await this.getData();
  }
  fetchMoreData = async () => {
    this.setState(
      (prevState) => ({ page: prevState.page + 1 }),
      async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&
        category=${this.props.category}&apiKey=6572429788234cd397d42d185d536267&page=${this.state.page}&pageSize=15`;
        let data = await fetch(url);
        let parsedData = await data.json();
        this.setState({
          articles: this.state.articles.concat(parsedData.articles),
          totalResults: parsedData.totalResults,
        });
      }
    );
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

  render() {
    return (
      <div
        className="max-w-screen-xl 
    mx-auto p-4">
        <InfiniteScroll
          dataLength={this.state.articles.length}
          next={this.fetchMoreData}
          hasMore={this.state.articles.length !== this.state.totalResults}
          loader={<Skeleton />}>
          <div
            className="max-w-screen-xl grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 
    mx-auto p-4">
            {this.state.articles.map((element) => {
              if (
                element === null ||
                element.description === null ||
                element.urlToImage === null
              ) {
                return null;
              } else {
                return (
                  <div key={element.url}>
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
            disabled={this.state.page === 1}
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
              this.state.page + 1 > Math.ceil(this.state.totalResults / 20)
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
  }
}
