import { Request, Response } from "express"
import { coursesService } from "../services/courseService"
import { getPaginationParams } from "../helpers/getPaginationParams"


export const coursesController = {
  featured: async (req: Request, res: Response) => {
    try {
      const featuresCourses = await coursesService.getRandomFeaturedCourses()
      return res.json(featuresCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  newest: async (req: Request, res: Response) => {
    try {
      const NewestCourses = await coursesService.getTopTenNewest()
      return res.json(NewestCourses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },

  search: async (req: Request, res: Response) => {
    const { name, } = req.query
    const [page, perPage] = getPaginationParams(req.query)
    try {
      if (typeof name !== 'string' ) throw new Error('name param must beof type string')  
      const courses = await coursesService.findByName(name, page, perPage)
      return res.json(courses)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  },
  show: async (req: Request, res: Response) => {
    const { id } = req.params

    try {
      const course = await coursesService.findByIdWithEpisodes(id)
      return res.json(course)
    } catch (err) {
      if (err instanceof Error) {
        return res.status(400).json({ message: err.message })
      }
    }
  }
}