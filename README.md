# CHECK24 GenDev Holiday Challenge

"Summer is coming, let's go on holidays." 

Searching for a nice place to go and planning your next holiday is not just a funny activity for a lazy afternoon - 
it is also an exciting problem to solve in IT.
At CHECK24 we search and present billions of offers to our customers every day, especially now as summer is coming.
Now it's time for you to try that as well :)

## What is the challenge
We provide you with ~200 million real offers for Mallorca that have been sampled randomly from our system.
Build a simple version of a comparison service that supports users on their search for a trip to Mallorca. 
You can freely choose the type of application (app, webApp, website, ...) and the tech stack. 
If you want you can look at [urlaub.check24.de](https://urlaub.check24.de) for inspiration you can. 
Put your project on GitHub and use it to apply for the [GenDev Scholarship](https://check24.de/gen-dev).

**Basic Requirements** that your application should fulfill:
- When searching for offers users should be able to enter the following parameters:
  - a period of time when they want to travel
  - the number of persons (how many adults and how many children) that are travelling
  - one or multiple airports from where they want to travel
- Your system then uses these parameters to search for available offers
- The resulting offers are presented on a result page displaying the most relevant information to the users

There are a lot of possible improvements and cool features you can add to your system.
Just some ideas:
- make your result page interactive (e.g. add pagination, sorting or filters that apply instantly) so that users can play around with their results
- add more filters (e.g. mealtype or roomtype)
- dockerize your system so that anyone can run it on their machine
- focus on speed: try to make your search as fast as possible

### Note 
This challenge is not about ticking boxes 
(we give you basic requirement only to guide your project in the right direction).
I should be coding project that is fun for you to work on :)
There is no time limit. You can also work on it in a group of up to three people.

## Dataset
Rows in our dataset will look like this:

| hotelid | departuredate             | returndate                | duration | countadults | countchildren | price | inbounddepartureairport | inboundarrivalairport | inboundairline | inbounddeparturedatetime  | outbounddepartureairport | outboundarrivalairport | outboundairline | outbounddeparturedatetime | mealtype     | oceanview | roomtype |
|---------|---------------------------|---------------------------|----------|-------------|---------------|-------|-------------------------|-----------------------|----------------|---------------------------|--------------------------|------------------------|-----------------|---------------------------|--------------|-----------|----------|
| 878     | 2022-09-27T19:00:00+02:00 | 2022-10-06T06:40:00+02:00 | 9        | 2           | 0             | 1379  | AYT                     | LEJ                   | XQ             | 2022-10-06T06:40:00+02:00 | LEJ                      | AYT                    | PC              | 2022-09-27T19:00:00+02:00 | allinclusive | FALSE     | double   |
| 878     | 2022-07-24T12:00:00+02:00 | 2022-08-04T08:00:00+02:00 | 11       | 2           | 1             | 3138  | AYT                     | NRN                   | XC             | 2022-08-04T08:00:00+02:00 | NRN                      | AYT                    | XC              | 2022-07-24T12:00:00+02:00 | allinclusive | FALSE     | bungalow |
| 878     | 2022-06-23T13:05:00+02:00 | 2022-07-03T06:00:00+02:00 | 10       | 2           | 0             | 4067  | AYT                     | DUS                   | TWI            | 2022-07-03T06:00:00+02:00 | DUS                      | AYT                    | TWI             | 2022-06-23T13:05:00+02:00 | allinclusive | FALSE     | double   |
| 878     | 2022-07-06T13:45:00+02:00 | 2022-07-14T07:35:00+02:00 | 8        | 2           | 1             | 2492  | AYT                     | HAM                   | PC             | 2022-07-14T07:35:00+02:00 | HAM                      | AYT                    | PC              | 2022-07-06T13:45:00+02:00 | allinclusive | FALSE     | bungalow |
| 878     | 2022-10-08T20:10:00+02:00 | 2022-10-15T07:35:00+02:00 | 7        | 2           | 0             | 3065  | AYT                     | HAM                   | PC             | 2022-10-15T07:35:00+02:00 | HAM                      | AYT                    | TK              | 2022-10-08T20:10:00+02:00 | allinclusive | FALSE     | double   |

## Questions?
In case of any questions, contact martin.kellner@check24.de.














