import { Injectable } from "@angular/core";
import { LoginRes, User, UserSignupRes, UserWithId, UserWithName } from "@app/shared";
import { LOGIN_ENDPOINT, SINGUP_ENPOINT, USERS_ENDPOINT } from "@utils";
import { Observable, of, switchMap } from "rxjs";
import { HttpService } from "../http-service";

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}

  createUser(body: UserWithName): Observable<User> {
    return this.httpService.post<UserWithName, UserSignupRes>(SINGUP_ENPOINT, body).pipe(
      switchMap((res) => {
        const userAuthData: User = {
          login: res.login,
          password: body.password,
        };
        return of(userAuthData);
      }),
    );
  }

  authorizeUser(body: User): Observable<LoginRes> {
    return this.httpService.post<User, LoginRes>(LOGIN_ENDPOINT, body);
  }

  getUserById(userId: string): Observable<UserWithId> {
    return this.httpService.get<UserWithId>(`${USERS_ENDPOINT}/${userId}`);
  }

  updateUser(userId: string, body: UserWithName): Observable<UserWithId> {
    return this.httpService.update<UserWithId>(`${USERS_ENDPOINT}/${userId}`, body);
  }

  deleteUser(userId: string): Observable<void> {
    return this.httpService.delete<void>(`${USERS_ENDPOINT}/${userId}`);
  }
}
