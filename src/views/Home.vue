<template>
  <div class="home">
    <Header />
    <Nav />
    <div class="main">
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="repolist">
        <Repolist />
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
  justify-content: space-between;
}
.sidebar {
  width: 16%;
  margin-left: 17%;
  /* border: 1px solid red; */
}
.repolist {
  width: 75%;
  /* border: 1px solid red; */
  margin-left: 28px;
  /* margin-right: 10%; */
}
</style>
