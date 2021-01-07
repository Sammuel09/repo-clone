<template>
  <div class="main">
    <span class="repo_title_group">
      <a :href="repo.html_url" class="repo_title">{{ repo.name }}</a>
      <button class="btn btn_star">
        <span
          ><img
            class="star"
            src="../../assets/star.svg"
            alt=""
            width="12px"
            height="12px"
        /></span>
        Star
      </button>
    </span>
    <div v-if="repo.fork" class="repo_subtitle">
      Forked from primer/octicons
    </div>
    <div class="repo_description">
      {{ repo.description }}
    </div>
    <div class="repo_info">
      <span class="repo_language">
        <span class="repo_language_color"></span>
        <span class="repo_language_text">Javascript</span>
      </span>
      <a href="" class="repo_forked">
        <svg
          class="octicon_repo_forked"
          xmlns="http://www.w3.org/2000/svg"
          xmlns:xlink="http://www.w3.org/1999/xlink"
          width="16"
          height="16"
          preserveAspectRatio="xMidYMid meet"
          viewBox="0 0 16 16"
          style="
            -ms-transform: rotate(360deg);
            -webkit-transform: rotate(360deg);
            transform: rotate(360deg);
          "
        >
          <path
            fill-rule="evenodd"
            d="M5 3.25a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0zm0 2.122a2.25 2.25 0 1 0-1.5 0v.878A2.25 2.25 0 0 0 5.75 8.5h1.5v2.128a2.251 2.251 0 1 0 1.5 0V8.5h1.5a2.25 2.25 0 0 0 2.25-2.25v-.878a2.25 2.25 0 1 0-1.5 0v.878a.75.75 0 0 1-.75.75h-4.5A.75.75 0 0 1 5 6.25v-.878zm3.75 7.378a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0zm3-8.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5z"
          />
          <rect x="0" y="0" width="16" height="16" fill="rgba(0, 0, 0, 0)" />
        </svg>
        <span>596</span>
      </a>
      <span class="repo_license">
        <img
          class="octicon_repo_law"
          src="../../assets/law.svg"
          alt="Law Icon"
          width="18px"
          height="18px"
        />
        <span class="repo_license_text">{{ license }}</span>
      </span>
      <span>
        Updated
        <span>4 days ago</span>
      </span>
    </div>
  </div>
</template>
<script>
// import * as moment from "moment";
export default {
  name: "Repo",
  props: {
    repo: Object,
  },
  data() {
    return {
      searchTerm: "",
    };
  },
  computed: {
    license: function () {
      if (this.repo.license === null) {
        return "MIT License";
      }
      return this.repo.license.name || "MIT License";
    },
  },
};
</script>
<style scoped>
.main {
  padding-top: 20px;
  padding-bottom: 20px;
  border-bottom: 1px solid #e1e4e8;
  width: 100%;
}

.repo_title_group {
  display: flex;
  justify-content: space-between;
}
a.repo_title {
  font-weight: 800;
  color: #0366d6;
  text-decoration: none;
  margin-bottom: 8px;
}
a.repo_title:hover {
  color: #0366d6;
  font-weight: 800;
  text-decoration: underline;
}

.repo_subtitle {
  font-size: 12px;
}

.repo_info {
  margin-top: 8px;
  font-size: 14px;
}

.repo_description {
  margin-top: 8px;
  font-size: 14px;
}

.repo_language {
  margin-right: 30px;
}

.repo_language_color {
  position: relative;
  top: 1px;
  display: inline-block;
  width: 12px;
  height: 12px;
  border: 1px solid #1b1f231a;
  border-radius: 50%;
  background-color: #f1e05a;
  margin-right: 3px;
}
.repo_forked {
  color: #586069;
  text-decoration: none;
  margin-right: 30px;
}

.repo_forked:hover {
  color: #0366d6;
}
.octicon_repo_forked,
.octicon_repo_law {
  display: inline-block;
  fill: currentColor;
  margin-right: 3px;
}

.repo_license {
  margin-right: 30px;
}

.btn {
  padding: 5px 12px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: 1px solid #1b1f2326;
  border-radius: 5px;
  background: #fafbfc;
  margin-bottom: 15px;
}
.btn_star {
}
</style>
