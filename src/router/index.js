import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import Home from "../views/Home.vue"

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView
    },
    {
      path: "/home",
      name: "Home",
      component: Home,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visdited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/product",
      name: "product",
      component: () => import("../views/Products.vue"),
    },
    {
      path: "/cart",
      name: "cart", 
      component: () => import("../views/cart.vue")
    },
    {
      path: "/product/:productId",
      name: "ProductView",
      component: () => import("../views/ProductView.vue")
    },
    {
      path: "/cart/checkout",
      name: "checkout",
      component: () => import("../views/CheckoutView.vue")
    },
    {
      path: "/cart/shipping", 
      name: "shipping",
      component: () => import("../views/ShippingView.vue")
    },
    {
      path: "/cart/payment",
      name: "payment", 
      component: () => import("../views/PaymentView.vue")
    },
    {
      path: "/cart/complete-order", 
      name: "complete-order", 
      component: () => import("../views/CompleteOrderView.vue")
    },
    {
      path: "/cart/complete-order/receipt", 
      name: "receipt", 
      component: () => import("../views/Receipt.vue")
    },
    {
      path: "/userProfile", 
      name: "profile", 
      component: () => import("../views/userProfile.vue")
    },
    {
      path: "/auth",
      name: "auth",
      children: [
        {
          path: "signup",
          name: "signup",
          component: () => import("../views/Signup.vue")
        },
        {
          path: "login",
          name: "login",
          component: () => import("../views/Login.vue")
        }
      ]
    },
  ],
});

export default router;
