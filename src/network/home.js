import {
  request4
} from "./request"



export function getHomeMultidata() {
  return request4({
    url: '/project/superior?size=10'
  })
}
