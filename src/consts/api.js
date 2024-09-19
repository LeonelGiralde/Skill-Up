class Url {
	baseUrl = "https://skillup-pi83.onrender.com/api";
	login = `${this.baseUrl}/login/`;
	singUp = `${this.baseUrl}/register/`;
	refreshToken = `https://skillup-pi83.onrender.com/token-refresh/`;
	user = `https://skillup-pi83.onrender.com/api/user/`;
}

export const API = new Url();
