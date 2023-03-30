| Name                      | Description                                                                                                                   |
|---------------------------|-------------------------------------------------------------------------------------------------------------------------------|
| hotelid                   | ID of the hotel that is referenced by the offer                                                                               |
| outbounddeparturedatetime | Datetime that describes, when the trip starts (this is the time, when the flight to the destination is scheduled to take off) |
| inbounddeparturedatetime  | Datetime that describes, when the trip end (this is the time, when the flight back home is scheduled to take off)             |
| countadults               | Number of adults the offer is valid for                                                                                       |
| countchildren             | Number of children the offer is valid for                                                                                     |
| price                     | Total price in Euro (includes flight and hotel for all travellers)                                                            |
| inbounddepartureairport   | Airport from where the return (aka inbound) flight back home will take off (IATA[^1] code)                                    |
| inboundarrivalairport     | Airport where the inbound flight back home will land (IATA[^1] code)                                                          |
| inboundarrivaldatetime    | Datetime that describes, when the inbound flight will land                                                                    |
| outbounddepartureairport  | Airport from where the outward (aka outbound) flight to the trip's destination will take off (IATA[^1] code)                  |
| outboundarrivalairport    | Airport where the outbound flight to the trip's destination will land (IATA[^1] code)                                         |
| outboundarrivaldatetime   | Datetime that describes, when the outbound flight will land                                                                   |
| mealtype                  | Type of the mealplan that is included at the hotel (e.g. none, breakfast, allinclusive, ...)                                  |
| oceanview                 | Indicates if the the ocean is visible from the room where the travellers will be staying                                      |
| roomtype                  | Type of the hotelroom where the travellers will by staying (e.g. single, double, suite, …)                                    |

[^1]: IATA: The **I**nternational **A**ir **T**ransport **A**ssociation supports aviation with global standards for airline safety, security, efficiency and sustainability. 
It provides a location identifier to identify an airport by a unique 3-letter code.