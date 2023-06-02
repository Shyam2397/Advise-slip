Advise slip Fetch API]

Front end deploy URL : https://quiet-jelly-4f345b.netlify.app/

Advice Slip JSON API

Random advice

    Note: Advice is cached for 2 seconds. Any repeat-request within 2 seconds will return the same piece of advice.

    HTTP Method	: GET
    URL       	: https://api.adviceslip.com/advice
    Description	: Returns a random advice slip as a slip object.
    Parameters  : callback - string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.


Advice by ID

    HTTP Method	: GET
    URL	        : https://api.adviceslip.com/advice/{slip_id}
    Description	: If an advice slip is found with the corresponding {slip_id}, a slip object is returned.
    Parameters	: callback - string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.

Searching advice
    
    HTTP Method	: GET
    URL	        : https://api.adviceslip.com/advice/search/{query}
    Description	: If an advice slip is found, containing the corresponding search term in {query}, an array of slip objects is returned inside a search object.
    Parameters	: callback - string To define your own callback function name and return the JSON in a function wrapper (as JSONP), add the parameter callback with your desired name as the value.
