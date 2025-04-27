const routes = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      { path: '', component: () => import('pages/HomePage.vue') },
      { path: 'Projects', component: () => import('pages/ProjectPage.vue') },
      { path: 'About', component: () => import('pages/AboutPage.vue') },
      { path: 'Contact', component: () => import('pages/ContactPage.vue') },
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
]

export default routes
