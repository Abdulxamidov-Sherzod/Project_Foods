import _ from "lodash";

export const getCategoriesWithName = (items = [], categories = [], item) => {
  const listNameCategories = [...categories];
  for (let i = 0; i < categories.length; i++) {
    for (let j = 0; j < items.length; j++) {
      if (_.get(items[j], "category.name") !== _.get(categories[i], "name")) {
        categories.name = "";
      }
    }
  }
  return listNameCategories;
};
