export interface AuthUser {
  uid: string;
  email: string;
  username?: string;
  displayName: string;
  accessToken?: string;
}

export interface UserFormData {
  name: string;
  email: string;
  password: string;
}
