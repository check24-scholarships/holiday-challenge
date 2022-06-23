# CHECK24 GenDev Holiday Challenge

> "*Summer is coming, let's go on holidays.*" 

Searching for a nice place to go and planning your next holiday is not just a fun activity for a lazy afternoon - 
it is also an exciting problem to solve in IT.
At CHECK24, we search and present billions of offers to our customers every day, especially now as summer is coming.
Now it's time for you to try that as well 😊☀️

## What is the challenge
We provide you with [~72 million real offers](https://check24-holiday-challenge.s3.eu-central-1.amazonaws.com) for Mallorca that have been sampled randomly from our system.
Build a simple version of a comparison service that supports users on their search for a trip to Mallorca.  
You can look at [urlaub.check24.de](https://urlaub.check24.de) for inspiration. 
Put your project on GitHub and use it to apply for the [GenDev Scholarship](https://check24.de/gen-dev).

### Basic requirements that your application should fulfill
- When searching for offers users should be able to enter the following parameters:
  - a period of time when they want to travel
  - the number of persons (how many adults and how many children) that are travelling
  - one or multiple airports from where they want to travel
  - the search form could look like something like [this](./images/search.png)
- Your system then uses these parameters to search for available offers
- The resulting offers are presented on a result page
  - for most searches you will get a lot of offers ("7 days, 2 adults, somewhere in August 2022, starting from Munich" will return >100K offers for 1173 different hotels)
  - therefore, it makes sense to show results in two different views:
    1) show only one offer for every hotel (could look like [this](./images/result-all-hotels.png)) => for the example above, we would show 1173 items (one per hotel) 
    2) show all offers for a single hotel (could look like [this](./images/result-single-hotel.png))
  - a user gets from view 1 to view 2 by selecting one hotel (in the example screenshot from above he would click on "zu den Angeboten")
  - users should be able to see and edit their search (this could be a filter on the left-hand side)
  - you won't have images for the hotels, so you can either use a placeholder for images or you display results without showing images

### Some guidelines
- you can freely choose the type of application you are building (app, webapp, website, ...)
- the tech stack is also up to you (though it's probably a good idea if you use languages you are familiar with)
- of course, you can make use of frameworks 
- try to split your efforts between frontend and backend evenly (ideally you split them 50:50)
- try to focus on the most important things to produce a working prototype and do not spend too much time on details (e.g. it's totally fine to just display the airline code on the result page without mapping it to the full airline name first) 
- please include a little README.md for your project

### Possible improvements
There are a lot of possible improvements and cool features you can add to your system.
Just some ideas:
- make your result page interactive (e.g. add pagination, sorting, filters that apply instantly) so that users can play around with their results
- add more filters (e.g. mealtype or roomtype)
- dockerize your system so that anyone can run it on their machine
- focus on speed: try to make your search as fast as possible (e.g. you could try to make use of caching or to even implement a custom data structure to store all the offers in memory and no longer query them from a database)

### Note 
This challenge is **not** about ticking boxes 
(we give you basic requirements only to guide your project in the right direction).
I should be a coding project that is fun for you to work on 😊
There is no time limit. 
You can also work on it in a group of up to three people.
If you are working together, please try to split the work somehow evenly.
Each group member has to apply for the scholarship on his own and include a link to the GitHub repo that includes the code.
Include your GitHub username in your application then so that we can see who worked and committed on which parts of your project (so please make use of Git commits and don't provide us with one single big commit).

## Datasets
We provide you with two datasets for this challenge.
Both are stored in an [AWS S3 bucket](https://check24-holiday-challenge.s3.eu-central-1.amazonaws.com).

### Offers
Rows in our offer dataset will look like this:

| hotelid | departuredate             | returndate                | countadults | countchildren | price | inbounddepartureairport | inboundarrivalairport | inboundairline | inboundarrivaldatetime    | outbounddepartureairport | outboundarrivalairport | outboundairline | outboundarrivaldatetime   | mealtype  | oceanview | roomtype    |
|---------|---------------------------|---------------------------|-------------|---------------|-------|-------------------------|-----------------------|----------------|---------------------------|--------------------------|------------------------|-----------------|---------------------------|-----------|-----------|-------------|
| 326     | 2022-10-05T09:30:00+02:00 | 2022-10-12T08:35:00+02:00 | 1           | 1             | 1243  | PMI                     | DUS                   | LH             | 2022-10-12T14:40:00+02:00 | DUS                      | PMI                    | LH              | 2022-10-05T14:25:00+02:00 | halfboard | FALSE     | double      |
| 62125   | 2022-07-01T11:00:00+02:00 | 2022-07-08T07:30:00+02:00 | 2           | 0             | 1710  | PMI                     | LEJ                   | EW             | 2022-07-08T10:00:00+02:00 | LEJ                      | PMI                    | EW              | 2022-07-01T13:30:00+02:00 | none      | FALSE     | apartment   |
| 8163    | 2022-09-13T15:50:00+02:00 | 2022-09-21T07:50:00+02:00 | 2           | 0             | 2093  | PMI                     | FRA                   | DE             | 2022-09-21T10:10:00+02:00 | FRA                      | PMI                    | DE              | 2022-09-13T17:55:00+02:00 | breakfast | FALSE     | double      |
| 1058311 | 2022-08-07T18:00:00+02:00 | 2022-08-12T08:20:00+02:00 | 2           | 0             | 1707  | PMI                     | MUC                   | EWG            | 2022-08-12T10:35:00+02:00 | MUC                      | PMI                    | EWG             | 2022-08-07T20:15:00+02:00 | none      | FALSE     | double      |
| 115523  | 2022-09-20T17:35:00+02:00 | 2022-09-26T07:20:00+02:00 | 2           | 0             | 1866  | PMI                     | SCN                   | EW             | 2022-09-26T09:30:00+02:00 | SCN                      | PMI                    | EW              | 2022-09-20T19:40:00+02:00 | breakfast | FALSE     | juniorsuite |
| 1282    | 2023-06-07T06:25:00+02:00 | 2023-06-13T09:20:00+02:00 | 1           | 0             | 2131  | PMI                     | STR                   | DE             | 2023-06-13T11:25:00+02:00 | STR                      | PMI                    | DE              | 2023-06-07T08:30:00+02:00 | breakfast | FALSE     | single      |
| 15714   | 2022-08-23T05:55:00+02:00 | 2022-08-30T07:50:00+02:00 | 2           | 0             | 1153  | PMI                     | HAM                   | DE             | 2022-08-30T10:35:00+02:00 | HAM                      | PMI                    | DE              | 2022-08-23T08:40:00+02:00 | none      | FALSE     | apartment   |
| 322     | 2022-08-29T15:10:00+02:00 | 2022-09-02T18:10:00+02:00 | 3           | 0             | 1653  | PMI                     | FDH                   | BUC            | 2022-09-02T20:20:00+02:00 | FDH                      | PMI                    | BUC             | 2022-08-29T17:10:00+02:00 | breakfast | FALSE     | triple      |
| 1274    | 2022-08-26T17:50:00+02:00 | 2022-08-30T10:00:00+02:00 | 2           | 0             | 980   | PMI                     | STR                   | VY             | 2022-08-30T12:10:00+02:00 | STR                      | PMI                    | EW              | 2022-08-26T19:50:00+02:00 | breakfast | FALSE     | double      |
| 1238    | 2022-08-26T17:50:00+02:00 | 2022-08-30T10:00:00+02:00 | 2           | 0             | 1175  | PMI                     | STR                   | VY             | 2022-08-30T12:10:00+02:00 | STR                      | PMI                    | EW              | 2022-08-26T19:50:00+02:00 | halfboard | FALSE     | double      |

Every row represents an offer that can be booked by a customer. 
Every offer includes two flights (one that takes travellers to their destination and another one that takes travellers back) and a hotel room where all travellers will stay.
For a description on the columns take a look at [offers.md](./offers.md).

#### Let's take a look at a small example
Which offers from the table above do match if I want to go to Mallorca with one additional person (so I am looking for an offer for two adults) for 7 days somewhere in July or August?
As I am living in Hamburg (airport code for Hamburg is HAM), I also want to start and end my trip there.  
The 2nd and the 7th offer from the table above match the time when I want to travel and are valid for 2 adults.
Only the 7th offer includes the right airports (remember, I want to start my trip in Hamburg).
So if your application only knows the 10 offers from the table above the result page would only display a single offer to me (the 7th one).

#### File formats
We provide the same dataset in two different file formats on S3:
- [.parquet](https://check24-holiday-challenge.s3.eu-central-1.amazonaws.com/offers.parquet)
- [.csv.zip](https://check24-holiday-challenge.s3.eu-central-1.amazonaws.com/offers.csv.zip)

You can choose the one you want to work with, they contain the same data.
[Parquet](https://parquet.apache.org/docs/) is just a bit more efficient and is therefore smaller.

### Hotels
Additionally, you can make use of a [second dataset](https://check24-holiday-challenge.s3.eu-central-1.amazonaws.com/hotels.csv). 
It contains some basic information (name, position and stars) about the hotels that are referenced by id from the offer dataset.
You can use it to enrich offers with some additional info to make them more interesting for users.

| hotelid | hotelname                                          | latitude  | longitude | hotelstars |
|---------|----------------------------------------------------|-----------|-----------|------------|
| 56      | Iberostar Playa de Muro                            | 39.807587 | 31.17354  | 4.0        |
| 59      | Prinsotel La Pineda                                | 39.714230 | 34.58655  | 4.0        |
| 77      | Protur Palmeras Playa                              | 39.570175 | 33.73098  | 4.0        |
| 91      | Grupotel Gran Vista & Spa                          | 39.765926 | 31.46741  | 4.0        |
| 92      | Playa Esperanza Hotel                              | 39.803432 | 31.18755  | 4.0        |
| 102     | Cala d´Or Hotel - Erwachsenenhotel                 | 39.371323 | 32.29219  | 4.0        |
| 175     | Valentin Paguera Hotel & Suites - Erwachsenenhotel | 39.540016 | 24.48173  | 3.0        |

For a description on the columns take a look at [hotels.md](./hotels.md).

## How do I hand in my project?
Put your project on GitHub and include the link to the repository when you submit your application for the scholarship.
If you want to keep your repository private, that's fine.
Provide READ permissions to [this GitHub account](https://github.com/Hackfred) then, so that we can see what you have been building. 

## Questions?
In case of any questions, contact martin.kellner@check24.de.
