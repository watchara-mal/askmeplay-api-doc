import Vue from 'vue'
import VueRouter from 'vue-router'
import Main from '../layouts/Main.vue'

// Home
import Overview from '../views/home/Overview.vue'

// Common
import JoinGame from '../views/common/JoinGame.vue'
import VerifySession from '../views/common/VerifySession.vue'
import KickMember from '../views/common/KickMember.vue'
import GetGameList from '../views/common/GetGameList.vue'
import GetBetDetailURL from '../views/common/GetBetDetailURL.vue'
import GetBetDetailByBetID from '../views/common/GetBetDetailByBetID.vue'
import GetBetDetailByTime from '../views/common/GetBetDetailByTime.vue'

// Transfer
import ExchangeTransfer from '../views/transfer/ExchangeTransfer.vue'
import GetMemberInfo from '../views/transfer/GetMemberInfo.vue'
import VerifyTransfer from '../views/transfer/VerifyTransfer.vue'

// Seamless 
import Bet from '../views/seamless/Bet.vue'
import CancelBet from '../views/seamless/CancelBet.vue'
import Payout from '../views/seamless/Payout.vue'
import ResolveBet from '../views/seamless/ResolveBet.vue'
import VerifyBet from '../views/seamless/VerifyBet.vue'

// Detail
import ErrorCode from '../views/detail/ErrorCode.vue'
import Parameter from '../views/detail/Parameter.vue'
import Types from '../views/detail/Types.vue'

Vue.use(VueRouter)

const routes = [
    {
        path: '/',
        name: '',
        component: Main,
        redirect: '/overview',
        children: [
            // Home
            {
                path: 'overview',
                name: 'overview',
                pathText: '',
                component: Overview
            },

            // Common
            {
                path: 'joingame',
                name: 'joinGame',
                component: JoinGame
            },
            {
                path: 'verifysession',
                name: 'verifySession',
                component: VerifySession
            },
            {
                path: 'kickmember',
                name: 'kickMember',
                component: KickMember
            },
            {
                path: 'getgamelist',
                name: 'getGameList',
                component: GetGameList
            },
            {
                path: 'getbetdetailurl',
                name: 'getBetDetailURL',
                component: GetBetDetailURL
            },
            {
                path: 'getbetdetailbybetid',
                name: 'getBetDetailByBetID',
                component: GetBetDetailByBetID
            },
            {
                path: 'getbetdetailbytime',
                name: 'getBetDetailByTime',
                component: GetBetDetailByTime
            },

            // Transfer
            {
                path: 'exchangetransfer',
                name: 'exchangeTransfer',
                component: ExchangeTransfer
            },
            {
                path: 'getmemberinfo',
                name: 'getMemberInfo',
                component: GetMemberInfo
            },
            {
                path: 'verifytransfer',
                name: 'verifyTransfer',
                component: VerifyTransfer
            },

            // Seamless
            {
                path: 'bet',
                name: 'bet',
                component: Bet
            },
            {
                path: 'cancelbet',
                name: 'cancelBet',
                component: CancelBet
            },
            {
                path: 'payout',
                name: 'payout',
                component: Payout
            },
            {
                path: 'resolvebet',
                name: 'resolveBet',
                component: ResolveBet
            },
            {
                path: 'verifybet',
                name: 'verifyBet',
                component: VerifyBet
            },

            // Detail
            {
                path: 'errorcode',
                name: 'errorCode',
                component: ErrorCode
            },
            {
                path: 'parameter',
                name: 'parameter',
                component: Parameter
            },
            {
                path: 'types',
                name: 'types',
                component: Types
            },

        ]
    }
  ]
  
  const router = new VueRouter({
    mode: 'history',
    base: process.env.BASE_URL,
    routes
  })
  
  export default router