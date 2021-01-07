<template>
  <div class="home">
    <Header />
    <Nav />
    <div class="main">
      <div class="main_items">
        <div class="sidebar">
          <Sidebar />
        </div>
        <div class="repolist">
          <Repolist />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import Header from "@/components/Header/Header.vue";
import Nav from "@/components/Nav/Nav.vue";
import Sidebar from "@/components/Sidebar/Sidebar.vue";
import Repolist from "@/components/Repolist/Repolist.vue";

export default {
  name: "Home",
  components: {
    Header,
    Nav,
    Sidebar,
    Repolist,
  },
};
</script>

<style scoped>
.main {
  display: flex;
  justify-content: space-evenly;
}
.main_items {
  display: flex;
  justify-content: center;
}
.sidebar {
  width: 20%;
  margin-left: 1%;
}
.repolist {
  width: 70%;
  margin-left: 25px;
}
</style>
