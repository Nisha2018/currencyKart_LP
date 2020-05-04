const otp_btn = document.getElementById("otp_btn");
const otpInput = document.getElementById("otp-input");
const number = document.getElementById("phone_number");

otp_btn.addEventListener("click",(e) => {
	e.preventDefault();
	otpInput.style.display = "block";
	otpInput.style.pointerEvents = "visible";
})