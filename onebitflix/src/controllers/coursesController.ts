import { Request, Response } from "express"
import { coursesService } from "../services/courseService"


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