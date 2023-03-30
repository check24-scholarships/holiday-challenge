import { Flight as FlightIcon} from "@mui/icons-material";
import { Box, Typography, Stack } from "@mui/material";

type Flight = {
    inbound: boolean,
    departureDatetime?: string,
    departureAirport?: string,
    arrivalAirport?: string,
    arrivalDatetime?: string
}

export default function Flight({...flight} : Flight) {

    function getDateString(s: string | null | undefined) : string {
        if(!s) return ""

        const date = new Date(s)
        return `${date.getDate()}.${date.getMonth()+1}.${date.getFullYear()}`;
    }

    function getHourMinuteString(s: string | null | undefined) : string {
        if(!s) return ""

        const date = new Date(s)
        return `${date.getHours()}:${date.getMinutes()}`
    }

    function getFlightDurationString(departure: string | undefined, arrival: string | undefined) : string {
        if(!departure || !arrival) {
            return "";
        }

        const date1 = new Date(arrival);
        const date2 = new Date(departure);
        const difference = Math.abs(date1.getTime() - date2.getTime());
        const hours = Math.floor(difference / (1000 * 3600))
        const minutes = Math.floor((difference - (hours * 1000 * 3600)) / (1000 * 60))
        return `${hours}h ${minutes}m`
    }

    return (
        <Stack>
            <Stack direction="row" alignItems="center">
                <FlightIcon sx={{rotate: flight.inbound ? "90deg" : "270deg", mr: "5px"}}/>
                <Typography fontWeight="bold">{getDateString(flight.departureDatetime)}</Typography>
            </Stack>
            <Stack direction="row" sx={{height: "30px"}} alignItems="center">
                <Typography sx={{width: "100px"}}>{getHourMinuteString(flight.departureDatetime)}</Typography>
                <Box sx={{width: "15px", height: "15px", borderRadius: "1000px", backgroundColor: "gray"}}/>
                <Typography ml="10px">{flight.departureAirport}</Typography>
            </Stack>
            <Stack direction="row" sx={{height: "30px"}} alignItems="center">
                <Box sx={{ml: "100px"}}/>
                <Box sx={{width: "3px", height: "45px", ml: "6px", mr: "6px", backgroundColor: "gray"}}/>
                <Typography fontWeight="light" ml="10px">{getFlightDurationString(flight.departureDatetime, flight.arrivalDatetime)}</Typography>
            </Stack>
            <Stack direction="row" sx={{height: "30px"}} alignItems="center">
                <Typography sx={{width: "100px"}}>{getHourMinuteString(flight.arrivalDatetime)}</Typography>
                <Box sx={{width: "15px", height: "15px", borderRadius: "1000px", backgroundColor: "gray"}}/>
                <Typography ml="10px">{flight.arrivalAirport}</Typography>
            </Stack>
        </Stack>
    )
}