import Vue from "vue";
import router from "vue-router";

Vue.use(router);

export default new router({
  routes: [
    {
      path: "/",
      component: () => import("@/views/HomePage"),
      children: [
        {
          path: "",
          name: "home",
          component: () => import("@/views/HomeGlobal"),
        },
        {
          path: "my-feed",
          name: "home-my-feed",
          component: () => import("@/views/HomeMyFeed"),
        },
        {
          path: "tag/:tag",
          name: "home-tag",
          component: () => import("@/views/HomeTag"),
        },
      ],
    },
    {
      name: "login",
      path: "/login",
      component: () => import("@/views/Login"),
    },
    /*
    {
      name: "register",
      path: "/register",
      component: () => import("@/views/Register")
    },
    {
      name: "settings",
      path: "/settings",
      component: () => import("@/views/Settings")
    },
    {
      path: "/@:username",
      component: () => import("@/views/Profile"),
      children: [
        {
          path: "",
          name: "profile",
          component: () => import("@/views/ProfileArticles")
        },
        {
          name: "profile-favorites",
          path: "favorites",
          component: () => import("@/views/ProfileFavorited")
        }
      ]
    },
    {
      name: "article",
      path: "/articles/:slug",
      component: () => import("@/views/Article"),
      props: true
    },
    {
      name: "article-edit",
      path: "/editor/:slug?",
      props: true,
      component: () => import("@/views/ArticleEdit")
    } */
  ],
});
