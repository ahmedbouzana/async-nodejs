console.log("before");

getUser(1, function(user) {
  console.log("User", user);

  getRepositories(user.githubUsername, repos => {
    console.log("Repos", repos);
  });
});

console.log("after");

function getUser(id, callback) {
  setTimeout(() => {
    console.log("Reading user from database...");
    callback({ id: id, githubUsername: "ahmedbouzana" });
  }, 2000);
}

function getRepositories(username, callback) {
  setTimeout(() => {
    console.log("Calling GitHub API...");
    callback(["repo1", "repo2", "repo3"]);
  }, 2000);
}
