'use client'

import Button from '@mui/material/Button';
import Navbar from "@/components/Navbar";
import {Box, Card, Grid} from "@mui/material";
import {useRouter} from "next/navigation";
import {ITrack} from "@/types/track";
import TrackList from "@/components/TrackList";

export default function Home() {

    const router = useRouter();
    const tracks: ITrack[] = [
        {_id: '1', name: 'Track 1', artist: 'Artist 1', text: 'Something 1', listens: 5, audio: 'audio 1', picture: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/pink-cloud-cd-cover-music-design-template-258c703e9959b4635649e3944488c688_screen.jpg?ts=1631060402', comments: []},
        {_id: '2', name: 'Track 2', artist: 'Artist 1', text: 'Something 1', listens: 5, audio: 'audio 1', picture: 'https://img.freepik.com/premium-vector/rock-music-vinyl-disc-cover-cover-for-your-music-playlist-isolated-on-white-background-realistic-illustration_148087-285.jpg', comments: []},
        {_id: '3', name: 'Track 3', artist: 'Artist 1', text: 'Something 1', listens: 5, audio: 'audio 1', picture: 'https://d1csarkz8obe9u.cloudfront.net/posterpreviews/moonlight-shadow-tree-love-music-cd-cover-design-template-f1fb4545b804ee03eae86a6b3c3d4250_screen.jpg?ts=1597682457', comments: []}
    ];

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
                <Grid container justifyContent='center'>
                    <Card style={{width: 900}}>
                        <Box p={3}>
                            <Grid container justifyContent='space-between'>
                                <h1><b>Tracks list</b></h1>
                                <Button onClick={() => router.push('/tracks/create')}>
                                    Upload
                                </Button>
                            </Grid>
                        </Box>
                        <TrackList tracks={tracks} />
                    </Card>
                </Grid>
            </div>
        </>
    );
}
