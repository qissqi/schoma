import req from "@/utils/request"

export default {
  hello_world() {
    return req({
      url: "/hello-world",
      method: "get"
    })
  }
}