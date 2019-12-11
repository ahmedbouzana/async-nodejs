console.log("before")

const user = getUser(1);
console.log(user);

console.log("after");

function getUser(id){

    setTimeout(()=>{
        console.log("Reading user from database...")
        return{id:id, githubUsername: "ahmedbouzana"};
    }, 2000);
}