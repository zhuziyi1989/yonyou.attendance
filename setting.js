"use strict"; 
const ezoneHost = "ezone.yonyoucloud.com";
const napiHost = "napi.yonyoucloud.com";
const baseLink = "https://"+ezoneHost+"/signin/";
module.exports = {
	ezoneHeader : {
		"Accept-Encoding" : "gzip, deflate",
		"Protocol":"HTTP/2.0",
		"Accept-Language":"en-US;q=1, zh-Hans-US;q=0.9",
		"Connection" : "keep-alive",
		"Content-Length" : "14",
		"Content-Type" : "application/x-www-form-urlencoded;charset=UTF-8",
		"Authority" : ezoneHost,
		"User-Agent" : "esn/5.3.0 (iPhone; iOS 9.2.1; Scale/2.00)",
		"Cache-Control":"no-cache",
		"Content-length": null
	},
	getTokenRequestData: {
		memberId: 3155802,// memberId update
		qzId: 5417, 
	},
	encryptSignInRequestData: {
		encryptedAttentance:"442BD69E0F5A99661A7630972C1D8F75D7F8B2D8B79286BCCBD5CA92B544ABEBEF65CED16990F4FEAA9D126B4493A2B0717CB760E63C437E661A12CA2FEC21B8E6287C74277829FE42B45324289C6103B431A1C120862BFEACC2CC01E3A01B404D1C67E21349705E43B50A104855699719207C960E1EEDBE627C0D944C674C77D32CD1A01CB8065CACBD12D87712DEF9F21CFA89FD80DF7C04837A3B12BA5209301C57093ACD6B3D6D2F6F02339F46B8FA9C164A87C72087A951A6F5A5D0FD338EE871CD6D4F38297A9306DAF708B5714702E3A4495EFF46BDD5FDD288875B0919AFFAB5E5FDF6520607A3F83CB17D4421AC333EE888796D08750F4C5D9A3B0EFD21F63DAB68934DE80B5F24CBA26AB88E7FADF13E03AF47BF40A90B303159CF5D158A6F46FC2086164335D62DDDBD19AF12C73DA65E2AAE382F0A146DB71D5F"
	},
	getToken: baseLink+"index/webLogin?clientV=2-5.3.0-1-1",
	encryptSignIn: baseLink+"attentance/encryptSignIn?clientV=2-5.3.0-1-1&token=",
	saveFilePath: "qiandao.txt"
}

// 获取token接口  https://ezone.yonyoucloud.com/signin/index/webLogin?clientV=2-5.3.0-1-1
// 签到接口  https://ezone.yonyoucloud.com/signin/attentance/encryptSignIn?clientV=2-5.3.0-1-1&token=96192e48-c544-457e-a126-859dbe3334ca
// 获取个人信息   https://napi.yonyoucloud.com/rest/user/memberInfoInQzFor50
// memberId: 3155802,
// qzId: 5417,
