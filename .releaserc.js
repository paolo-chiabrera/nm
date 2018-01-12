module.exports = {
  "release": {
    "verifyConditions": ["@semantic-release/changelog", "@semantic-release/npm", "@semantic-release/git", "@semantic-release/github"],
    "getLastRelease": "@semantic-release/npm",
    "publish": ["@semantic-release/changelog", "@semantic-release/npm", "@semantic-release/git", "@semantic-release/github"]
  }
};
