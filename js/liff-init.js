// ----- Configuration Zone! -----
// Don't forget to change this to your LIFF ID

const liffId = "1656907941-LJw00vr3";

// Don't forget to change this to your LIFF ID

liff.init(
  { liffId: liffId },
  () => {
    initLIFF();
  },
  err => {
    window.alert(err);
  }
);
function initLIFF() {
  if (liff.isLoggedIn()) {
    liff
      .getProfile()
      .then(profile => {
        document.getElementById("profileImage").src = profile.pictureUrl;
        document.getElementById("userId").innerHTML = profile.userId;
        document.getElementById("displayName").innerHTML = profile.displayName;
        document.getElementById("statusMessage").innerHTML =
          profile.statusMessage;
        document.getElementById("pictureUrl").href = profile.pictureUrl;
        document.getElementById("pictureUrl").innerHTML = profile.pictureUrl;
        document.getElementById(
          "email"
        ).innerHTML = liff.getDecodedIDToken().email;
      })
      .catch(e => {
        document.getElementById("userId").innerHTML = "No data, " + e;
        document.getElementById("displayName").innerHTML = "No data, " + e;
        document.getElementById("statusMessage").innerHTML = "No data, " + e;
        document.getElementById("pictureUrl").innerHTML = "No data, " + e;
        document.getElementById("email").innerHTML = "No data, " + e;
      });
  } else {
    document.getElementById("userId").innerHTML = "ไม่มีข้อมูล - กรุณาเข้าสู่ระบบก่อน";
    document.getElementById("displayName").innerHTML = "ไม่มีข้อมูล - กรุณาเข้าสู่ระบบก่อน";
    document.getElementById("statusMessage").innerHTML = "ไม่มีข้อมูล - กรุณาเข้าสู่ระบบก่อน";
    document.getElementById("pictureUrl").innerHTML = "ไม่มีข้อมูล - กรุณาเข้าสู่ระบบก่อน";
    document.getElementById("email").innerHTML = "ไม่มีข้อมูล - กรุณาเข้าสู่ระบบก่อน";
  }

  document.getElementById("getOS").innerHTML = liff.getOS();
  document.getElementById("getLanguage").innerHTML = liff.getLanguage();
  document.getElementById("getVersion").innerHTML = liff.getVersion();
  document.getElementById("isInClient").innerHTML = liff.isInClient();
  document.getElementById("isLoggedIn").innerHTML = liff.isLoggedIn();
  
}
