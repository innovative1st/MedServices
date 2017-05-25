export class PackagePrice{
  
  public pkgName: string;
  public pkgPrice: number;
  public pkgDetail: string [];
  

  
  constructor (name: string, price: number, detail: string []){
  this.pkgName = name;
  this.pkgPrice = price;
  this.pkgDetail = detail;
}

}
