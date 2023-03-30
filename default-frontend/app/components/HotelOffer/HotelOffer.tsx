import { Button, Card, CardContent, CardHeader, Divider, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Flight from "@/app/components/Flight/Flight";
import {Components} from "@/app/types/openapi"
import { Bed, RestaurantMenu, Water } from "@mui/icons-material";
type Offer = Components.Schemas.Offer

export default function HotelOffer({offer}: {offer: Offer}) {
    function getTravelDurationString(departure: string | undefined, arrival: string | undefined) : string {
        if(!departure || !arrival) {
            return "";
        }

        const date1 = new Date(arrival);
        const date2 = new Date(departure);
        const difference = Math.abs(date1.getTime() - date2.getTime());
        return Math.ceil(difference / (1000 * 3600 * 24)).toString();
    }

    return (
        <Card>
            <CardHeader sx={{backgroundColor: "#ededed"}} title={<Typography fontWeight="bold">{getTravelDurationString(offer.outbundDepartureDatetime, offer.inboundArrivalDatetime)} Days - {offer.outboundDepartureAirport}, {offer.outboundArrivalAirport}</Typography>}/>
            <CardContent>
                <Stack direction="row" justifyContent="space-between">
                    <Stack gap={2}>
                        <Flight 
                            inbound={true} 
                            departureDatetime={offer.outbundDepartureDatetime}
                            departureAirport={offer.outboundDepartureAirport}
                            arrivalDatetime={offer.outboundArrivalDatetime}
                            arrivalAirport={offer.outboundArrivalAirport}
                        />
                        <Flight 
                            inbound={false} 
                            departureDatetime={offer.inboundDepartureDatetime}
                            departureAirport={offer.inboundDepartureAirport}
                            arrivalDatetime={offer.inboundArrivalDatetime}
                            arrivalAirport={offer.inboundArrivalAirport}
                        />
                    </Stack>
                    <Stack gap={2}>
                        <Stack direction="row" alignItems="center">
                            <RestaurantMenu/>
                            <Typography ml={1} variant="body1">{offer.mealType}</Typography>
                        </Stack>
                        <Stack direction="row" alignItems="center">
                            <Bed/>
                            <Typography ml={1} variant="body1">{offer.roomType}</Typography>
                        </Stack>
                        {offer.oceanView && 
                            <Stack direction="row" alignItems="center">
                                <Water/>
                                <Typography ml={1} variant="body1">Oceanview</Typography>
                            </Stack>
                        }
                    </Stack>
                    <Stack justifyContent="end" gap={2}>
                        <Stack m={0} direction="row" divider={<Divider orientation="vertical" flexItem/>} spacing={1}>
                            <Typography variant="body1">{getTravelDurationString(offer.outbundDepartureDatetime, offer.inboundArrivalDatetime)} Days</Typography>
                            <Typography variant="body1">{offer.countAdults} Adults</Typography>
                            <Typography variant="body1">{offer.countChildren} Children</Typography>
                        </Stack>
                        <Typography variant="h5" textAlign="right">{offer.price} €</Typography>
                        <Button variant="contained">Book</Button>
                    </Stack>
                </Stack>
            </CardContent>
        </Card>
    )
}