import { IUserRepository } from "./types";
import { EEndpoints } from "../../../constants/Endpoints";
import { BaseRepository } from "src/data/BaseRepository";

export class UserRepository extends BaseRepository implements IUserRepository {
  async login(): Promise<void> {
    const a = {
      login: "test@mail.ru",
      password: "123456",
    };
    await this.api.post(EEndpoints.LOGIN, a);
  }
  async logout(): Promise<void> {
    await this.api.post(EEndpoints.LOGOUT);
  }
}
