import { Injectable } from "@angular/core";
import { HttpService } from "../http-service";

@Injectable()
export class UserService {
  constructor(private httpService: HttpService) {}
}
