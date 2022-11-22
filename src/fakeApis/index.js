// import { createServer, Model } from 'miragejs';

// export const setupServer = () => {
//     let server = createServer({
//         models: {
//             users: Model,
//         },
//         seeds(server) {
//             server.create('user', {
//                 id: 1,
//                 username: 'sondtf8',
//                 password: '111',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSA4Ysewgm9YahPDZClRrYGZdyMBQlRbqstag&usqp=CAU',
//                 action: true,
//             });
//             server.create('user', {
//                 id: 2,
//                 username: 'k',
//                 password: '112',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQXXm8xFjloCgEJQKfFe31aYk77TG-aHjq84g&usqp=CAU',
//                 action: true,
//             });
//             server.create('user', {
//                 id: 3,
//                 username: 'tien',
//                 password: '113',
//                 avatar: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTHAYcYHJSmie28y2IbvA1XmW6PD5KPNVmtVg&usqp=CAU',
//                 action: true,
//             });
//         },
//         routes() {
//             this.namespace = 'api/user';
//             // this.get('/', (schema) => {
//             //     return schema.users.all();
//             // });

//             this.post('/login', (schema, request) => {
//                 // console.log('requestLogin1: ', request.requestBody);
//                 let body = JSON.parse(request.requestBody);
//                 let pass = body.searchValuePassword;
//                 // console.log(request.requestBody);
//                 let username = body.searchValueUserName;
//                 let allUser = schema.users.all().models;
//                 let user = '';
//                 // let allUserModols =
//                 allUser.forEach((element) => {
//                     // console.log('pass', element.attr0s.password === pass);
//                     if (pass === element.attrs.password && username === element.attrs.username) {
//                         user = element.attrs;
//                     }
//                     // console.log('e', element.attrs);
//                 });
//                 // console.log('all: ', allUser);
//                 // console.log('user: ', user);
//                 return user;
//             });

//             this.post('/', (schema, request) => {
//                 let attrs = JSON.parse(request.requestBody);
//                 console.log('2. request: ', attrs);
//                 return schema.users.create(attrs);
//             });

//             this.post('/api/users', (schema, request) => {
//                 // console.log('requestLogin2: ', request.requestBody);
//                 const payload = JSON.parse(request.requestBody);
//                 return schema.users.create(payload);
//             });
//         },
//     });
//     return server;
// };
