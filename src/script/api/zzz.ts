import { YRequest } from "../net/YRequest";

export function getData() {
    // const body = { "size": 24, "current": 1, "sort": 0, "category": 0, "resolution": 0, "color": 0, "categoryId": 0, "ratio": 0 };
    const header = {
        "Content-Type": "application/json",
    }
    return new YRequest().GET("zzz");
}

export interface HomeData {
    currPage: number;
    list: ListItem[];
    pageSize: number;
    totalCount: number;
    totalPage: number;
}

export interface ListItem {
    i: string;
    w: number;
    h: number;
    t: number;
}
