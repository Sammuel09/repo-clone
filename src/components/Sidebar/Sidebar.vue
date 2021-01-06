<template>
  <div class="main">
    <div class="user_profile_img">
      <img
        class="user_img"
        src="../../assets/sammie_github.jpeg"
        alt="User Profile Image"
        width="100px"
        height="100px"
      />
    </div>
    <div class="user_profile">
      <span class="fullname">Samuel Adeniran</span>
      <span class="username">Sammuel09</span>
      <span class="bio">Learner | Explorer | Developer</span>
      <button class="profile_btn">Edit Profile</button>
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
        <span class="user_info_count">5</span> followers
      </span>
      <div class="user_following_info">
        <img
          src="../../assets/people.svg"
          alt="No of Following Users"
          width="16px"
          height="16px"
        />
        <span class="user_info_count">20</span> following
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
        <span class="contact_info_text">Lagos, Nigeria</span>
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
        <span class="contact_info_text">@adeniransamuel</span>
      </span>
    </div>
    <div>
      <div class="highlights">Highlights</div>
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
      <div class="code_vault">
        <span
          ><img
            src="../../assets/north-star.svg"
            alt="North Star"
            width="20px"
            height="20px"
          />
        </span>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "Sidebar",
};
</script>
<style scoped>
.main {
  display: flex;
  flex-direction: column;
  justify-content: left;
  width: 240px;
}
.user_img {
  border-radius: 50px;
}
.user_profile {
  display: flex;
  flex-direction: column;
  align-items: left;
}

.profile_btn {
  width: 100%;
  padding-top: 5px;
  padding-bottom: 5px;
  font-weight: bold;
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
  font-weight: bold;
  margin-left: 5px;
}
.user_follower_info,
.user_following_info,
.user_star_info {
  display: flex-inline;
  flex-direction: row;
  margin-right: 12px;
  font-size: 12px;
}
.contact_info {
  display: flex;
  flex-direction: column;
  font-size: 14px;
  padding-top: 20px;
  padding-bottom: 14px;
  border-bottom: 1px solid #d1d5da;
}

.code_vault {
  display: flex;
  align-content: center;
  margin-bottom: 10px;
}

.fullname {
  font-weight: 900;
  font-size: 24px;
}

.username {
  font-weight: 400;
}

.bio {
  font-weight: 500;
  margin-top: 15px;
  margin-bottom: 15px;
}

.contact_info_text {
  margin-left: 10px;
}
.twitter {
  filter: grayscale(100%);
}

.highlights {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 800;
}

.organizations {
  margin-top: 20px;
  margin-bottom: 10px;
  font-weight: 800;
}
</style>
