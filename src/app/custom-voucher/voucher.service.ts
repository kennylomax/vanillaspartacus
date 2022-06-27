import { HttpClient, HttpParams } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root"
})
export class VoucherService {

  constructor(private httpClient:HttpClient) { }

  public getVoucher (_userId: any, _productId: any){
  // const params = new HttpParams().set("userId", userId).set("productId",productId);
  return this.httpClient.get( "https://my-json-server.typicode.com/kennylomax/spartacusdemojson/vouchers?id=1" )
  }
}


