import React, { Component } from "react";
import { getFoods } from "./services/fakeFoods";
import { Pagination, Listgroup } from "./common";
import { paginate } from "./utils/paginate";
import { getCategories } from "./services/fakeCategories";
import FoodsTable from "./foods-table";
import _ from "lodash";

class Foods extends Component {
  state = {
    foods: getFoods(),
    categories: getCategories(),
    pageSize: 3,
    currentPage: 1,
    selectCategory: [],
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
    this.setState({ selectCategory: selectCategory, currentPage: 1 });
  };

  handleSortColumn = (sortColumn) => {
    this.setState({ sortColumn });
  };

  componentDidMount() {
    const categories = getCategories();
    this.setState({
      categories: [{ name: "Barchasi", numbers: "10" }, ...categories],
    });
  }

  getPadgeData = () => {
    const {
      foods,
      currentPage,
      pageSize,
      selectCategory,
      sortColumn,
    } = this.state;
    let { length: count } = foods;
    const filtered = selectCategory?._id
      ? foods.filter((food) => food.category._id === selectCategory._id)
      : foods;

    const sorted = _.orderBy(filtered, [sortColumn.path], [sortColumn.orderBy]);
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
      sortColumn,
    } = this.state;

    const { data, count } = this.getPadgeData();
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
