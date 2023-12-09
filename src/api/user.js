import req from "@/utils/request"

export default {
  login(user_id, passwd) {
    return req({
      url: "/user/login", method: "post",
      data: {
        "user_id": user_id,
        "passwd": passwd
      }
    })
  }
}
