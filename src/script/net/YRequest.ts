export class YRequest extends XMLHttpRequest {
  req_obj = { method: "", body: {}, headers: {} };
  constructor() {
    super();
  }
  /**get请求 */
  GET(url: string) {
    this.req_obj.method = "GET";
    this.open("GET", url, true);
    return this;
  }
  /**post */
  POST(url: string, data: any) {
    this.req_obj.method = "POST";
    this.req_obj.body = data;
    this.open("POST", url, true);
    return this;
  }
  /**设置请求头 */
  setHeader(headers: any) {
    for (const key in headers) {
      const element = headers[key];
      this.setRequestHeader(key, element);
    }
    return this;
  }

  /**发起请求 */
  then(callback: (response: { code: 0 | 1, data: any }) => void) {
    //请求类型
    if (this.req_obj.method === "POST") {
      this.send(this.req_obj.body as any);
    } else {
      this.send();
    }
    //请求结束
    this.onloadend = () => {
      if (this.readyState === 4 && this.status === 200) {
        if(JSON.parse(this.responseText)){
          callback({ code: 0, data: JSON.parse(this.responseText) });
        }else{
          callback({ code: 0, data: {} });
        }
      } else {
        callback({ code: 1, data: "request 404 error!" });
      }

      //重置请求头
      this.req_obj = { method: "", body: {}, headers: {} };
    }
  }
}