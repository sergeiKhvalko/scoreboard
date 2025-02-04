import { api } from "@/shared/api";
import { TypeRegisterSchema } from "../schemes";
import { IUser } from "../types";

class AuthService {
  public async register(body: TypeRegisterSchema, recaptcha?: string) {
    const headers = recaptcha ? { recaptcha } : undefined;

    const response = await api.post<IUser>("/auth/register", body, {
      headers,
    });

    return response;
  }
}

export const authService = new AuthService();
