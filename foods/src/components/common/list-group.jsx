import categories from "../services/fakeCategories.js";
import { getCategoriesWithName } from "../utils/list.js";

const Listgroup = ({
  items,
  onSelectItem,
  selectedItem,
  count,
  idKey = "_id",
  textName = "name",
}) => {
  return (
    <ul className="list-group text-center">
      <span className="badge badge-info p-2 form-control mb-2">Categories</span>

      {items.map((item) => (
        <li
          key={item?.[idKey] || item?.[textName]}
          className={
            "list-group-item " +
            (selectedItem?.[idKey] === item?.[idKey] && " active")
          }
          onClick={() => onSelectItem(item)}
        >
          {item[textName]}
        </li>
      ))}
    </ul>
  );
};
export default Listgroup;
