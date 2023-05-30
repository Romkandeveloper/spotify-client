'use client'

import Button from '@mui/material/Button';
import Navbar from "@/components/Navbar";

export default function Home() {
    return (
        <>
            <Navbar />
            <main style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "150px"
            }}>
                <h1>Welcome!</h1>
                <h3>There are bests tracks!</h3>
                <Button variant="contained">Get started!</Button>
            </main>
        </>
    );
}
