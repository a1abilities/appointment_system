// export const API_URL = 'http://appointment.a1abilities.co.nz/'; // Config[KEY].API_URL;
// export const AUTH_URL = 'http://appointment.a1abilities.co.nz/'; // Config[KEY].AUTH_URL;
// export const API_CONSUMER = 'http://appointment.a1abilities.co.nz/'; // Config[KEY].API_URL;

export const API_URL = 'http://localhost:5000'; // Config[KEY].API_URL;
export const AUTH_URL = 'http://localhost:5000'; // Config[KEY].AUTH_URL;
export const API_CONSUMER = 'http://localhost:5000'; // Config[KEY].API_URL;

// console.log("process.env.NODE_ENV",KEY);

// export const API_URL = Config[KEY].API_URL;
// export const AUTH_URL = Config[KEY].AUTH_URL;
// export const API_CONSUMER = Config[KEY].API_URL;

// Helpers
// export const APP_TOKEN = {
//   set: ({ token, refreshToken, roleName, role_id, franchiseId, userName, userId, uid }) => {
//     sessionStorage.setItem('token', token);
//     sessionStorage.setItem('refresh_token', refreshToken);
//     sessionStorage.setItem('role_name', roleName);
//     sessionStorage.setItem('role_id', role_id);
//     sessionStorage.setItem('franchise_id', franchiseId);
//     sessionStorage.setItem('user_name', userName);
//     sessionStorage.setItem('user_id', userId);
//     sessionStorage.setItem('uid', uid);
    
//   },
//   remove: () => {
//     sessionStorage.removeItem('token');
//     sessionStorage.removeItem('refresh_token');
//     sessionStorage.removeItem('role_name');
//     sessionStorage.removeItem('role_id');
//     sessionStorage.removeItem('user_name');
//     sessionStorage.removeItem('user_id');
//     sessionStorage.removeItem('uid');
//     sessionStorage.removeItem('franchise_id');

//   },
//   get: () => ({
//     token: sessionStorage.getItem('token'),
//     refreshToken: sessionStorage.getItem('refresh_token'),
//     roleName: sessionStorage.getItem('role_name'),
//     role_id: sessionStorage.getItem('role_id'),
//     franchiseId: sessionStorage.getItem('franchise_id'),
//     userName: sessionStorage.getItem('user_name'),
//     userId: sessionStorage.getItem('user_id'),
//     uid: sessionStorage.getItem('uid'),
//   }),
//   get notEmpty() {
//     const cond1 = this.get().token !== null;
//     const cond2 = this.get().token !== '';
//     return cond1 && cond2;
//   },
// };
