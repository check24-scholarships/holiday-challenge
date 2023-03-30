import {Paths} from "@/app/types/openapi";
import {ReadonlyURLSearchParams} from "next/navigation";

export function GetBestOffersByHotelToQuery(input: Paths.GetBestOffersByHotel.QueryParameters): string {
    const params = {
        earliestDepartureDate: input.earliestDepartureDate,
        latestReturnDate: input.latestReturnDate,
        duration: input.duration.toString(),
        countAdults: input.countAdults.toString(),
        countChildren: input.countChildren.toString(),
    };

    const searchParams = new URLSearchParams(params);
    
    // cant pass an object with an array to URLSearchParams --> append individually
    input.departureAirports.forEach((airport) => {
        searchParams.append("departureAirports", airport);
    })

    return searchParams.toString();
}

export function GetBestOffersByHotelFromQuery(query: ReadonlyURLSearchParams): Paths.GetBestOffersByHotel.QueryParameters {
    return {
        earliestDepartureDate: query.get("earliestDepartureDate") as string,
        latestReturnDate: query.get("latestReturnDate") as string,
        countAdults: parseInt(query.get("countAdults") as string),
        countChildren: parseInt(query.get("countChildren") as string),
        departureAirports: query.getAll("departureAirports"),
        duration: parseInt(query.get("duration") as string),
    };
}

export function GetHotelOffersFromQuery(query: ReadonlyURLSearchParams): Paths.GetHotelOffers.QueryParameters & Paths.GetHotelOffers.PathParameters {
    return {
        earliestDepartureDate: query.get("earliestDepartureDate") as string,
        latestReturnDate: query.get("latestReturnDate") as string,
        countAdults: parseInt(query.get("countAdults") as string),
        countChildren: parseInt(query.get("countChildren") as string),
        departureAirports: query.getAll("departureAirports"),
        duration: parseInt(query.get("duration") as string),
        hotelId: parseInt(query.get("hotelId") as string),
    }
}