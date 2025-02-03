import { useEffect, useRef } from "react";
import "./sytle.css";

function Home() {
    const Iframe = useRef(null);

    useEffect(() => {
        console.log(Iframe);
    }, []);

    return <div className='home'>
        
    </div>
}

export default Home;