import { useEffect, useState } from "react";
import { invoke } from "@tauri-apps/api/core";
import { Request } from "@/script/net/Request";


function Home() {

    const [greetMsg, setGreetMsg] = useState("");
    const [name, setName] = useState("");

    async function greet() {
        // Learn more about Tauri commands at https://tauri.app/develop/calling-rust/
        setGreetMsg(await invoke("greet", { name }));
    }

    useEffect(() => {
        new Request().GET("https://www.pexels.com/zh-cn/").then((res) => {
            console.log(res);
        });
    }, []);


    return <>
        <form
            className="row"
            onSubmit={(e) => {
                e.preventDefault();
                greet();
            }}
        >
            <input
                id="greet-input"
                onChange={(e) => setName(e.currentTarget.value)}
                placeholder="Enter a name..."
            />
            <button type="submit">Greet</button>
        </form>
        <p>{greetMsg}</p>
    </>
}

export default Home;