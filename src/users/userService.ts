import { RequestParams } from "../shared/useRequestManager";

export interface User {
  id: string;
  username: string;
  firstname: string;
  lastname: string;
  email: string;
  avatar: string;
  role: string;
  join_date: string;
  description: string;
}

interface UserResult {
  data: { users: User[] };
}

class UserService {
  public async getUsers(params: RequestParams): Promise<User[]> {
    const result = await fetch(import.meta.env.VITE_API_URL + "/users", params);
    const usersResult = (await result.json()) as UserResult;

    return usersResult.data.users;
  }
}

const userService = new UserService();
export default userService;
