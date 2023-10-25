// Ẩn hiện phần đăng kí đăng nhập
var modalBodyLoginJs = document.getElementById("modal-body__login-js ");
var modalBodyRegisterJs = document.getElementById("modal-body__register-js ");
var modalBodyResetPassJs = document.getElementById(
  "modal-body__reset-password-js "
);
var modalJs = document.getElementById("modalJs ");
var userLoginJs = document.getElementById("user-login-js");
userLoginJs.onclick = function (event) {
  event.preventDefault();
  modalJs.style.display = "flex ";
  modalBodyLoginJs.style.display = "block ";
  chatBoxJs.style.display = "none ";
  chatBoxRealJs.style.display = "none";
};
// click vào nút đóng
var closeJs = document.getElementsByClassName("close-js ");
for (var index = 0; index < closeJs.length; index++) {
  closeJs[index].onclick = function () {
    modalJs.style.display = "none ";
    modalBodyLoginJs.style.display = "none ";
    modalBodyRegisterJs.style.display = "none ";
  };
}
// click vào nút đăng kí
var modalUserRegister = document.getElementById("modal-user-register-js ");
modalUserRegister.onclick = function (event) {
  event.preventDefault();
  modalBodyLoginJs.style.display = "none ";
  modalBodyRegisterJs.style.display = "block ";
  modalBodyResetPassJs.style.display = "none ";
};
// click vào nút đăng nhập
var modalUserLogin = document.getElementsByClassName("modal-user-login-js ");
for (var index = 0; index < modalUserLogin.length; index++) {
  modalUserLogin[index].onclick = function (event) {
    event.preventDefault();
    modalBodyLoginJs.style.display = "block ";
    modalBodyRegisterJs.style.display = "none ";
    modalBodyResetPassJs.style.display = "none ";
  };
}
// click vào quên mật khẩu
var modalUserResetPass = document.getElementById("modal-user-reset-pass-js ");
modalUserResetPass.onclick = function (event) {
  event.preventDefault();
  modalBodyLoginJs.style.display = "none ";
  modalBodyRegisterJs.style.display = "none ";
  modalBodyResetPassJs.style.display = "block ";
};
// click vào vùng overlay
var modalOverlayJs = document.getElementById("modal-overlay-js ");
modalOverlayJs.onclick = function () {
  modalJs.style.display = "none ";
  modalBodyLoginJs.style.display = "none ";
  modalBodyRegisterJs.style.display = "none ";
  modalBodyResetPassJs.style.display = "none ";
};
// ẩn hiện form chat
var logoChatBoxJs = document.getElementById("logo-chat-box-js");
var chatBoxJs = document.getElementById("chat-box-js");
logoChatBoxJs.onclick = function () {
  chatBoxJs.style.display = "block ";
};
// click vào close trên box
var closeIconChatBoxJs = document.getElementsByClassName(
  "close-icon-chat-box-js"
);
for (var index = 0; index < closeIconChatBoxJs.length; index++) {
  closeIconChatBoxJs[index].onclick = function () {
    chatBoxJs.style.display = "none ";
    chatBoxRealJs.style.display = "none";
  };
}
// Hiển thị box chat
var chatBoxRealJs = document.getElementById("chat-box-real-js");
var btnStartChatJs = document.getElementById("btn-start-chat-js");
btnStartChatJs.onclick = function () {
  chatBoxRealJs.style.display = "flex";
};
