import req from "@/utils/http-req"

export default {
  hello_world() {
    return req({
      url: "/hello-world",
      method: "get"
    })
  }
}