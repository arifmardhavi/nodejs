import * as dotenv from "dotenv";
import {mapUsers,mapArticles} from "./getter.js";
dotenv.config()

function mergeData(usersData, articlesData) {
  const data = mapUsers(usersData)

  const result = {
    projectName : process.env.PROJECT_NAME,
    accessToken : process.env.ACCESS_TOKEN,
    users : mapUsers(usersData),
    articles : mapArticles(articlesData)
  }
  return result; // TODO: replace this
}

const users = [
  {
    id: 1,
    username: "isrotrip",
    password: "PhT1Oky01",
    gender: "male",
  },
  {
    id: 2,
    username: "dmtrxw",
    password: "oYt2Thj9w",
    gender: "male",
  }
]

const articles = [
  {
    id: 1,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 1,
  },
  {
    id: 2,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 5,
  },
  {
    id: 3,
    article: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
    userId: 4,
  },
]

console.log(mergeData(users,articles));