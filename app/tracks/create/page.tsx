'use client'

import Navbar from "@/components/Navbar";

export default function Home() {

    return (
        <>
            <Navbar />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                justifyContent: 'center',
                marginTop: "150px"
            }}>
               Create page
            </div>
        </>
    );
}
