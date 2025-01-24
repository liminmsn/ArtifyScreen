export class Request extends XMLHttpRequest {
  req_obj = {
    method: "",
    body: {},
    headers: {
      "Content-type": "application/x-www-form-urlencoded"
    }
  }
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
  POST(url: string, data: string) {
    this.req_obj.method = "POST";
    this.req_obj.body = data;
    this.open("POST", url, true);
    return this;
  }
  /**发起请求 */
  then(callback: (response: string) => void) {
    this.onreadystatechange = () => {
      if (this.readyState === 4 && this.status === 200) {
        callback(this.responseText);
      }
    }
    this.onloadend = () => {
      this.req_obj = {
        method: "",
        body: {},
        headers: {
          "Content-type": "application/x-www-form-urlencoded"
        }
      }
    }

    if (this.req_obj.method === "POST") {
      this.send(this.req_obj.body as any);
    } else {
      this.send();
    }
  }
}