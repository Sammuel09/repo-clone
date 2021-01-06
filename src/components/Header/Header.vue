<template>
  <div>
    <header class="header">
      <div class="left_header_section">
        <span class="header_item"
          ><img
            class="logo"
            src="../../assets/GitHub-Mark-32px.png"
            alt="The Github Mark"
        /></span>
        <span class="header_item">
          <label for="" :class="{ header_search: !isFocused }">
            <input
              v-model="inputValue"
              type="text"
              placeholder="Search or Jump to"
              v-on:focusin="onInput"
              v-on:focusout="onFocusOut"
              :class="[isFocused ? input_focus_class : header_item_input_class]"
            />
            <img
              v-if="!isFocused"
              class="search-key-slash"
              src="../../assets/search-key-slash.svg"
              alt="Search-Key-Slash"
            />
          </label>
        </span>
        <span class="header_item">Pull Requests</span>
        <span class="header_item">Issues</span>
        <span class="header_item">MarketPlace</span>
        <span class="header_item">Explore</span>
      </div>
      <div class="right_header_section">
        <span class="header_item"
          ><img
            class="notification_bell"
            src="../../assets/notification.png"
            width="20px"
            height="20px"
            alt="Notification Bell"
        /></span>
        <div class="header_item plus_icon_group">
          <span
            ><img class="plus_icon" src="../../assets/plus.svg" alt="Plus Icon"
          /></span>
          <span
            ><img
              class="caret_down"
              src="../../assets/caret-down-filled-white.svg"
              alt=""
              width="12px"
              height="12px"
          /></span>
        </div>
        <div class="header_item user_profile">
          <span
            ><img
              class="header_img"
              src="../../assets/sammie_github.jpeg"
              alt="User Profile Image"
              width="20px"
              height="20px"
          /></span>
          <span
            ><img
              src="../../assets/caret-down-filled-white.svg"
              alt=""
              width="12px"
              height="12px"
          /></span>
        </div>
      </div>
    </header>
  </div>
</template>
<script>
export default {
  name: "Header",
  data() {
    return {
      inputValue: "",
      isFocused: false,
      input_focus_class: "input_focus",
      header_item_input_class: "header_item_input",
    };
  },
  methods: {
    onInput() {
      console.log("sammie");
      this.isFocused = true;
    },
    onFocusOut() {
      this.isFocused = false;
    },
  },
};
</script>
<style scoped>
.header {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-top: 12px;
  padding-bottom: 12px;
  background: #24292e;
  color: #fff;
}

.left_header_section,
.right_header_section {
  display: flex;
  flex-direction: row;
  align-items: center;
  cursor: pointer;
}

.left_header_section {
  margin-left: 16px;
}

.right_header_section {
  margin-right: 16px;
}
.header_item {
  /* display: inline; */
  margin-left: 8px;
  margin-right: 8px;
  font-weight: 800;
}

.header_item:hover {
  color: #d1d5da;
}

.header_search {
  display: flex;
  align-items: center;
  border: 0.5px solid #444d56;
  border-radius: 5px;
  padding: 2px;
  padding-right: 8px;
}

.header_item_input {
  padding-top: 5px;
  padding-bottom: 5px;
  padding-left: 12px;
  outline: none;
  border: none;
  border-radius: 5px;
  background-color: #24292e;
  width: 200px;
}

.header_item_input::placeholder {
  color: #e8ebee;
}

.input_focus {
  outline: none;
  background-color: #ffffff;
  width: 400px;
  border: 0.5px solid#0366d6;
  border-radius: 5px;
  padding-top: 4px;
  padding-bottom: 4px;
  padding-left: 8px;
}
.header_item .search-key-slash {
  height: 20px;
}

.header_img {
  /* border: 1px solid white; */
  border-radius: 50%;
  margin-right: 2px;
}

.user_profile {
  display: flex;
  align-items: center;
}

.logo,
.notification_bell {
  filter: invert(100%);
}
.logo:hover {
  filter: invert(80%);
  color: white;
}

.plus_icon {
  color: #fff;
  margin-right: 4px;
  /* font-weight: 400; */
}

.caret_down {
  color: #fff;
  font-weight: 400;
}
</style>
