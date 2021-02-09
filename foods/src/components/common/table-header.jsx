import SortIcon from "./sort-icon";

const TableHeader = ({ columns, sortColumn, onSort }) => {
  const brokerSort = (path) => {
    if (!path) return;
    if (sortColumn.path === path) {
      sortColumn.orderBy = sortColumn.orderBy === "asc" ? "desc" : "asc";
    } else {
      sortColumn.path = path;
      sortColumn.orderBy = "asc";
    }
    onSort(sortColumn);
  };

  const getSortIcon = (path) => {
    const { path: currentPath, orderBy } = sortColumn;
    if (path !== currentPath) return null;
    return <SortIcon down={orderBy === "asc"} />;
  };
  return (
    <thead>
      <tr className="table bg-success text-center">
        {columns.map(({ path, label }) => (
          <th key={path || label} onClick={() => brokerSort(path)}>
            {label}
            {getSortIcon(path)}
          </th>
        ))}
      </tr>
    </thead>
  );
};

export default TableHeader;
