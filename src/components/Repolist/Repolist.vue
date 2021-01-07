<template>
  <div class="main">
    <div class="search_group">
      <input
        class="search"
        type="text"
        name="search"
        id="search"
        placeholder="Find a repository..."
      />
      <button class="btn">
        Type: All
        <span
          ><img
            class="caret_down"
            src="../../assets/caret-down-filled.svg"
            alt=""
            width="10px"
            height="10px"
        /></span>
      </button>
      <button class="btn">
        Language:
        <span> All </span>
        <span>
          <img
            class="caret_down"
            src="../../assets/caret-down-filled.svg"
            alt=""
            width="10px"
            height="10px"
          />
        </span>
      </button>
      <button class="btn btn_new">
        <span>
          <img
            class="repo_icon"
            src="../../assets/repo-white.svg"
            alt="Overview"
            width="11px"
            height="11px"
          />
        </span>
        New
      </button>
    </div>
    <div class="repo">
      <Repo v-for="repo in repos" :key="repo.id" :repo="repo" />
    </div>
  </div>
</template>
<script>
import Repo from "@/components/Repo/Repo.vue";
import { mapActions, mapState } from "vuex";
export default {
  name: "Repolist",
  components: {
    Repo,
  },
  created() {
    this.fetchRepos("sammuel09");
  },
  methods: {
    ...mapActions(["fetchRepos"]),
  },
  computed: {
    ...mapState({
      repos: (state) => state.repos,
    }),
  },
};
</script>
<style scoped>
.main {
  width: 100%;
  display: flex;
  flex-direction: column;
}
.search_group {
  width: 70%;
  display: flex;
  flex-direction: row;
  padding-top: 16px;
  padding-bottom: 16px;
  border-bottom: 1px solid #e1e4e8;
}

.search {
  border-radius: 6px;
  outline: none;
  border: 1px solid #e1e4e8;
  /* padding: 1px 12px; */
  font-size: 14px;
  color: #24292e;
  width: 300%;
  margin-right: 10px;
  flex-grow: 1 !important;
  flex-shrink: 1 !important;
  flex-basis: auto !important;
}

.search:focus {
  border: 4px solid #0367da4d;
  outline: none;
  box-shadow: #0366d64d;
}

.btn {
  width: 70%;
  padding: 5px 12px;
  font-weight: bold;
  cursor: pointer;
  outline: none;
  border: 1px solid #1b1f2326;
  border-radius: 5px;
  background: #fafbfc;
  margin-bottom: 15px;
  /* margin-left: 10px; */
}

.btn_new {
  margin-left: 15px;
  color: white;
  background-color: #2ea44f;
}
.repo_icon {
  color: white;
}

.repo {
  width: 70%;
}
</style>
