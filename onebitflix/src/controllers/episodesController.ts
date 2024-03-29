import { Request, Response } from "express";
import { episodeService } from "../services/episodeService";


export const episodesController = {
  strem: async (req: Request, res: Response) => {
    const { videoUrl } = req.query

    try {
      if (typeof videoUrl !== 'string') throw new Error('videoUrl param must be of type string')
      const range = req.headers.range

      episodeService.streamEpisodeToResponse(res, videoUrl, range)
    } catch (error) {
      console.log(error)
    }
  }
}