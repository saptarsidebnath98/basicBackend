require('dotenv').config()

const express = require('express')

const app = express()

const port = 4000

const githubData = {
"login": "saptarsidebnath98",
"id": 52876923,
"node_id": "MDQ6VXNlcjUyODc2OTIz",
"avatar_url": "https://avatars.githubusercontent.com/u/52876923?v=4",
"gravatar_id": "",
"url": "https://api.github.com/users/saptarsidebnath98",
"html_url": "https://github.com/saptarsidebnath98",
"followers_url": "https://api.github.com/users/saptarsidebnath98/followers",
"following_url": "https://api.github.com/users/saptarsidebnath98/following{/other_user}",
"gists_url": "https://api.github.com/users/saptarsidebnath98/gists{/gist_id}",
"starred_url": "https://api.github.com/users/saptarsidebnath98/starred{/owner}{/repo}",
"subscriptions_url": "https://api.github.com/users/saptarsidebnath98/subscriptions",
"organizations_url": "https://api.github.com/users/saptarsidebnath98/orgs",
"repos_url": "https://api.github.com/users/saptarsidebnath98/repos",
"events_url": "https://api.github.com/users/saptarsidebnath98/events{/privacy}",
"received_events_url": "https://api.github.com/users/saptarsidebnath98/received_events",
"type": "User",
"user_view_type": "public",
"site_admin": false,
"name": "saptarsiDebnath98",
"company": null,
"blog": "",
"location": null,
"email": null,
"hireable": null,
"bio": "Front-End Developer | React.js Specialist | Passionate About Building Dynamic and Responsive Web Applications",
"twitter_username": null,
"public_repos": 70,
"public_gists": 0,
"followers": 0,
"following": 0,
"created_at": "2019-07-14T06:54:50Z",
"updated_at": "2025-06-12T13:22:19Z"
}

app.get('/', (req, res) => {
  res.send('Hello Saptarsi!')
})

app.get('/login', (req, res) => {
  res.send('<h1>Welcome to Login Page!</h1>')
})

app.get('/github', (req, res) => {
  res.json(githubData)
})


app.listen(process.env.PORT, () => {
  console.log(`Example app listening on port ${port}`)
})
