const mode = 1;

const host_local = "http://localhost:5095";
const host_remote = "https://lab10-jhdk.onrender.com";

function getHost() {
    return (mode == 0) ? host_local : host_remote;
}

let configuration = {loggedIn: false, hosts: getHost(), token: ""};