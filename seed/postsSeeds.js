const db = require('../db/connection')
const Post = require("../models/post")

db.on('error', console.error.bind(console, 'MongoDB connection error:'))
const main = async () => {
  const posts = [{
    "userName": "kirby",
    "imgURL": "https://ca.slack-edge.com/T0351JZQ0-U01F1085B7V-6410788a092e-512",
    "location": "Columbus, Ohio",
    "content": "Help there is a black hole inside of me",
    "cohort": "Sapphire"
  }, {
    "userName": "kryb",
    "imgURL": "https://ca.slack-edge.com/T0351JZQ0-U01F1085B7V-6410788a092e-512",
    "location": "Columbus, Ohio",
    "content": "Help there is a black hole inside of me",
    "cohort": "Sapphire"
  }, {
    "userName": "kirb",
    "imgURL": "https://ca.slack-edge.com/T0351JZQ0-U01F1085B7V-6410788a092e-512",
    "location": "Columbus, Ohio",
    "content": "Help there is a black hole inside of me",
    "cohort": "Sapphire"
  }
  ]
  await Post.insertMany(Post)
  console.log("Created products!")
}
const run = async () => {
  await main()
  db.close()
}
run()