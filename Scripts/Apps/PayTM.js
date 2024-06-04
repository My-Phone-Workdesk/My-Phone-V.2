// help me add a popup in this HTML and CSS provided below which has a cross button to close it and it activates when you click the My Bills button with the id="MyBillsButton" which covers the entire screen just leaving a margin of 5rem on every side and the background goes blur and in that popup there is a heading "Bills" and a grid of 11 boxes in each there is a logo above of <i> class and a heading below each 

// HTML:

// <!DOCTYPE html>
// <html lang="en">
// 	<head>
// 		<meta charset="UTF-8">
// 		<meta name="viewport" content="width=device-width, initial-scale=1.0">
// 		<link rel="stylesheet" type="text/css" href="../../../Icons/fontawesome-pro/css/all.css">
// 		<link rel="stylesheet" href="../../../Design/PayTM_Account.css">
// 		<link rel="Icon" type="Image/X-icon" href="https://play-lh.googleusercontent.com/6_Qan3RBgpJUj0C2ct4l0rKKVdiJgF6vy0ctfWyQ7aN0lBjs78M-1cQUONQSVeo2jfs" />
// 		<script src="../../../Scripts/Apps/PayTM.js" type="module"></script>
// 		<title>My Account</title>
// 	</head>
// 	<body>
// 		<div class="main">
// 			<div class="headerWrapper">
// 				<div class="header">
// 					<img src="./PayTM_Assets/BankLogo.svg" alt="paytm">
// 					<div class="corp-retail-login-switch">Logout</div>
// 				</div>
// 			</div>
// 			<div class="content">
// 				<div class="content-left">
// 					<div class="content-left__info">
// 						<div class="content-left__header">Hello, {Account Name Here}</div>
// 						<div>
// 							<div class="content-left__item">
// 								<div class="content-left__item-icon">
// 									<img class="content-left__item-icon__img" src="./PayTM_Assets/debitcard.svg" alt="">
// 								</div>
// 								<div class="content-left__item-details">
// 									<div class="content-left__item-title">Balance</div>
// 									<div class="content-left__item-description">₹ 1,00,00,000</div>
// 								</div>
// 							</div>
// 							<div class="content-left__item">
// 								<div class="content-left__item-icon">
// 									<img class="content-left__item-icon__img" src="./PayTM_Assets/debitcard.svg" alt="">
// 								</div>
// 								<div class="content-left__item-details">
// 									<div class="content-left__item-title">Loan Info</div>
// 									<div class="content-left__item-description">Amount: ₹ 1,00,00,000</div>
// 									<div class="content-left__item-description">Interest: 100%</div>
// 									<div class="content-left__item-description">Taken On: 1 Feb 2024 1:00:01 PM IST</div>
// 									<div class="content-left__item-description">Paid: ₹ 0</div>
// 									<div class="content-left__item-description">Left: ₹ 2,00,00,000</div>
// 								</div>
// 							</div>
// 							<div class="content-left__item">
// 								<div class="content-left__item-icon">
// 									<img class="content-left__item-icon__img" src="./PayTM_Assets/fixeddeposit.svg" alt="">
// 								</div>
// 								<div class="content-left__item-details">
// 									<div class="content-left__item-title">Current Bank Interest Rates</div>
// 									<div class="content-left__item-description">Loan: 9%</div>
// 									<div class="content-left__item-description">Investment: 7.8%</div>
// 								</div>
// 							</div>
// 							<div class="content-left__item">
// 								<div class="content-left__item-icon">
// 									<img class="content-left__item-icon__img" src="./PayTM_Assets/fixeddeposit.svg" alt="">
// 								</div>
// 								<div class="content-left__item-details">
// 									<div class="content-left__item-title">My Investment</div>
// 									<div class="content-left__item-description">Rate: 1.8%</div>
// 									<div class="content-left__item-description">Invested: ₹ 10</div>
// 									<div class="content-left__item-description">Profit/Loss: ₹ -11</div>
// 								</div>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 				<div class="content-right">
// 					<img src="./PayTM_Assets/BankLogo.svg" class="BankLogo">
// 					<br>
// 					<button class="content-left__button">
// 						<div class="content-left__button-content">
// 							<p class="content-left__button-txt">Pay</p>
// 						</div>
// 					</button>
// 					<br>
// 					<button class="content-left__button" id="MyBillsButton">
// 						<div class="content-left__button-content">
// 							<p class="content-left__button-txt">My Bills</p>
// 						</div>
// 					</button>
// 					<br>
// 					<button class="content-left__button">
// 						<div class="content-left__button-content">
// 							<p class="content-left__button-txt">Take A Loan</p>
// 						</div>
// 					</button>
// 					<br>
// 					<button class="content-left__button">
// 						<div class="content-left__button-content">
// 							<p class="content-left__button-txt">Flush My Money</p>
// 						</div>
// 					</button>
// 				</div>
// 			</div>
// 			<div class="footerWrapper">
// 				<div class="container">
// 					<div class="footer">
// 						<div class="footerMenu"></div>
// 						<div class="copyrightText">© My Phone V.2 PayTM</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	</body>
// </html>


// CSS:

// body, html {
// 	font-family: 'Open Sans', sans-serif;
// 	font-display: swap;
// 	font-size: 12px;
// 	-webkit-font-smoothing: antialiased;
// 	margin: 0;
// 	padding: 0;
// 	line-height: 1.3;
// 	overflow: auto;
// 	color: #29394f;
// 	user-select: none;
//     height: 100%;
//     width: 100%;
// }

// * {
// 	box-sizing: border-box;
// 	pointer-events: all
// }

// :focus {
// 	outline: 0
// }

// ::-moz-focus-inner {
// 	border: 0
// }

// .main {
// 	height: 100%;
// 	display: flex;
// 	flex-direction: column;
// 	justify-content: space-between
// }

// .header {
// 	height: 56px;
// 	background: #fff;
// 	display: flex;
// 	align-items: center;
// 	margin-left: 40px;
// 	margin-right: 40px;
// 	justify-content: space-between
// }

// .header .corp-retail-login-switch {
// 	font-size: 14px;
// 	color: #00b8f5;
// 	cursor: pointer
// }

// .content {
// 	flex: 1 1 auto;
// 	position: relative;
// 	display: flex;
// 	border-top: 1px solid #e6ebf3
// }

// .content-left {
// 	background: #002970;
// 	width: 550px;
// 	height: 55rem
// }

// .content-left__info {
// 	margin-left: 64px;
// 	font-weight: 800;
// 	color: #fff
// }

// .content-left__item {
// 	margin-top: 44px;
// 	display: flex;
// 	justify-content: flex-start;
// 	align-items: center
// }

// .content-left__item-icon {
// 	width: 44px;
// 	height: 44px;
// 	display: flex;
// 	align-items: center;
// 	justify-content: center
// }

// .content-left__item-icon__img {
// 	width: 44px;
// 	height: 44px
// }

// .content-left__item-details {
// 	margin-left: 24px
// }

// .content-left__item-title {
// 	font-size: 16px;
// 	line-height: 25px;
// 	padding: 2px
// }

// .content-left__item-description {
// 	font-size: 14px;
// 	font-weight: 400;
// 	line-height: 19.1px;
// 	padding: 2px
// }

// .content-left__header {
// 	font-size: 28px;
// 	margin-top: 44px
// }

// .content-left__button {
// 	width: 141px;
// 	height: 40px;
// 	border: 1px solid #00b8f5;
// 	border-radius: 100px;
// 	cursor: pointer;
// 	background: #fff;
// 	text-decoration: none
// }

// .content-left__button-content {
// 	display: flex;
// 	justify-content: center;
// 	align-items: center
// }

// .content-left__button-txt {
// 	font-size: 14px;
// 	color: #00b8f5;
// 	line-height: 16px;
// 	font-weight: 700;
// 	letter-spacing: .5px
// }

// .content-right {
// 	flex: 1;
// 	display: flex;
// 	flex-direction: column;
// 	align-items: center;
// 	justify-content: flex-start;
// 	margin-top: 44px
// }

// .iframe {
// 	width: 650px;
// 	height: 515px;
// 	border: none
// }

// .footerWrapper {
// 	border-top: 8px solid #29394f;
// 	position: relative;
// 	background: #fff
// }

// .footerWrapper::before {
// 	content: ' ';
// 	position: absolute;
// 	left: 0;
// 	width: 100%;
// 	height: 8px;
// 	background: #00b9f5;
// 	z-index: 1
// }

// .footer {
// 	display: flex;
// 	justify-content: space-between;
// 	align-items: center;
// 	padding: 22px 20px 13px
// }

// .footer .copyrightText {
// 	font-size: 14px;
// 	margin-right: 40px
// }

// .footer .poweredByText {
// 	font-size: 14px;
// 	color: #7b93b4
// }

// .footer .footerMenu {
// 	display: flex
// }

// .footer .menuItem a {
// 	font-size: 14px;
// 	color: #00b9f5;
// 	text-decoration: none;
// 	margin-left: 32px
// }

// .notification-bar {
// 	background-color: #ddd
// }

// .marquee {
// 	height: 30px;
// 	overflow: auto;
// 	position: relative;
// 	overflow-x: hidden
// }

// .marquee p {
// 	position: absolute;
// 	height: 100%;
// 	width: max-content;
// 	margin: 0;
// 	line-height: 30px;
// 	color: #000;
// 	transform: translateX(100%);
// 	animation: scroll-left 50s linear infinite
// }

// .marquee p:hover {
// 	animation-play-state: paused
// }

// .login-switch-button {
// 	background: #fff;
// 	padding: 15px 20px;
// 	width: 620px;
// 	font-weight: 600;
// 	font-size: 14px;
// 	color: #00b9f5;
// 	box-shadow: 0 2px 10px rgba(0, 0, 0, .08)
// }

// .login-switch-button .switch-login-text {
// 	cursor: pointer
// }

// @keyframes scroll-left {
// 	0% {
// 		transform: translateX(100vw)
// 	}

// 	100% {
// 		transform: translateX(-100%)
// 	}
// }

// @media only screen and (max-width:576px) {
// 	.header {
// 		margin-left: 16px;
// 		margin-right: 16px
// 	}

// 	.header .corp-retail-login-switch {
// 		font-size: 12px
// 	}

// 	.content {
// 		display: block;
// 		overflow-y: hidden
// 	}

// 	.content-left {
// 		display: none
// 	}

// 	.iframe {
// 		box-shadow: none;
// 		height: 550px;
// 		width: 100%
// 	}

// 	.footerWrapper {
// 		display: none
// 	}

// 	.login-switch-button {
// 		width: 100%
// 	}
// }

// .BankLogo {
// 	height: 5rem;
// 	width: auto
// }

const myBillsButton = document.getElementById("MyBillsButton");
const popup = document.getElementById("popup");
const closeButton = document.querySelector(".close");

myBillsButton.addEventListener("click", function() {
  popup.style.display = "block";
});

closeButton.addEventListener("click", function() {
  popup.style.display = "none";
});

window.addEventListener("click", function(event) {
  if (event.target == popup) {
    popup.style.display = "none";
  }
});