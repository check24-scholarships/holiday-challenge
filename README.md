# CHECK24 GenDev Holiday Challenge

> "*Summer is coming, let's go on holidays.*"

Searching for a nice place to go and planning your next holiday is not just a fun activity for a lazy afternoon - it is
also an exciting problem to solve in IT. At CHECK24, we search and present billions of offers to our customers every
day, especially now as summer is coming. Now it's time for you to try that as well 😊☀️

## What is the challenge

We provide you with [>100 million real offers](#datasets) for Mallorca that have been sampled randomly from our system.
Build a simple version of a comparison service that supports users on their search for a trip to Mallorca.  
You can look at [urlaub.check24.de](https://urlaub.check24.de) for inspiration. Put your project on GitHub and use it to
apply for the 3rd round of the [GenDev Scholarship](https://check24.de/gen-dev). 
Applications are open between 1st of April and 31st of May 2023.

Generally, this problem can be divided into two parts:

1) Structuring the data and making it searchable while having good performance (e.g. by building a backend service)
2) Providing visualization for the user to allow searching through that data (by building some kind of frontend, e.g. a
  native app or a single page application)

To give you a little head start, we provide you with a default solution for part 2 of the problem. 
This repository contains the code for a minimal single page application (SPA) that can act as a frontend for your comparison service.
The code can be found [here](/default-frontend).
You can use that SPA as is, or you can modify it to fit your needs. 
You can also build your own frontend solution if you want (e.g. because you want to demonstrate your frontend skills), you are not obliged to use the provided SPA. 
If you adapt the SPA or build your own solution it should provide at least all the features from our SPA. 
We provide it only to you to save you some time :)

Either way you have to solve part 1 of the problem (structuring the data and making it searchable).
We do not provide you with a solution for that we only give you some requirements (see next section).

### Minimal requirements

If you take a closer look at the SPA you can see that you need to support two types of search queries:

1) A user wants to get a list of unique hotels that have at least one offer for a given search. A search consists of a
   list of parameters (list of start departureAirports, earliestDepartureDate, latestReturnDate, countAdults, countChildren, duration).
   As every hotel is only once in that result list, only the cheapest offer for every hotel should be shown here.
2) After taking a look at the results from query 1 a user might select a single hotel. This second query should now
   return a list of available offers for that hotel only. Remember: in query 1 only the cheapest offer has been loaded.
   Now we want to get all the offers.

Both of these use cases are handled by the minimal SPA (it has two different pages, one for each use case).

Users don't like long loading times. Results for both queries should load in **less than 5s** (95th percentile). If
possible try to aim for **less than 1s**.

### Possible improvements

There are a lot of possible improvements and cool features you can add to your system. Just some ideas:

1) Add additional filters (e.g. mealtype or roomtype)
2) Allow users to shortlist certain offers
3) Dockerize your system so that anyone can run it on their machine
4) Focus on speed: try to make your search as fast as possible
   (e.g. you could try to make use of caching or to even implement a custom data structure to store all the offers in
   memory and no longer query them from a database)
   Query times <100ms are absolutely possible here.

### Note

This challenge is **not** primarily about ticking boxes (we give you minimal requirements only to guide your project in the right direction).
It should be a coding project that is fun for you to work on 😊
There is no time limit.
Try to build something cool you are proud of and impress us (by having outstanding performance, a clever UI or some cool additional features).
We are excited for your solutions.

## Datasets

We provide you with two datasets (offers and hotels) for this challenge.
The hotel dataset is part of this repository and can be found [here](data/hotels.csv).
To get access to the offer dataset write a short email with subject "Holiday Challenge" to [holidaychallenge@check24.de](mailto:holidaychallenge@check24.de).
Within 24 hours you will get a response with your personalized link to download that data.

### Offers

Rows in our offer dataset will look like this:

| hotelid | outbounddeparturedatetime | inbounddeparturedatetime  | countadults | countchildren | price | inbounddepartureairport | inboundarrivalairport | inboundarrivaldatetime    | outbounddepartureairport | outboundarrivalairport | outboundarrivaldatetime   | mealtype  | oceanview | roomtype    |
|---------|---------------------------|---------------------------|-------------|---------------|-------|-------------------------|-----------------------|---------------------------|--------------------------|------------------------|---------------------------|-----------|-----------|-------------|
| 90      | 2022-10-05T09:30:00+02:00 | 2022-10-12T08:35:00+02:00 | 1           | 1             | 1243  | PMI                     | DUS                   | 2022-10-12T14:40:00+02:00 | DUS                      | PMI                    | 2022-10-05T14:25:00+02:00 | halfboard | FALSE     | double      |
| 1096    | 2022-07-01T11:00:00+02:00 | 2022-07-08T07:30:00+02:00 | 2           | 0             | 1710  | PMI                     | LEJ                   | 2022-07-08T10:00:00+02:00 | LEJ                      | PMI                    | 2022-07-01T13:30:00+02:00 | none      | FALSE     | apartment   |
| 656     | 2022-09-13T15:50:00+02:00 | 2022-09-21T07:50:00+02:00 | 2           | 0             | 2093  | PMI                     | FRA                   | 2022-09-21T10:10:00+02:00 | FRA                      | PMI                    | 2022-09-13T17:55:00+02:00 | breakfast | FALSE     | double      |
| 1880    | 2022-08-07T18:00:00+02:00 | 2022-08-12T08:20:00+02:00 | 2           | 0             | 1707  | PMI                     | MUC                   | 2022-08-12T10:35:00+02:00 | MUC                      | PMI                    | 2022-08-07T20:15:00+02:00 | none      | FALSE     | double      |
| 1190    | 2022-09-20T17:35:00+02:00 | 2022-09-26T07:20:00+02:00 | 2           | 0             | 1866  | PMI                     | SCN                   | 2022-09-26T09:30:00+02:00 | SCN                      | PMI                    | 2022-09-20T19:40:00+02:00 | breakfast | FALSE     | juniorsuite |
| 231     | 2023-06-07T06:25:00+02:00 | 2023-06-13T09:20:00+02:00 | 1           | 0             | 2131  | PMI                     | STR                   | 2023-06-13T11:25:00+02:00 | STR                      | PMI                    | 2023-06-07T08:30:00+02:00 | breakfast | FALSE     | single      |
| 757     | 2022-08-23T05:55:00+02:00 | 2022-08-30T07:50:00+02:00 | 2           | 0             | 1153  | PMI                     | HAM                   | 2022-08-30T10:35:00+02:00 | HAM                      | PMI                    | 2022-08-23T08:40:00+02:00 | none      | FALSE     | apartment   |
| 86      | 2022-08-29T15:10:00+02:00 | 2022-09-02T18:10:00+02:00 | 3           | 0             | 1653  | PMI                     | FDH                   | 2022-09-02T20:20:00+02:00 | FDH                      | PMI                    | 2022-08-29T17:10:00+02:00 | breakfast | FALSE     | triple      |
| 223     | 2022-08-26T17:50:00+02:00 | 2022-08-30T10:00:00+02:00 | 2           | 0             | 980   | PMI                     | STR                   | 2022-08-30T12:10:00+02:00 | STR                      | PMI                    | 2022-08-26T19:50:00+02:00 | breakfast | FALSE     | double      |
| 187     | 2022-08-26T17:50:00+02:00 | 2022-08-30T10:00:00+02:00 | 2           | 0             | 1175  | PMI                     | STR                   | 2022-08-30T12:10:00+02:00 | STR                      | PMI                    | 2022-08-26T19:50:00+02:00 | halfboard | FALSE     | double      |

Every row represents an offer that can be booked by a customer, in total the dataset contains 72353411 rows. Every offer
includes two flights (one that takes travellers to their destination and another one that takes travellers back) and a
hotel room where all travellers will stay. For a description on the columns take a look at [offers.md](data/offers.md).

#### Let's take a look at a small example

Which offers from the table above do match if I want to go to Mallorca with one additional person (so I am looking for
an offer for two adults) for 7 days somewhere in July or August? As I am living in Hamburg (airport code for Hamburg is
HAM), I also want to start and end my trip there.  
The 2nd and the 7th offer from the table above match the time when I want to travel and are valid for 2 adults. Only the
7th offer includes the right airports (remember, I want to start my trip in Hamburg). So if your application only knows
the 10 offers from the table above the result page would only display a single offer to me (the 7th one).

### Hotels

Additionally, you can make use of a second dataset (hotels.csv). It contains some basic information (name and stars)
about the hotels that are referenced by id from the offer dataset. You can use it to enrich offers with some additional
info to make them more interesting for users.

| hotelid | hotelname                 | hotelstars |
|---------|---------------------------|------------|
| 1       | Iberostar Playa de Muro   | 4.0        |
| 2       | Prinsotel La Pineda       | 4.0        |
| 3       | BlueSea Gran Playa        | 4.0        |
| 4       | Grupotel Gran Vista & Spa | 4.0        |
| 5       | Playa Esperanza Hotel     | 4.0        |
| 6       | Hotel Cala d'Or           | 4.0        |
| 7       | Valentin Paguera          | 3.0        |

For a description on the columns take a look at [hotels.md](data/hotels.md).

## How do I hand in my project?

Create a private GitHub repository and commit your code there. Provide READ permissions
to holidaychallenge@check24.de then, so that we can see what you have been building. When you
hand in your application for the scholarship on [our scholarship website](https://www.talents.check24.de/gendev) include
the link to your GitHub repository.

**What should be included:**

1) Your working code
2) A toplevel README.md that explains your approach (including possible optimizations)
3) We want to see your project in action. To achieve that there are two options:
   1) Make your project runnable for everybody (e.g. by having a docker-compose.yaml). If this is possible for your
      project please add a section **How to run locally** to your project's README.md.
   2) Run your project in your own environment and demonstrate it by using screen recording (there are plenty of tools
      that can support you with that). The recoding should show the main use features of your system (run a few search
      queries, filters, ...). Upload that video somewhere (e.g. YouTube or some other cloud and include a link to it in
      your README.md).

## Questions?

In case of any questions, contact holidaychallenge@check24.de.
