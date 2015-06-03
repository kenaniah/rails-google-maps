json.array!(@maps) do |map|
  json.extract! map, :id, :name, :address
  json.url map_url(map, format: :json)
end
