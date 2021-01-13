const Joi = require('@hapi/joi') 

//User-defined function to validate the user 
function validateUser(user) 
{ 
	const JoiSchema = Joi.object({ 
		username: Joi.string().min(5).max(30).required(), 
		email: Joi.string().email().min(5).max(50).optional(), 
		date_of_birth: Joi.date().max('1-1-2004'), 
		account_status: Joi.string().valid('activated') 
					.valid('unactivated').optional(), 
	}).options({ abortEarly: false }); 

	return JoiSchema.validate(user) 
} 

//valid data
var user = { 
    username: 'Gourav', 
    email: 'gourav@gmail.com', 
    date_of_birth: '1-1-2003', 
    account_status: 'activated'
} 

//invalid data
/*var user = { 
    username: 'GH', 
    email: 'demo@', 
    date_of_birth: '2020-20-48', 
    account_status: 'abcd'
}; */

response = validateUser(user) 

if(response.error) 
{ 
	console.log(response.error.details) 
} 
else
{ 
	console.log("Validated Data") 
} 
