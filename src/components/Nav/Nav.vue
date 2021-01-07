<template>
  <div>
    <div class="overview_nav">
      <div class="nav_item_group">
        <span class="nav_item">
          <img
            class="nav_item_img"
            src="../../assets/book.svg"
            alt="Overview"
          />
          <p class="nav_item_text">Overview</p>
        </span>
        <span class="nav_item">
          <img
            class="nav_item_img"
            src="../../assets/repo.svg"
            alt="Repositories"
          />
          <p class="nav_item_text">Repositories</p>
        </span>
        <span class="nav_item">
          <img
            class="nav_item_img"
            src="../../assets/project.svg"
            alt="Projects"
          />
          <p class="nav_item_text">Projects</p>
        </span>
        <span class="nav_item">
          <img
            class="nav_item_img"
            src="../../assets/package.svg"
            alt="Packages"
          />
          <p class="nav_item_text">Packages</p>
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Nav",
};
</script>
<style scoped>
.overview_nav {
  display: flex;
  justify-content: center;
  align-items: center;
  border-bottom: 1px solid #d1d5da;
}
.nav_item_group {
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 50px;
}

.nav_item {
  display: flex;
  margin-right: 30px;
  cursor: pointer;
  z-index: 100;
}

.nav_item:hover,
nav_item:focus {
  border-bottom: 2px solid #d1d5da;
}

.nav_item_img {
  margin: 7px;
}
.nav_item_text {
  font-weight: 500;
}
</style>
