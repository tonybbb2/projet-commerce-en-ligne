import React from "react"
import Hero from "./Hero";
import Trending from "./Trending"
import Poster from "./Poster"
import Toppicks from "./Toppicks";

function Home() {
    return (
        <>
            <Hero />
            <Trending />
            <Poster />
            <Toppicks />
        </>
    );
}

export { Home };
