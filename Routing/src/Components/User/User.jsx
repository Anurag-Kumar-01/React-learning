import React from "react"
import { useParams } from "react-router-dom";


export default function User() {
    const {id} = useParams();
    return (
        <>
       <div className="text-4xl text-center py-10">User:{id}</div>
        </>
    );
}
