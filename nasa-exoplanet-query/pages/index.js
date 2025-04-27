import SearchPanel from "@/components/SearchPanel/SearchPanel";
import {useEffect, useState} from "react";

export default function Home() {
    const [queryParams, setQueryParams] = useState({hostname: null, year: null, method: null, facility: null});

    useEffect(() => {
        async function fetchData() {
            const exoplanets = await getExoplanets();
            console.log(exoplanets.json());  // 🖨️ print JSON here
        }

        fetchData().then();
    }, []);

    // Updates when search button is hit
    function onSubmit(params) {
        setQueryParams(params);
        console.log(queryParams);
    }

    return (
    <div>
        <SearchPanel onSubmit={onSubmit}/>
      <div> Results Panel</div>
        <div> {queryParams.year}</div>
    </div>
    );
}

export async function getExoplanets() {
    return await fetch('/api/getData');
}