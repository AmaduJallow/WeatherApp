const key = 'W6sHA10vWk3SqvGlbAG9z1H1UB8jpIet';

// Get whether information
const getWhether = async (id) => {
    const baseURL = 'http://dataservice.accuweather.com/currentconditions/v1/';
    const query = `${id}?apikey=${key}`;
    const response = await fetch(baseURL + query);
    const data = await response.json();
    return data[0];

};

// Get City information 
const getCity = async (location) => {
    const baseURL = 'http://dataservice.accuweather.com/locations/v1/cities/search';
    const query = `?apikey=${key}&q=${location}`;
    const response = await fetch(`${baseURL + query}`);
    const data = await response.json();
    return data[0];
};

