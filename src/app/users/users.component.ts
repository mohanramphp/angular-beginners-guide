import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, ParamMap } from "@angular/router";

@Component({
  selector: "app-users",
  templateUrl: "./users.component.html",
  styleUrls: ["./users.component.css"]
})
export class UsersComponent implements OnInit {
  userId: string;
  addressId: string;
  greet: string;
  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.paramMap.subscribe((params: ParamMap) => {
      if (params.has("userId")) {
        this.userId = params.get("userId");
      }
      if (params.has("addressId")) {
        this.addressId = params.get("addressId");
      }
    });

    this.route.queryParamMap.subscribe((params: ParamMap) => {
      if (params.has("greet")) {
        this.greet = params.get("greet");
      }
    });
  }
}
