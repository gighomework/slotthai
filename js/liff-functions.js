function getProfile() {
  liff
    .getProfile()
    .then(profile => {
      console.log(JSON.stringify(profile));
      window.alert(JSON.stringify(profile));
    })
    .catch(e => {
      console.log(e);
      window.alert(e);
    });
}
function getAccessToken() {
  window.alert(liff.getAccessToken());
}
function getContext() {
  window.alert(JSON.stringify(liff.getContext()));
}

function sendMessage() {
  liff
    .sendMessages([{ type: "text", text: "ทดสอบระบบ " }])
    .then(() => {
      window.alert("ส่งข้อความเรียบร้อย");
    })
    .catch(e => {
      window.alert(e);
    });
}

function login() {
  liff.login();
}

function scanCode() {
  liff
    .scanCode()
    .then(result => {
      window.alert(JSON.stringify(result));
    })
    .catch(e => {
      window.alert(e);
    });
}

function openWindow() {
  liff.openWindow({
    url: "https://club.herokuapp.com",
    external: true
  });
}

function show() {
    document.getElementById("show").style.display ="none";
    document.getElementById("hide").style.display ="block";
 document.getElementById("emails").style.display ="block";
 document.getElementById("user").style.display ="block"
}

function logout() {
  if (liff.isLoggedIn()) {
    liff.logout();
    window.alert("ออกจากระบบเรียบร้อย");
    location.reload();
  }
}

function shareTargetPicker() {
  liff
    .shareTargetPicker([
      {
        type: "text",
        text: "ทดสอบจร้าาา"
      }
    ])
    .then(() => {
      alert("ส่งเมสเสจ ฟิคแล้ว");
    })
    .catch(function(res) {
      alert(res);
    });
}
