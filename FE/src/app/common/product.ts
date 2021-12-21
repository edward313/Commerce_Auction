// export interface Bannerposit {
//     // bannerId:number;
//     // bannerName: string;
//     // width:string;
//     // height:string;
//     // min_price: number;
//     // thumbnail :string;
//     // webid:number;
//     // createdate:Date;

//     id:number;
//     name: string;
//     width:string;
//     height:string;
//     min_price: number;
//     thumbnail :string;
//     web_id:number;
//     timeLive:number;
//     auction_status:number;
//     last_auction_date:Date;
//     auction_date:Date;
// }

export interface Bannerposit {
  id: number;
  name: string;
  width: string;
  height: string;
  min_price: string;
  thumbnail: string;
  web_id: number;
  timeLive: number;
  auction_status: number;
  last_auction_date: null;
  auction_date: Date;
  auction_end_date:Date;
}
