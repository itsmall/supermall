import {
  request4
} from "./request"



export function getHomeMultidata() {
  return request4({
    url: '/project/superior?size=4'
  })
}

export function getHomeGoods(type, size) {
  return request4({
    url: '/project/'+type,
    params: {
      size
    }
  })
}
