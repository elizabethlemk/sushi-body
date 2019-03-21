class UsersController < ApplicationController
  
  def searchForResturants
    ENDPOINT = 'https://api.yelp.com/v3/businesses/search'
    HEADERS = {'Authorization': 'bearer #{API_KEY}'}

# PARAMETERS ={
#   'term': '#{searchTerm}',
#   'limit': 50,
#   'radius': 8000,
#   'latitude': '#{latitude}',
#   'longitude': '#{longitude}'
# }
PARAMETERS ={
  'term': 'sushi',
  'limit': 50,
  'radius': 8000,
  'latitude': '40.7008972',
  'longitude': '-73.9876024'
}

response = RestClient.get(url = ENDPOINT, params= PARAMETERS, headers =HEADERS)
response = response.json()
  end
end
