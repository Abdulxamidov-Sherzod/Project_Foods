import React, { Component } from "react";
import { getFoods } from "./services/fakeFoods";
import { Pagination, Listgroup } from "./common";
import { paginate } from "./utils/paginate";
import { getCategories } from "./services/fakeCategories";
import FoodsTable from "./foods-table";
import _ from "lodash";
import { Link } from "react-router-dom";
import Form from "./common/form";
import { FaSearch } from "react-icons/fa";

class Foods extends Form {
  state = {
    foods: getFoods(),
    categories: getCategories(),
    pageSize: 4,
    currentPage: 1,
    selectCategory: null,
    searchQuery: "",
    sortColumn: { path: "title", orderBy: "asc" },
  };

  handleDelete = (deleteFoodID) => {
    let { foods } = this.state;
    foods = foods.filter(({ _id }) => _id !== deleteFoodID);
    this.setState({ foods });
  };

  handleToggleLike = (toggleItemID) => {
    const { foods } = this.state;
    const food = foods.find((food) => food._id === toggleItemID);
    food.liked = food.liked ? false : true;
    this.setState({ foods });
  };
  handlePageChange = (page) => {
    this.setState({ currentPage: page });
  };
  handleSelectCategory = (selectCategory) => {
    this.setState({
      selectCategory,
      searchQuery: "",
      currentPage: 1,
    });
  };

  handleSearch = (query) => {
    this.setState({
      searchQuery: query,
      selectCategory: null,
      currentPage: 1,
    });
  };

  handleSortColumn = (sortColumn) => {
    this.setState({ sortColumn });
  };

  async componentDidMount() {
    const categories = await getCategories();
    this.setState({
      categories: [{ name: "Barchasi", numbers: "10" }, ...categories],
    });
  }
  getPageData = () => {
    const {
      pageSize,
      currentPage,
      sortColumn,
      selectCategory,
      searchQuery,
      foods,
    } = this.state;

    let filtered = foods;
    if (searchQuery)
      filtered = foods.filter((food) =>
        food.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    else if (selectCategory && selectCategory._id)
      filtered = foods.filter(
        (food) => food.category._id === selectCategory._id
      );
    const sorted = _.orderBy(
      filtered,
      sortColumn.columnName,
      sortColumn.orderBy
    );

    let { length: count } = foods;
    const paginated = paginate(sorted, currentPage, pageSize);
    count = filtered.length;
    return { count, data: paginated };
  };

  render() {
    const {
      currentPage,
      pageSize,
      categories,
      selectCategory,
      searchQuery,
      sortColumn,
    } = this.state;

    const { data, count } = this.getPageData();
    return count === 0 ? (
      "Bizda mahsulot yo'q !!!"
    ) : (
      <main className="container">
        <div className="row">
          <div className="col-3 mt-4">
            <Listgroup
              items={categories}
              onSelectItem={this.handleSelectCategory}
              selectedItem={selectCategory}
              count={count}
            />
          </div>
          <div className="col mt-4">
            <div className="row mb-3">
              <div className="col-md-2">
                <Link to="/foods/new" className="btn btn-primary">
                  Add Food
                </Link>
              </div>
              <div className="col-md-10">
                <div className="input-group">
                  <input
                    className="form-control search-btn"
                    placeholder="Search..."
                    value={searchQuery}
                    onChange={(e) => this.handleSearch(e.currentTarget.value)}
                  />
                </div>
              </div>
            </div>
            <h5>Bizda {count} mahsulot bor!</h5>
            <FoodsTable
              items={data}
              onToggleLike={this.handleToggleLike}
              onDelete={this.handleDelete}
              onSort={this.handleSortColumn}
              sortColumn={sortColumn}
            />
            <Pagination
              countItems={count}
              currentPage={currentPage}
              pageSize={pageSize}
              onPageChange={this.handlePageChange}
            />
          </div>
        </div>
      </main>
    );
  }
}

export default Foods;
