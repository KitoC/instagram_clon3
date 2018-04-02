class Post < ApplicationRecord
  validates :user_id, presence: true
  mount_uploader :image, PostImageUploader
  has_many :comments
  belongs_to :user
end
