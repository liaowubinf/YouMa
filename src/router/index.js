import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router)
const Login = r => require.ensure([], () => r(require('./../components/Login')), 'login'); // 登陆
const Register = r => require.ensure([], () => r(require('./../components/Register')), 'register'); // 注册
const Home = r => require.ensure([], () => r(require('./../components/Home')), 'home'); // 主页
const Categories = r => require.ensure([], () => r(require('./../components/Categories')), 'categories'); // 所有商品分类
const CategoryProduct = r => require.ensure([], () => r(require('./../components/CategoryProduct')), 'categoryProduct'); //分类商品
const Search = r => require.ensure([], () => r(require('./../components/Search')), 'search'); //搜索结果
const ProductDetail = r => require.ensure([], () => r(require('./../components/ProductDetail')), 'productDetail'); //商品详情
const Confirm = r => require.ensure([], () => r(require('./../components/Confirm')), 'confirm'); //确认订单
const Payment = r => require.ensure([], () => r(require('./../components/Payment')), 'payment'); //支付页面


export default new Router({
    routes: [

        {
            path: '',
            redirect: '/login'
        },
        {
            path: '/login',
            name: 'Login',
            meta: {
                title: '用户登陆'
            },
            component: Login
        },
        {
            path: '/register',
            name: 'Register',
            meta: {
                title: '新用户注册'
            },
            component: Register
        },
        {
            path: '/home',
            name: 'Home',
            meta: {
                title: '优码商城'
            },
            component: Home
        },
        {
            path: '/categories',
            name: 'Categories',
            meta: {
                title: '商品分类'
            },
            component: Categories
        },
        {
            path: '/categoryProduct',
            name: 'CategoryProduct',
            meta: {
                title: '分类商品'
            },
            component: CategoryProduct
        },
        {
            path: '/search',
            name: 'Search',
            meta: {
                title: '搜搜结果'
            },
            component: Search
        },
        {
            path: '/productDetail',
            name: 'ProductDetail',
            meta: {
                title: '商品详情'
            },
            component: ProductDetail
        },
        {
            path: '/confirm',
            name: 'Confirm',
            meta: {
                title: '确认订单'
            },
            component: Confirm
        },
        {
            path: '/Payment',
            name: 'Payment',
            meta: {
                title: '订单支付'
            },
            component: Payment
        },
    ]
})