'use strict'

module.exports.method_handler = (event, context, callback) =>{
  const method = event.requestContext.http.method;
  switch(method){
    case 'GET':{
      return get(event, context, callback);
    }
  }
  callback(null, {
    statusCode: 422,
    headers: { 'Content-Type': 'text/plain' },
    body: 'Couldn\'t create the Student.',
  });
  return;
}


const get = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: 'Eyo',
  });
}
