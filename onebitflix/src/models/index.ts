import { Course } from "./Course"
import { Episode } from "./Episode"
import { Category } from "./Category"
import { User } from "./User"

Category.hasMany(Course, { as: 'courses' })
Course.belongsTo(Category)
  Course.hasMany(Episode, {as: 'episodes'})

Episode.belongsTo(Course)


export {
  Course,
  Category,
  Episode,
  User
}