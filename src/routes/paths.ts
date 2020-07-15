import Home from 'views/Home'
import NotFound from 'views/NotFound'

const paths = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '*',
    component: NotFound,
    notExact: true,
  },
]

export default paths
