import Joi from "joi-browser";
import Form from "../common/form";
import { getCategories } from "../services/fakeCategories";
import { getFood, saveFood } from "../services/fakeFoods";

const unit_enums = ["Kg", "Dona", "Litr"];

export default class FoodForm extends Form {
  state = {
    data: {
      _id: "",
      title: "",
      categoryId: "",
      price: "",
      amount: "",
      unit: "",
    },
    errors: {},
    categories: [],
    title: "Food Form",
    status: false,
  };

  schema = {
    _id: Joi.string(),
    title: Joi.string().min(5).max(50).required(),
    price: Joi.number().min(0).required(),
    amount: Joi.number().min(0).required(),
    categoryId: Joi.string().required(),
    unit: Joi.string().required(),
  };

  doSubmit = () => {
    const food = saveFood(this.state.data);
    if (food) return this.props.history.replace("/foods");
    else console.log("Enexpected Error");
  };

  componentDidMount() {
    const categories = getCategories();
    this.setState({
      categories,
    });
    const { foodId = 123 } = this.props.match.params;
    if (foodId === "new")
      return this.setState({
        status: true,
        data: { ...this.state.data, _id: "new" },
      });

    const food = getFood(foodId);
    if (!food) return this.props.history.replace("/not-found");
    this.setState({
      data: this.getFormatedValues(food),
    });
  }

  getFormatedValues = (food) => {
    return {
      _id: food._id,
      title: food.title,
      categoryId: food.category._id,
      price: food.price,
      amount: food.amount,
      unit: food.unit,
    };
  };

  render() {
    const { foodId = 123 } = this.props.match.params;
    const { categories, status } = this.state;

    return (
      <div className="col-md-6 offset-3">
        <this.renderTitle /> #{foodId}
        <form>
          <this.renderInput name="title" label="Title" />
          <this.renderSelect
            name="categoryId"
            label="Category"
            options={categories}
          />
          <this.renderInput name="price" label="Price" />
          <this.renderInput name="amount" label="Amount" />
          <this.renderSelect name="unit" label="Unit" />
          <this.renderSubmit label={status ? "Add" : "Save"} />
        </form>
      </div>
    );
  }
}
