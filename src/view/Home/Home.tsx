import { Card } from 'primereact/card';
import { Button } from 'primereact/button';
import { DataView } from 'primereact/dataview';
import { classNames } from 'primereact/utils';
import { Paginator } from 'primereact/paginator';
import { getData, HomeData, ListItem } from "@/script/api/zzz";
import { useEffect, useState } from "react";
import "./sytle.css";
import { Image } from 'primereact/image';



function YCard({ product }: { product: ListItem }) {
    return <Card title={<input value={product.i}/>} subTitle={`${product.w}x${product.h}`}>
        <Image src={`https://cdn2.zzzmh.cn/wallpaper/origin/5af17f7f881b11ebb6edd017c2d2eca2.jpg/thumbs?auth_key=1738684800-54b21a23de8bcfdf055b85912708dbfff0ac22fe-0-efbbf01386d8b6185e761d4f5e10518e`}/>
    </Card>
}

function Home() {
    const [products, setProducts] = useState<HomeData>({
        pageSize: 0,
        totalCount: 0,
        totalPage: 0,
        currPage: 0,
        list: []
    });

    useEffect(() => () => {
        getData().then(res => {
            if (res.code == 0) {
                const data = res.data.data as HomeData;
                setProducts(() => {
                    return {
                        ...data,
                        currPage: data.currPage - 1
                    }
                });
            }
        });
    }, [])

    const onPageChange = (event: any) => {
        
    };

    return <div className='home'>
        <div className='home_view'>
            <div className='home_view_content'>
                {
                    products.list.map((item, idx) => {
                        return <YCard product={item} key={idx} />
                    })
                }
            </div>
            {products?.list.length > 0 && <Paginator first={products.currPage} rows={products.pageSize} totalRecords={products.totalCount} onPageChange={onPageChange} />}
        </div>
    </div>
}

export default Home;