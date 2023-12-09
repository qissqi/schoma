<template>
  <div style="
    width:100%;     height:100%;
    position:fixed; z-index: -1;">
    <a-carousel
      :auto-play="true"  animation-name="fade"
      show-arrow="never" indicator-type="never"
      style="width: 100%; height: 100%;">
      <a-carousel-item v-for="image in bkdg_images">
        <img :src="image" style="width: 100%; height: 100%;" />
      </a-carousel-item>
    </a-carousel>
  </div>

  <div id="main">
    <a-row>
      <a-col flex="1"></a-col>
      <a-col flex="0">

        <div class="login-form" style="margin-top: 150px;">
          <a-form :model="user_login_info" @submit="login">

            <a-input class="login-form-item login-form-input"
              v-model="user_login_info.user_id"
              aria-required="true"
              placeholder="请输入学号 / 职工号">
              <template #prefix>
                <icon-user />
              </template>
            </a-input>

            <a-input class="login-form-item login-form-input"
              v-model="user_login_info.passwd" type="password"
              aria-required="true"
              placeholder="请输入密码">
              <template #prefix>
                <icon-lock />
              </template>
            </a-input>

            <a-button class="login-form-item"
              type="primary" long
              html-type="submit">
              登录
            </a-button>

            <a-link class="forgot-passwd-link"
              :hoverable="false" icon>
              忘记密码 / 账号申诉
            </a-link>
          </a-form>
        </div>


        <div style="
          display: flex;
          justify-content: flex-end;
          margin-top: 14px;
          width: 100%;
          background-color: rgba(255, 255, 255, 0.85);
          border-radius: var(--border-radius-small);">

          <a-link :hoverable="false" icon
            href="https://www.guet.edu.cn/"
            style="
            margin-top: 2px;
            margin-bottom: 2px;
            margin-right: 6px;
            font-size: 12px;">
            学校官网
          </a-link>
        </div>

      </a-col>
      <a-col flex="1"></a-col>
    </a-row>
  </div>

</template>
  
<script>
import tmpl_api from "@/api/tmpl"

export default {
  data() {
    return {
      user_login_info: {
        user_id: "",
        passwd: ""
      },
      bkdg_images: [
        'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/cd7a1aaea8e1c5e3d26fe2591e561798.png~tplv-uwbnlip3yd-webp.webp',
        'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/6480dbc69be1b5de95010289787d64f1.png~tplv-uwbnlip3yd-webp.webp',
        'https://p1-arco.byteimg.com/tos-cn-i-uwbnlip3yd/0265a04fddbd77a19602a15d9d55d797.png~tplv-uwbnlip3yd-webp.webp',
      ]
    }
  },
  methods: {
    login() {

      tmpl_api.hello_world()
      .then(resp => {
        console.log(resp)
      })
      .catch(err => {
        console.log(err)
      })
      
    }
  }
}
</script>

<style scoped>

#bkgd-img{
  width:100%;
  height:100%;
  position:fixed;
  z-index: -1;
}

.login-form {
  padding: 14px;
  width: 260px;
  background-color: rgba(255, 255, 255, 0.8);
  border-radius: var(--border-radius-small);
}
.login-form-item {
  margin-top: 7px;
  margin-bottom: 7px;
}

.login-form-input {
  color: #000;
}

.forgot-passwd-link {
  color: var(--color-text-3);
  font-size: 12px;
}

</style>
