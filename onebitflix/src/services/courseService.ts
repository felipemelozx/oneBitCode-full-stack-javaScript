import { Course } from "../models"

export const coursesService = {
  findByIdWithEpisodes: async (id: string) => {
    const coursesWithEpisodes = await Course.findByPk(id, {
      attributes: ['id', 'name', 'synopsis', ['thumbnail_url', 'thumbnailUrl']],
      include: {
        association: 'episodes',
        attributes: [
          'id',
          'name',
          'synopsis',
          'order',
          ['video_url', 'videUrl'],
          ['seconds_long', 'secondsLong']
        ],
        order: [['order', 'ASC']],
        separate: true
      }
    })
    return coursesWithEpisodes
  },

  getRandomFeaturedCourses: async () => {
    const featuresCourses = await Course.findAll({
      attributes: [
        'id',
        'name',
        'synopsis',
        ['thumbnail_url', 'thumbnailUrl']
      ],
      where: {
        featured: true
      }
    })

    const randomFeaturedCourses = featuresCourses.sort(()=> 0.5 - Math.random())

    return randomFeaturedCourses.slice(0, 3)
  }
}