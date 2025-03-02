export interface LoginType {
  username: string;
  password: string;
}

export const initialLogin: LoginType = {
  username: '',
  password: '',
};

export interface RegistrationValues{
  name: string;
  lastName: string;
  userName: string;
  email: string;
  password: string;
}

export const initialRegistrationValues: RegistrationValues = {
  name: '',
  lastName: '',
  userName: '',
  email: '',
  password: ''
}