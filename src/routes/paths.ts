import Home from 'views/Home'
import NotFound from 'views/NotFound'
import Skills from 'views/Skills'

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
    path: '*',
    component: NotFound,
    notExact: true,
  },
]

export default paths
