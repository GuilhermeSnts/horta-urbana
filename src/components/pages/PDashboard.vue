<template lang="pug">
  t-dashboard( :backgroundUrl="backgroundUrl", :pagesMenu="pages")

</template>

<script>
import TDashboard from "@/components/templates/TDashboard.vue";
import backgroundUrl from "@/assets/bg1.jpg";

export default {
  name: "PHome",

  data: () => ({
    backgroundUrl,
    pages: [
      {
        label: "Gardens",
        path: "/gardens",
        background:
          "https://images.unsplash.com/photo-1569677229133-730f610ae381?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      },
      {
        label: "Plants",
        path: "/plants",
        background:
          "https://images.unsplash.com/photo-1488353816557-87cd574cea04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      },
      {
        label: "Friends",
        path: "/friends",
        background:
          "https://images.unsplash.com/photo-1500027014421-46ccc843776a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=334&q=80"
      }
    ]
  }),

  components: {
    TDashboard
  }
};
</script>
