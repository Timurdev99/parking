# Parking Sever

This is test project for managing parking lot.

## Requirements

For development, you will only need Node.js and some node global packages installed in your environment.

## Install

npm init

## Running the project

    $ npm start
    or
    $ yarn start

## REST Apis

    1. Park a Car
        post https://localhost:port/api/park
        body {car: car_number}
        
        This api takes a car number as input and outputs slot number where it is parked.

        If the car is already booked, it returns an error message like 'The car is already booked'.
        If the parking lot is full, it returns an error message like 'Parking lot is full'.

    2. Unpark a Car
        post https://localhost:port/api/unpark
        body {slot: slot_number}

        This api takes a slot number as input and frees the slot for future cars and send success result.

        If the slot does not exist, it returns an error message like 'The slot number does not exist'.
    
    3. Get the Car/Slot Information
        get https://localhost:port/api/info/:type/:number

        This api takes either the slot number or car number and return both slot number and car number.
        The type is used to determine the type of the number: 'slot' for slot number and 'car' for car number.

        If the type is not 'slot' or 'car', it returns an error message like 'Invalid type'.
        If the type is 'slot' and the slot number does not exist, it returns an error message like 'The slot number does not exist'.
        If the type is 'car' and the car number does not exist, it returns an error message like 'The car is not booked'.
    
## Other Funtionality

    This project also rate-limit the number of requests coming in.
    For example, if a user makes more than 10 requests in 10 seconds, it returns an error message like 'You made too many requests in short duration'.

## Environment Configuration.

    In .env file, you can set 4 environments.

    1. PORT: Set port of server.
    2. PARKING_LOT_SIZE: Set size of parking lot.
    3. LIMIT_REQUEST: Set number of requests for rate-limit.
    4. LIMIT_DURATION: Set duration for rate-limit.