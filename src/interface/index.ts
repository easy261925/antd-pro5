export type ResponseEntity = {
  success: boolean
  data: any
  message: string
  code: number
};

export type UserEntity = {
  id: number
  userName: string
  password: string
}