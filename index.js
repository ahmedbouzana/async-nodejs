console.log("before");

//Callback approach
/* getUser(1, function(user) {
  console.log("User", user);

  getRepositories(user.githubUsername, repos => {
    console.log("Repos", repos);
  });
}); */

//Promises
getUser(1)
  .then(user => getRepositories(user.username))
  .then(repos => getCommits(repos[0]))
  .then(commits => console.log("Commits", commits))
  .catch(err => console.log("Error", err.message));

//Async and Await approach
async function displaCommits() {
  try {
    const user = await getUser(1);
    const repos = await getRepositories(user.githubUsername);
    const commits = await getCommits(repos[0]);
    console.log("Commits", commits);
  } catch (err) {
    console.log("Error", err.message);
  }
}

displaCommits();

console.log("after");

function getUser(id) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Reading user from database...");
      resolve({ id: id, githubUsername: "ahmedbouzana" });
    }, 2000);
  });
}

function getRepositories(username) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["repo1", "repo2", "repo3"]);
    }, 2000);
  });
}

function getCommits(repo) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      console.log("Calling GitHub API...");
      resolve(["commit"]);
    }, 2000);
  });
}
