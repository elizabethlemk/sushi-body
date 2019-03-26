
require 'byebug'
require 'rest-client'
# require './concerns/config.rb'
require_relative '/Users/johnoncher/dev/mod-4/sushi-body/back-end/app/models/concerns/config.rb'

class User < ApplicationRecord
  has_secure_password

  # model relationships
  has_many :reviews, through: :bookmarks, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :bookmarks, dependent: :destroy

  def search_for_array_of_resturants(latitude,longitude)
    endpoint = 'https://api.yelp.com/v3/businesses/search'
    api_key = getApiKey()

    param = {
      term: 'sushi',
      latitude: latitude,
      longitude: longitude,
      limit: 10,
      categories:'conveyorsushi,sushi',
       sort_by: 'distance',
       radius: 8000
    }

    response = RestClient.get(
      'https://api.yelp.com/v3/businesses/search',
       :Authorization => "bearer #{api_key}",
       params: param
    )
    response = JSON.parse(response)
    return response["businesses"]
  end

end
