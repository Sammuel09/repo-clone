<template>
  <div class="home">
    <Header />
    <Nav />
    <div class="main">
      <Sidebar />
      <div class="repo">Welcome to Repo Clone</div>
    </div>

    <HelloWorld msg="Welcome to Repo Clone" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";

export default {
  name: "Home",
  components: {
    HelloWorld,
    Header,
    Nav,
    Sidebar,
  },
};
</script>

<style scoped>
.main {
  display: flex;
}
</style>
