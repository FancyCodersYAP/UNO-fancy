export interface IUser {
  id: number;
  first_name: string;
  second_name: string;
  display_name: string;
  email: string;
  login: string;
  phone: string;
  avatar: string;
  status?: null;
}

export interface AuthState extends DefaultState{
  user: IUser | null;
}

export interface DefaultState {
  isLoading: boolean;
  error: string;
}
