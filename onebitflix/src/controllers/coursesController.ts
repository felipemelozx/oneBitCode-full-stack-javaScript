import { Request, Response } from "express"
import { coursesService } from "../services/courseService"


export const coursesController = {
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