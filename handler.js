'use strict'

module.exports.method_handler = (event, context, callback) =>{
  const method = event.requestContext.http.method;
  const exist = event.hasOwnProperty('pathParameters') ? event.pathParameters.hasOwnProperty('id') : false;
  switch(method){
    case 'GET':{
      if(exist)
        return get(event, context, callback);
      else
        return get2(event, context, callback);
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

const get2 = (event, context, callback) => {
  return callback(null, {
    statusCode: 200,
    body: 'Eyo2',
  });
}