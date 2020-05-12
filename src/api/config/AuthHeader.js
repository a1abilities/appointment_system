export function authHeader() {
  return { Authorization: `Basic ${sessionStorage.token}` };
  // } else {
  //     return {};
  // }
}
