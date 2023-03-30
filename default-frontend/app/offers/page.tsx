"use client";

import {OpenAPIClientAxios, Parameters} from "openapi-client-axios";
import {Client, Components, Paths} from "@/app/types/openapi"
import HotelOffer from "@/app/components/HotelOffer/HotelOffer";
import {useSearchParams} from 'next/navigation';
import {useEffect, useState} from "react";
import {Box, Rating, Typography} from "@mui/material";
import {Stack} from "@mui/system";
import {GetHotelOffersFromQuery} from "@/app/types/converter";

type HotelOffer = Components.Schemas.GetHotelOffersResponse

export default function Page() {
    const query = useSearchParams()
    const [hotelOffer, setHotelOffer] = useState<HotelOffer>();

    async function fetchData() {
        const parameters = GetHotelOffersFromQuery(query);
        console.log(parameters);
        const api = new OpenAPIClientAxios({definition: 'http://localhost:8090/openapi', withServer: 0})
        const client = await api.init<Client>()
        const response = await client.GetHotelOffers(parameters)
        setHotelOffer(response.data)
    }

    useEffect(() => {
        fetchData().catch(console.error);
    }, []);

    if (hotelOffer == null) {
        return <p>Loading offers...</p>
    }

    return (
        <>
            <Stack direction="row" pt={5} alignItems="center">
                <Typography variant="h4" mr={2}>{hotelOffer.hotel.name}</Typography>
                <Rating value={hotelOffer.hotel.stars} readOnly/>
            </Stack>
            <Stack direction="row" height="250px" pt={2}>
                <Box sx={{borderTopLeftRadius: "5px", borderBottomLeftRadius: "5px", backgroundImage: `url("/hotels/${(hotelOffer.hotel.id % 40) + 1}.jpg")`, width: "50%", backgroundSize: "cover", backgroundPosition: "center"}}/>
                <Box sx={{borderTopRightRadius: "5px", borderBottomRightRadius: "5px", backgroundImage: `url("/rooms/${(hotelOffer.hotel.id % 30) + 1}.jpg")`, width: "50%", backgroundSize: "cover", backgroundPosition: "center"}}/>
            </Stack>
            <Typography pt={2} variant="h6">Offers:</Typography>
            <Stack gap={2} mt={1}>
                {hotelOffer.items.map(offer =>
                    <HotelOffer key={offer.price} offer={offer}/>
                )}
            </Stack>
        </>
    )
}