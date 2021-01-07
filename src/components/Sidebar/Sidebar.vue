<template>
  <div class="main">
    <div class="user_profile_img">
      <a href="/account"
        ><img
          class="user_img"
          :src="user.avatar_url"
          alt="User Profile Image"
          width="270px"
          height="270px"
      /></a>
    </div>
    <div class="user_profile">
      <span class="fullname">{{ user.name }}</span>
      <span class="username">{{ user.login }}</span>
      <span class="bio">{{ user.bio }}</span>
      <button class="btn">Edit Profile</button>
    </div>
    <div class="user_profile_info">
      <span class="user_follower_info">
        <span>
          <img
            src="../../assets/people.svg"
            alt="No of Followers"
            width="16px"
            height="16px"
          />
        </span>
        <span class="user_info_count">{{ user.followers }}</span> followers
      </span>
      <div class="user_following_info">
        <img
          src="../../assets/people.svg"
          alt="No of Following Users"
          width="16px"
          height="16px"
        />
        <span class="user_info_count">{{ user.following }}</span> following
      </div>
      <div class="user_star_info">
        <img
          src="../../assets/star.svg"
          alt="No of Stars"
          width="16px"
          height="16px"
        />
        <span class="user_info_count">9</span>
      </div>
    </div>
    <div class="contact_info">
      <span>
        <img
          src="../../assets/location.svg"
          alt="Location"
          width="16px"
          height="16px"
        />
        <span class="contact_info_text">{{ user.location }}</span>
      </span>
      <span class="contact_info_item">
        <img
          src="../../assets/mail.svg"
          alt="Email"
          width="16px"
          height="16px"
        />
        <span class="contact_info_text">adeniransamuel@rocketmail.com</span>
      </span>
      <span class="contact_info_item">
        <img
          src="../../assets/twitter_logo.svg"
          alt="Twitter"
          width="18px"
          height="18px"
          class="twitter"
        />
        <span class="contact_info_text">{{ user.twitter_username }}</span>
      </span>
    </div>
    <div class="highlights">
      <div class="highlights_text">Highlights</div>
      <div class="code_vault">
        <span
          ><img
            src="../../assets/north-star.svg"
            alt="NorthStar"
            width="20px"
            height="20px"
          />
        </span>
        Arctic Code Vault Contributor
      </div>
    </div>
    <div>
      <div class="organizations">Organizations</div>
      <span
        ><img
          src="https://avatars1.githubusercontent.com/u/28545268?s=60&v=4"
          alt="North Star"
          width="20px"
          height="20px"
        />
      </span>
    </div>
  </div>
</template>
<script>
import { mapActions, mapState } from "vuex";
export default {
  name: "Sidebar",
  created() {
    this.fetchUser("sammuel09");
  },
  methods: {
    ...mapActions(["fetchUser"]),
  },
  computed: {
    ...mapState({
      user: (state) => state.user,
    }),
  },
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 100%;
}
.user_profile_img {
  text-align: center;
}

.user_img {
  border-radius: 50%;
}
.user_profile {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.btn {
  width: 100%;
  padding-top: 8px;
  padding-bottom: 8px;
  font-weight: 600;
  cursor: pointer;
  outline: none;
  border: 1px solid #1b1f2326;
  border-radius: 5px;
  background: #fafbfc;
  margin-bottom: 15px;
}

.user_profile_info {
  display: flex;
}
.user_info_count {
  font-weight: 700;
  margin-left: 5px;
}
.user_follower_info,
.user_following_info,
.user_star_info {
  display: flex-inline;
  flex-direction: row;
  margin-right: 12px;
  font-size: 12px;
  font-weight: 500;
}
.contact_info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-top: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #d1d5da;
}

.code_vault {
  display: flex;
  align-content: center;
}

.fullname {
  margin-top: 16px;
  font-weight: 700;
  font-size: 26px;
}

.username {
  font-weight: 400;
  font-size: 18px;
}

.bio {
  font-weight: 500;
  margin-top: 20px;
  margin-bottom: 15px;
}

.contact_info_text {
  margin-left: 10px;
  font-weight: 500;
}
.twitter {
  filter: grayscale(100%);
}

.highlights {
  border-bottom: 1px solid #d1d5da;
  padding-top: 20px;
  padding-bottom: 20px;
}
.highlights_text {
  margin-bottom: 10px;
  font-weight: 800;
}

.organizations {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 800;
}
</style>
