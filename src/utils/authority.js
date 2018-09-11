// use localStorage to store the authority info, which might be sent from server in actual project.
/**
 * 已读20180911
 * 获取权限
 */
export function getAuthority() {
  // return localStorage.getItem('antd-pro-authority') || ['admin', 'user'];
  // 本地获取权限角色，默认是admin
  let authority = localStorage.getItem('antd-pro-authority');
  if (authority) {
    // 判断是否多个权限角色，转为JSON数组
    if (authority.includes('[')) {
      authority = JSON.parse(authority);
    } else {
      authority = [JSON.parse(authority)];
    }
  } else {
    authority = ['admin'];
  }
  return authority;
}
/**
 * 本地缓存权限角色
 */
export function setAuthority(authority) {
  return localStorage.setItem('antd-pro-authority', JSON.stringify(authority));
}
