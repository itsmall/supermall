import {
  request4
} from './request'


export function getDetail(id) {
  return request4({
    url: '/projectUser/' + id,
    // headers: {
    //   token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJpZFwiOjYwLFwicGhvbmVcIjpcIjEzNzc3NzEyMzQ1XCIsXCJjb2RlXCI6XCIyNGEyYTE1MC0zNzY4LTRlOTUtYTc1ZS00NjQwNmE3NGQwNDBcIn0iLCJpc3MiOiJsb2dpbiIsImp0aSI6IjEyMy4xNTkuMjQuNiIsImlhdCI6MTU3NDkyODgyNCwiZXhwIjoxNTc2MTM4NDI0fQ.9nn9w3EdWbV7jPlS396Li3kf5_lZ1Bdv36qVvYMlCbM;"
    // }
    // params: {
    //   id
    // }
  })
}
