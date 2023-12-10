import axios from 'axios'

import { Notification } from '@arco-design/web-vue' /* TEMP 2023-12-10 */

const service = axios.create({
  baseURL: "http://127.0.0.1:3632"
})

/* INTRO 2023-12-10: axios 响应拦截器 */
service.interceptors.response.use(
  resp => {
    if (resp.config.responseType === "blob") {
      /* INTRO 2023-12-10: 二进制数据 */
      return resp;
    }
    else if (resp.status === 200) {
      /* INTRO 2023-12-10: 响应体只保留后端Resp类的部分 */

      /* TEMP 2023-12-10:

------------------------------------------------------------------------
      # TEMP-BEGIN(use Resp)

      import { Notification } from '@arco-design/web-vue'
      */
      if (resp.data.hasOwnProperty("_")) {
        delete resp.data._
        return resp.data;
      }
      else {
        resp.request
        Notification.clear()
        Notification.warning({
          content: "后端请使用util包下的Resp类作为统一的响应类封装",
          duration: 10000, closable: true
        })
        return resp
      }
      /* TEMP-END(use Resp) 
------------------------------------------------------------------------

      return resp.data;
      */
    }
    else {
      return resp;
    }
  }
)

export default service
