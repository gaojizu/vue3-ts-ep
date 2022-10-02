import service from ".";
import { loginData } from "../type/api"
// 接口文件 登陆接口
export function loginApi(data: loginData) {
	return service({
		url: "/login",
		method: "post",
		data
	})
}

// 获取商品列表接口
export function getGoodlists(){
	return service({
		url: "/googlists",
		method: "get",
	})
}