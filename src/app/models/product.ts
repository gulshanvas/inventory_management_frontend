export class Product {
  productName: string;
  price: string;
  companyName: string;
  count: string;

  constructor(
    options: {
      productName?: string
      price?: string
      companyName?: string
      count?: string
    } = {}
  ) {
    this.productName = options.productName;
    this.price = options.price;
    this.companyName = options.companyName;
    this.count = options.count;
  }
}
