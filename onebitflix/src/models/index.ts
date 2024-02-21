import { Course } from "./Course"
import { Category } from "./category"

Category.hasMany(Course)

Course.belongsTo(Category)

export {
  Course,
  Category
}