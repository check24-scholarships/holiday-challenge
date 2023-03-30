import {Box, Button, Card, CardMedia, Divider, Rating, Stack, Typography} from "@mui/material";
import {Components} from "@/app/types/openapi";
import BestHotelOffer = Components.Schemas.BestHotelOffer;

interface Properties {
    offer: BestHotelOffer
}

export default function Hotel({offer}: Properties) {
    return (
        <Card variant="outlined" sx={{display: 'flex'}}>
            <Box sx={{backgroundImage: `url("/hotels/${(offer.hotel.id % 40) + 1}.jpg")`, width: "355.5px",height: "200px", backgroundSize: "cover"}}/>
            <Box sx={{
                p: 1,
                pl: 2,
                display: 'flex',
                width: '100%',
                flexDirection: 'row',
                justifyContent: 'space-between'
            }}>
                <Stack direction="column" justifyContent="space-between">
                    <Typography sx={{mr: 2}} variant="h6">{offer.hotel.name}</Typography>

                    <Stack>
                        <Typography variant="body1">Halfboard</Typography>
                        <Typography variant="body1">Apartment</Typography>
                    </Stack>

                    <Button variant="contained">View {offer.countAvailableOffers} offers</Button>
                </Stack>
                <Stack direction="column" justifyContent="space-between" alignItems="flex-end">
                    <Rating value={offer.hotel.stars} readOnly/>

                    <Stack>
                        <Stack m={0} direction="row" divider={<Divider orientation="vertical" flexItem/>}
                               spacing={1}>
                            <Typography>{offer.duration} Days</Typography>
                            <Typography>{offer.countAdults} Adults</Typography>
                            <Typography>{offer.countChildren} Children</Typography>
                        </Stack>
                        <Typography variant="h6" textAlign="right">from {offer.minPrice} €</Typography>
                    </Stack>
                </Stack>
            </Box>
        </Card>
    );
}