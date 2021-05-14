import { ResponseEntity, UserEntity } from '@/interface';
import { request } from 'umi'

/** 登录接口 POST  */
export async function loginService(body: UserEntity) {
  return request<ResponseEntity>('/server/api/login/login', {
    method: 'POST',
    data: body,
    skipErrorHandler: true,
  });
}

/** 退出接口 */
export async function logoutService() {
  return request<ResponseEntity>('/server/api/login/logout', {
    method: 'POST',
  });
}