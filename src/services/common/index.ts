import { ResponseEntity } from '@/interface';
import { request } from 'umi'

/** 获取用户信息 POST  */
export async function getUserInfoService() {
  return request<ResponseEntity>('/server/api/sysUser/getUserInfo', {
    method: 'POST',
  });
}