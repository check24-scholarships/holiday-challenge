import {Box, Container} from "@mui/system";
import Image from "next/image";
import {Typography} from "@mui/material";

export default function Nav() {
    return (
        <Box sx={{backgroundColor: '#063773', width: '100%', height: '80px'}}>
            <Container maxWidth="md" sx={{height: "100%", display: 'flex', flexDirection: 'row', alignItems: 'center', justifyContent: 'space-between'}}>
                <Box sx={{height: "50%", width: 200, ml: "-15px", position: "relative"}}>
                    <Image src="/logo.svg" alt="CHECK24 Logo" fill/>
                </Box>
                <Typography variant="h6" color="white">GenDev 2023</Typography>
            </Container>
        </Box>
    )
}