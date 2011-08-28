RtmAPI = {
	
	testLogin: function(frob, token, callback)
	{
		var scope = this;
		scope.callMethod({
				method:"rtm.test.login", 
				frob:frob,
				auth_token: token
			}, 
			function(param)
			{
				console.log(param);
				callback(param.rsp.user.username);
			});
	},
	
	getToken: function(callback, frob)
	{
		var scope = this;
		console.log(frob);
		scope.callMethod({method:"rtm.auth.getToken", frob:frob}, function(param)
			{
				console.log(param);
				callback(param.rsp.auth.token);
			});
	},
	
	getFrob: function(callback)
	{
		var handler = function(param)
		{
			callback(param.rsp.frob);
		}
		
		this.callMethod({method:"rtm.auth.getFrob"}, handler);
	},
	
	getAuthURL: function(perms, callback, frob)
	{
		var url = this.RTM_URL_PREFIX + this.RTM_AUTH;
		var scope = this;
		var paramsString = scope.getParamsString({
				frob:frob,
				perms:perms
			});
		callback(url + "?" + paramsString);
	},
	
	callMethod: function(params, callback)
	{
		var url = this.RTM_URL_PREFIX + this.RTM_REST;
		var handler = function(data)
		{
			var responseObj = JSON.parse(data);
			callback(responseObj);
		}
		
		this.callMethodToURL(url, params, handler);
	},

	callMethodToURL: function(url, params, handler)
	{
		var paramsString = this.getParamsString(params);	
		this.nativeCall(url, paramsString, handler, true);
	},
	
//	jQueryCall: function(url, paramsString, handler)
//	{
//		$.ajax(chrome.extension.getURL(url), {
//			async: true,
//			type: "GET",
//			data: paramsString,
//			success: handler,
//			error: function(some, textStatus, errorThrown)
//			{
//				console.log("error");
//				console.log(some);
//				console.log(textStatus);
//				console.log(errorThrown);
//			}
//		});
//		
//	},
	
	nativeCall: function(url, paramsString, handler, async)
	{
		console.log(url + "?" + paramsString);
		
		var request = new XMLHttpRequest();
		request.onload = function()//TODO: (2.medium) Handle errors;
		{
			handler(request.responseText);
		};
		request.open("GET", url + "?" + paramsString, async);
		request.send(null);		
	},
	
	getSignature: function(params)
	{
		var keys = []
		
		for(var i in params)
		{
			keys.push(i);
		}
		
		keys.sort();
		
		var resultString = this.SHARED_SECRET;

		for(var i in keys)
		{
			resultString += keys[i] + params[keys[i]];
		}
		
		var signature = this.md5(resultString);
		return signature;
	},
	
	getParamsString: function(params)
	{
		params.api_key = this.API_KEY;
		params.format = "json";
		var signature = this.getSignature(params);

		params.api_sig = signature;

		
		var result = "";
		
		for(var i in params)
		{
			result += i + "=" + params[i] + "&";
		}
		return result;
	},
	
	md5 : function(string)
	{
		return calcMD5(string);
	},

	RTM_URL_PREFIX: "http://www.rememberthemilk.com/services/",
	RTM_AUTH : "auth/",
	RTM_REST: "rest/",
	API_KEY: "19e81069d6bcce22f6259f07378b4b77",
	SHARED_SECRET: "15d793f12aebd914"
}

