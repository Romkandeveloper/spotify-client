'use client'

import Button from '@mui/material/Button';
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main className="">
                <h1>Welcome!</h1>
                <h3>There are bests tracks!</h3>
                <Button variant="contained">Contained</Button>
            </main>
        </>
    );
}
