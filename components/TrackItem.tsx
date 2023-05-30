import React from 'react';
import {ITrack} from "@/types/track";
import styles from '../styles/TrackItem.module.scss';
import {Card, Grid} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import {Delete, Pause, PlayArrow} from "@mui/icons-material";

interface TrackItemProps {
    track: ITrack,
    active?: boolean,
}

const TrackItem: React.FC<TrackItemProps> = ({track,active = false}) => {
    return (
        <Card className={styles.track}>
            <IconButton style={{marginRight: '10px'}}>
                {active ? <Pause /> : <PlayArrow />}
            </IconButton>
            <img width={50} height={50} src={track.picture} />
            <Grid container direction={"column"} style={{width: 200, margin: '0 20px'}}>
                <div>{track.name}</div>
                <div style={{fontSize: 12, color: 'gray'}}>{track.artist}</div>
            </Grid>
            {active && <div>02:42 / 03:22</div>}
            <IconButton style={{marginLeft: 'auto'}}>
                <Delete />
            </IconButton>
        </Card>
    )
}

export default TrackItem;