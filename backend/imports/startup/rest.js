import { Restivus } from 'meteor/maka:rest';
import Links from '../api/links';

if(Meteor.isServer) {

  const Api = new Restivus({
    useDefaultAuth: true,
    prettyJson: true,
    enableCors: true,
    defaultHeaders: {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Headers': 'Origin',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
      "Access-Control-Allow-Credentials": true ,
      'Content-Type': 'application/json',
      'Access-Control-Max-Age': '86400',
    },    
  });

  Api.addRoute('links', {authRequired: false}, {
    get: {
      action() {
        console.log('get...');
        return 'success get';
      }
    },
    post: {
      action() {
        console.log('post...');
        return 'success post';
      }
    },
    put: {
      action() {
        console.log('put...');
        return 'success put';
      }
    },
    delete: {
      action() {
        console.log('delete...');
        return 'success delete';
      }
    },            
  })

}