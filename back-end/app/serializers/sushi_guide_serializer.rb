class SushiGuideSerializer < ActiveModel::Serializer
  attributes :id, :type_one, :type_two, :name, :english, :kanji, :hiragana, :katakana, :img
end
