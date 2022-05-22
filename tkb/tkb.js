var fetch = global.nodemodule["node-fetch"];

var tkb_get = function tkb_get(type, data) {
	(async function () {
		var returntext = `Thời Khóa Biểu/n`;
		return {
			handler: "internal",
			data: returntext
		}
	})().then(function (returndata) {
		data.return(returndata);
	});
} 

module.exports = {
	tkb_get: tkb_get
}