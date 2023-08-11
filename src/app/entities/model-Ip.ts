export interface IpData {
    ip: string;
    location: LocationData;
    as: AsData;
    isp: string;
}
export interface LocationData {
    country: string;
    region: string;
    timezone: string;
    city:string;
    geonameId:number;
    lat:number;
    lng:number;
    postalCode:string;
}
export interface AsData {
    asn: number;
    name: string;
    route: string;
    domain: string;
    type: string;
}
