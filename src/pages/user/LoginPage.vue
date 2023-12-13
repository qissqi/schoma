<template>
  <!-- 原神背景视频 -->
  <div style="width: 100%; height: 100vh; position: fixed; z-index: -1;">
    <video src="https://www.yuanshen.com/medias/bg.3e78e808.mp4"
        preload="auto"
        poster="images/poster.948ee40e.jpg"
        muted="muted" loop="loop" autoplay="autoplay"
        style="width: 100%;">
      </video>
  </div>

  <a-row id="main">
    <a-col flex="1"></a-col>
    <a-col flex="0" style="padding-top: 150px;">

      <!-- 登录的form表单 -->
      <div class="login-form">

        <h1 class="login-form-item login-form-title">
          icebee 高校教务管理系统
        </h1>

        <a-input class="login-form-item login-form-input"
          v-model="user_id"
          placeholder="请输入学号 / 职工号">
          <template #prefix><icon-user /></template>
        </a-input>

        <a-input class="login-form-item login-form-input"
          v-model="passwd" type="password"
          placeholder="请输入密码">
          <template #prefix><icon-lock /></template>
        </a-input>

        <span class="login_err_tip">
          {{ login_err_msg }}
        </span>

        <a-button class="login-form-item" type="primary" long
          :loading="login_btn_loading" @click="login">
          登录
        </a-button>

        <a-link class="link" :hoverable="false" icon>
          忘记密码 / 账号申诉
        </a-link>

        <a-link class="link" :hoverable="false" icon style="float: right;"
          href="https://ys.mihoyo.com/main/">
          官网
        </a-link>
      </div>

    </a-col>
    <a-col flex="1"></a-col>
  </a-row>

</template>
  
<script>
/* NOTE 2023-12-08: @ 是 /src 的化名 */
import user_api from "@/api/user/user-api"

export default {
  data() {
    return {
      user_id: "",
      passwd: "",
      login_err_msg: "",
      login_btn_loading: false
    }
  },
  methods: {
    clear_passwd() {
      this.passwd = ""
    },
    set_login_err_msg(msg) {
      this.login_err_msg = msg
    },
    set_is_login_btn_loading(is_loading) {
      this.login_btn_loading = is_loading
    },

    login() {
      if (this.user_id === "") {
        this.set_login_err_msg("未填写学号 / 职工号")
        return
      }
      else if (this.passwd === "") {
        this.set_login_err_msg("未填写密码")
        return
      }

      this.set_login_err_msg("")
      this.set_is_login_btn_loading(true)

      user_api.login({
        user_id: this.user_id,
        passwd:  this.passwd
      })
      .then(resp => {
        this.set_is_login_btn_loading(false)

        console.log(resp) /* TEMP */

        if (resp.status != 200) {
          this.set_login_err_msg(resp.msg)
          this.clear_passwd()
          return
        }

        let query_data = {
          user_id: resp.data.user_id,
          role: resp.data.role
        }

        if (resp.data.role === "student") {
          this.$router.push({ path: '/student/home', query: query_data })
        }
        else if (resp.data.role === "teacher") {
          this.$router.push({ path: '/teacher/home', query: query_data })
        }
        else if (resp.data.role === "admin") {
          this.$router.push({ path: '/admin/home', query: query_data })
        }
        else {
          this.set_login_err_msg("无法登录，未知的用户身份")
        }
      })
      .catch(err => {
        this.set_is_login_btn_loading(false)
        this.clear_passwd()

        if (err.code === "ERR_NETWORK") {
          this.set_login_err_msg("网络错误")
        }
        else {
          this.set_login_err_msg(err.message)
        }
      })
    }
  }
}
</script>

<style scoped>

.login-form {
  padding: 14px;
  width: 280px;
  background-color: rgba(255, 255, 255, 0.85);
  border-radius: var(--border-radius-small);
}

.login-form-title {
  text-align: center;
  font-size: 22px;
  font-weight: 600;
  color: var(--color-text-1);
}

.login-form-item {
  margin-top: 9px;
  margin-bottom: 9px;
}

.login-form-input {
  color: #000;
  background-color: rgba(255, 255, 255, 0.7);
}

.login_err_tip {
  padding-left: 5px;
  padding-right: 5px;
  color: red;
  font-size: 13px;
}

.link {
  color: var(--color-text-3);
  font-size: 13px;
}

.link:hover {
  color: rgb(var(--link-5));
}

</style>
