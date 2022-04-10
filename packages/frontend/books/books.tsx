import React from "react";
import useSWR, { SWRConfiguration, Fetcher } from "swr";
import { getBook, fetchBook } from "../../utils/api/models/books";

export const Books = () => {
    const { data } = useSWR('1', getBook);

    console.log(data);
    
    return <div>
        
    </div>
}