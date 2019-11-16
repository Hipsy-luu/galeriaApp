const serverResponses = {
	returnErrorMessage(message,data){
		return {
			error: true,
			message: message,
			data : data
		}
	},
	returnSuccessMessage(message,data){
		return {
			error: false,
			message: message,
			data : data
		}
	}
};

module.exports = serverResponses;