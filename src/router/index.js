import Vue from 'vue'
import Router from 'vue-router'

import elementUI from '@/components/elementUI/elementUI'
import vantUI from '@/components/vantUI/vantUI'
import mintUI from '@/components/mintUI/mintUI'
import mintToast from '@/components/mintUI/mintToast'
import mintSwipe from '@/components/mintUI/mintSwipe'
import mintLazy from '@/components/mintUI/mintLazy'
import betterScrollUI from '@/components/betterScrollUI/betterScrollUI'


import vantToast from '@/components/vantUI/vantToast'
import vantSwipe from '@/components/vantUI/vantSwipe'
import vantSteps from '@/components/vantUI/vantSteps'
import vantArea from '@/components/vantUI/vantArea'
import vantImage from '@/components/vantUI/vantImage'
import vantLayout from '@/components/vantUI/vantLayout'
import vantOverlay from '@/components/vantUI/vantOverlay'
import vantAddressEdit from '@/components/vantUI/vantAddressEdit'
import vantPullRefresh from '@/components/vantUI/vantPullRefresh'
import vantTreeSelect from '@/components/vantUI/vantTreeSelect'
import vantAddressList from '@/components/vantUI/vantAddressList'
import vantCard from '@/components/vantUI/vantCard'
import vantContact from '@/components/vantUI/vantContact'
import vantCoupon from '@/components/vantUI/vantCoupon'
import vantSku from '@/components/vantUI/vantSku'
import vantSubmitBar from '@/components/vantUI/vantSubmitBar'
import vantGoodsAction from '@/components/vantUI/vantGoodsAction'


import elementImage from '@/components/elementUI/elementImage'
import elementSwipe from '@/components/elementUI/elementSwipe'
import elementTimeline from '@/components/elementUI/elementTimeline'
import elementForm from '@/components/elementUI/elementForm'
import elementTable from '@/components/elementUI/elementTable'
import elementLayout from '@/components/elementUI/elementLayout'
import elementUpload from '@/components/elementUI/elementUpload'
import elementTransfer from '@/components/elementUI/elementTransfer'
import elementTree from '@/components/elementUI/elementTree'
import elementBacktop from '@/components/elementUI/elementBacktop'
import elementInfiniteScroll from '@/components/elementUI/elementInfiniteScroll'
import elementCollapse from '@/components/elementUI/elementCollapse'
import elementBreadcrumb from '@/components/elementUI/elementBreadcrumb'
import elementInDrawer from '@/components/elementUI/elementInDrawer'
import elementDateTimePicker from '@/components/elementUI/elementDateTimePicker'

import betterScrollUIDemo0 from '@/components/betterScrollUI/betterScrollUIDemo0'
import betterScrollUIDemo1 from '@/components/betterScrollUI/betterScrollUIDemo1'
import betterScrollUIDemo2 from '@/components/betterScrollUI/betterScrollUIDemo2'
import betterScrollUIGoodsList from '@/components/betterScrollUIGoodsList/betterScrollUIGoodsList'
import betterScrollUIGoodsList1 from '@/components/betterScrollUIGoodsList/betterScrollUIGoodsList1'
import betterScrollUIGoodsList2 from '@/components/betterScrollUIGoodsList/betterScrollUIGoodsList2'
import betterScrollUIGoodsList3 from '@/components/betterScrollUIGoodsList/betterScrollUIGoodsList3'

import admin from '@/components/admin'
import login from '@/components/login'
Vue.use(Router)

export default new Router({
  linkActiveClass: 'lac',
  linkExactActiveClass: 'leac',
  routes: [
    {
      path: '/',
      name: 'login',
      component: login,
    },
    {
      path: '/admin',
      name: 'admin',
      component: admin,
      redirect: '/elementUI',
      children: [
        {
          path: '/elementUI',
          name: 'elementUI',
          component: elementUI,
          children: [
            {
              path: 'elementSwipe',
              name: 'elementSwipe',
              component: elementSwipe,
            },
            {
              path: 'elementTimeline',
              name: 'elementTimeline',
              component: elementTimeline,
            },
            {
              path: 'elementForm',
              name: 'elementForm',
              component: elementForm,
            },
            {
              path: 'elementTable',
              name: 'elementTable',
              component: elementTable,
            },
            {
              path: 'elementImage',
              name: 'elementImage',
              component: elementImage,
            },
            {
              path: 'elementLayout',
              name: 'elementLayout',
              component: elementLayout,
            },
            {
              path: 'elementDateTimePicker',
              name: 'elementDateTimePicker',
              component: elementDateTimePicker,
            },
            {
              path: 'elementUpload',
              name: 'elementUpload',
              component: elementUpload,
            },
            {
              path: 'elementTransfer',
              name: 'elementTransfer',
              component: elementTransfer,
            },
            {
              path: 'elementTree',
              name: 'elementTree',
              component: elementTree,
            },
            {
              path: 'elementBreadcrumb',
              name: 'elementBreadcrumb',
              component: elementBreadcrumb,
            },
            {
              path: 'elementCollapse',
              name: 'elementCollapse',
              component: elementCollapse,
            },
            {
              path: 'elementBacktop',
              name: 'elementBacktop',
              component: elementBacktop,
            },
            {
              path: 'elementInfiniteScroll',
              name: 'elementInfiniteScroll',
              component: elementInfiniteScroll,
            },
            {
              path: 'elementInDrawer',
              name: 'elementInDrawer',
              component: elementInDrawer,
            },
          ]
        },
        {
          path: '/vantUI',
          name: 'vantUI',
          component: vantUI,
          children: [
            {
              path: 'vantToast',
              name: 'vantToast',
              component: vantToast,
            },
            {
              path: 'vantSwipe',
              name: 'vantSwipe',
              component: vantSwipe,
            },
            {
              path: 'vantSteps',
              name: 'vantSteps',
              component: vantSteps,
            },
            {
              path: 'vantArea',
              name: 'vantArea',
              component: vantArea,
            },
            {
              path: 'vantImage',
              name: 'vantImage',
              component: vantImage,
            },
            {
              path: 'vantLayout',
              name: 'vantLayout',
              component: vantLayout,
            },
            {
              path: 'vantOverlay',
              name: 'vantOverlay',
              component: vantOverlay,
            },
            {
              path: 'vantPullRefresh',
              name: 'vantPullRefresh',
              component: vantPullRefresh,
            },
            {
              path: 'vantTreeSelect',
              name: 'vantTreeSelect',
              component: vantTreeSelect,
            },
            {
              path: 'vantAddressEdit',
              name: 'vantAddressEdit',
              component: vantAddressEdit,
            },
            {
              path: 'vantAddressList',
              name: 'vantAddressList',
              component: vantAddressList,
            },
            {
              path: 'vantCard',
              name: 'vantCard',
              component: vantCard,
            },
            {
              path: 'vantContact',
              name: 'vantContact',
              component: vantContact,
            },
            {
              path: 'vantCoupon',
              name: 'vantCoupon',
              component: vantCoupon,
            },
            {
              path: 'vantGoodsAction',
              name: 'vantGoodsAction',
              component: vantGoodsAction,
            },
            {
              path: 'vantSubmitBar',
              name: 'vantSubmitBar',
              component: vantSubmitBar,
            },
            {
              path: 'vantSku',
              name: 'vantSku',
              component: vantSku,
            },

          ]
        },
        {
          path: '/mintUI',
          name: 'mintUI',
          component: mintUI,
          children: [
            {
              path: 'mintToast',
              name: 'mintToast',
              component: mintToast,
            },
            {
              path: 'mintSwipe',
              name: 'mintSwipe',
              component: mintSwipe,
            },
            {
              path: 'mintLazy',
              name: 'mintLazy',
              component: mintLazy,
            },
          ]
        },
       
        {
          path: '/betterScrollUI',
          name: 'betterScrollUI',
          component: betterScrollUI,
          children: [
            {
              path: 'betterScrollUIDemo0',
              name: 'betterScrollUIDemo0',
              component: betterScrollUIDemo0,
            },
            {
              path: 'betterScrollUIDemo1',
              name: 'betterScrollUIDemo1',
              component: betterScrollUIDemo1,
            },
            {
              path: 'betterScrollUIDemo2',
              name: 'betterScrollUIDemo2',
              component: betterScrollUIDemo2,
            },
          ]
        },
        {
          path: '/betterScrollUIGoodsList',
          name: 'betterScrollUIGoodsList',
          component: betterScrollUIGoodsList,
          redirect:'/betterScrollUIGoodsList/betterScrollUIGoodsList1',
          children:[
            {
              path: 'betterScrollUIGoodsList1',
              name: 'betterScrollUIGoodsList1',
              component: betterScrollUIGoodsList1, 
            },
            {
              path: 'betterScrollUIGoodsList2',
              name: 'betterScrollUIGoodsList2',
              component: betterScrollUIGoodsList2, 
            },
            {
              path: 'betterScrollUIGoodsList3',
              name: 'betterScrollUIGoodsList3',
              component: betterScrollUIGoodsList3, 
            },
          ]
        },
      ]
    }

  ]
})
