import { Paging } from "./paging";
import { Product } from "./product";
import { Seller } from "./seller";

export interface Result {
    site_id: "string",
    seller: Seller,
    country_default_time_zone: String,
    paging: Paging, 
    result: Product[]
}
