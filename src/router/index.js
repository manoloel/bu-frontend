import Vue from 'vue'
import VueRouter from 'vue-router'
import LegalEntityList from '../components/legalentity/list.vue'
import BusinessUnitList from '../components/business_unit/list'
import BusinessUnitCreate from '../components/business_unit/create'
import BusinessUnitEdit from '../components/business_unit/edit'

Vue.use(VueRouter)

  const routes = [
  {
    path: '/legal_entity',
    name: 'Юридические лица',
    component: LegalEntityList,
  },
  {
    path: '/business_unit',
    name: 'Бизнес-юниты',
    component: BusinessUnitList,
  },
  {
    path: '/business_unit/create',
    name: 'Бизнес-юниты',
    component: BusinessUnitCreate
  },
    {
      path: "business_unit/:id",
      name: "buEdit",
      component: BusinessUnitEdit
    }
]

const router = new VueRouter({
  routes
})

export default router
