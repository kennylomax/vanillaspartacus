import { Component, OnInit } from "@angular/core";
import { Product, User } from "@spartacus/core";
import { CurrentProductService } from "@spartacus/storefront";
import { UserAccountFacade } from "@spartacus/user/account/root";
import { Observable } from "rxjs";
import { VoucherService } from "../voucher.service";

@Component({
  selector: "app-custom-product-summary",
  templateUrl: "./custom-product-summary.component.html",
  styleUrls: ["./custom-product-summary.component.scss"]
})
export class CustomProductSummaryComponent implements OnInit {

  product$ : Observable<Product|null>  = this.currentProductService.getProduct();
  user$ : Observable<User|undefined>  = this.userService.get();
  voucher:any = {}
  constructor( private currentProductService: CurrentProductService, private userService:UserAccountFacade, private voucherService:VoucherService) { }

  ngOnInit(): void {
  this.getVoucherDetails()
  }

  getVoucherDetails(){
  this.voucherService.getVoucher("an", "example").subscribe(
  res =>  {  this.voucher = res;}, 
  err=> {console.log(err);}, 
  () => {console.log("Get response is completed");}
  )
  }
}

