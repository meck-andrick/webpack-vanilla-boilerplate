import "./index.css";

window.onload = (event) => {
  document.getElementById("app").innerHTML = "loading...";
  //render app
  setTimeout(function () {
    var hasToken = false;
    if (hasToken) {
      document.getElementById("app").innerHTML = "tester";
    } else {
      window.location.href = "./login";
    }
  }, 2000);
};
