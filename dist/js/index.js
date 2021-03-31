// variable global
let conn = window.navigator.onLine;
// variable global

// fungsi web onload
function myFunc() {
  if (conn == false) {
    Swal.fire({
      icon: "warning",
      width: "20rem",
      timer: 3000,
      text: "Kamu lagi offline... cek koneksi internetmu untuk load konten :D",
      showConfirmButton: false,
    });
  }
}
// fungsi web on load end

//fungsi button di klik untuk demo
function DemoFunc() {
  let connTrue = window.navigator.onLine;
  connTrue = true;
  if (connTrue) {
    Swal.fire({
      icon: "warning",
      width: "20rem",
      timer: 3000,
      text: "Kamu lagi offline... cek koneksi internetmu load konten :D",
      showConfirmButton: false,
    });
  }
}
// end btn

// cek koneksi
$(document).ready(() => {
  if (conn == false) {
    myFunc().show();
  }
});
// cek koneksi end
