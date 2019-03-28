"use strict"; 
let fs = require("fs");
let date = require('date-and-time');

let setting = require("./setting.js");

let fetch_data_get = require("./fetch.js").fetch_data_get;
let fetch_data_post = require("./fetch.js").fetch_data_post;

function getToken(){
	setting.ezoneHeader["Content-length"] = 26;
	fetch_data_post( setting.getToken, setting.getTokenRequestData, setting.ezoneHeader)
	.then(( result ) => {
		let jsonData = JSON.parse(result.text);
		let token =  jsonData.data;
		console.log(token,setting.ezoneHeader)
		// encryptSignIn(token)
	})
	.catch(( error ) => console.log( error ));
}

function encryptSignIn(token){
	setting.ezoneHeader["Content-length"] = 660
	fetch_data_post( setting.encryptSignIn + token, setting.encryptSignInRequestData, setting.ezoneHeader)
	.then(( result ) => {
		let jsonData = JSON.parse(result.text);
		let dataFile;
		const nowTime = date.format(new Date(), 'YYYY-MM-DD HH:mm:ss');
		if( jsonData.msg != undefined ){
			dataFile = nowTime + ' 签到不成功! \n不成功原因:' + jsonData.msg + '\ntoken:' + token + '\nmemberId:' + setting.memberId + '\nqzId:' + setting.qzId;
			console.log(dataFile);
		}else{
			dataFile = '✲  恭喜您在 ' + nowTime + ' 签到成功！\n✎ 公司寄语：' + jsonData.data.message + '\n\n';
			fs.appendFile(setting.saveFilePath, dataFile, 'utf8', function(){
				console.log(dataFile);
			});
		}
	})
	.catch(( error ) => console.log( error ));
}

getToken()
