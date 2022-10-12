export function requestGetUsers() {
  return axios.request({
    method: "get",
    url: `${appConfig.appUrl}/admin_panel/users/`,
  });
}
