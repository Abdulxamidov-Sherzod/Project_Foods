import { Link } from "react-router-dom";
import Like from "./common/like.jsx";
import Table from "./table";


const FoodsTable = ({
  items = [],
  onToggleLike,
  onDelete,
  sortColumn,
  onSort,
}) => {
  const columns = [
    {
      label: "Title",
      path: "title",
      content: (food) => <Link to={`/foods/${food._id}`}>{food.title}</Link>,
    },
    { label: "Category", path: "category.name" },
    { label: "Price", path: "price" },
    { label: "Amount", path: "amount" },
    { label: "Unit", path: "unit" },
    {
      label: "Action",
      content: ({ liked, _id }) => (
        <>
          <Like liked={liked} onToggleLike={() => onToggleLike(_id)} />
          <button
            className="btn btn-md btn-danger"
            onClick={() => onDelete(_id)}
          >
            Delete
          </button>
        </>
      ),
    },
  ];
  return (
    <Table
      columns={columns}
      sortColumn={sortColumn}
      onSort={onSort}
      data={items}
    />
  );
};

export default FoodsTable;
