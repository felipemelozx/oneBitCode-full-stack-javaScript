import express from 'express'
import { categoriesController } from './controllers/categoriesController'
import { coursesController } from './controllers/coursesController'
import { episodesController } from './controllers/episodesController'
import { authController } from './controllers/authController'
import ensureAuth, { ensureAuthViaQuery } from './middleware/auth'

const router = express.Router()

router.post('/auth/register', authController.register)

router.get('/categories', ensureAuth, categoriesController.index)
router.get('/categories/:id', ensureAuth, categoriesController.show)

router.post('/auth/register', authController.register)
router.post('/auth/login', authController.login)

router.get('/courses/newest', ensureAuth, coursesController.newest)
router.get('/courses/featured', coursesController.featured)
router.get('/courses/search', ensureAuth, coursesController.search)
router.get('/courses/:id', ensureAuth, coursesController.show)


router.get('/episodes/stream',   ensureAuthViaQuery, episodesController.stream)

export { router }