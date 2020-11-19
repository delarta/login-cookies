import Cookies from "js-cookie";

export function checkLogin() {
  if (typeof Cookies.get("token") === "undefined") {
    // console.log("Belum Login");
    return false;
  } else {
    // console.log("Sudah Login");
    return true;
  }
}

export function checkIsAdmin() {
  if (Cookies.get("roles") === "admin") {
    return true;
  } else {
    return false;
  }
}
