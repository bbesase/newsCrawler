import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'landing-page',
      component: require('@/components/LandingPage').default
    },
    {
      path: '*',
      redirect: '/'
    },
    {
      path: '/subscribe',
      name: 'subscribe-page',
      component: require('@/components/SubscribePage/Subscribe').default
    },
    {
      path: '/subscribe',
      name: 'source-list',
      component: require('@/components/SubscribePage/Sources/SourceList').default
    },
    {
      path: '/subscribe',
      name: 'source-card',
      component: require('@/components/SubscribePage/Sources/SourceCard').default
    }
  ]
})
