import Home from 'views/Home'
import NotFound from 'views/NotFound'
import Skills from 'views/Skills'
import About from 'views/About'
import Projects from 'views/Projects'

const paths = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/skills',
    component: Skills,
  },
  {
    path: '/about',
    component: About,
  },
  {
    path: '/projects',
    component: Projects,
  },
  {
    path: '*',
    component: NotFound,
    notExact: true,
  },
]

export default paths
