import http_req from "@/utils/http-req"

export default {
  
  login(user_login_DTO/* : { user_id: String, passwd: String } */) {
    return http_req({
      url: "/user/login", method: "post",
      data: user_login_DTO 
    })
  }
}
