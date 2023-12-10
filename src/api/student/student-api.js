/* INTRO 2023-12-11: 引入 http_req 用于创建请求 */
import http_req from "@/utils/http-req"

export default {

  /* INTRO 2023-12-11: 定义与后端对应的api */
  hello_world() {
    return http_req({
      url: "/hello-world",
      method: "get"
    })
  },

  ice_bee() {
    return http_req({
      url: "/icebee",
      method: "get"
    })
  }
}
