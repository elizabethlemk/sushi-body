class User < ApplicationRecord
  #for password encryption
  has_secure_password

  # model relationships
  has_many :reviews, dependent: :destroy
  has_many :favorites, dependent: :destroy
  has_many :bookmarks, dependent: :destroy


end
