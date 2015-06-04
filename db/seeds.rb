# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rake db:seed (or created alongside the db with db:setup).
#
# Examples:
#
#   cities = City.create([{ name: 'Chicago' }, { name: 'Copenhagen' }])
#   Mayor.create(name: 'Emanuel', city: cities.first)
Map.delete_all
Map.create([
	{name: 'White House', address: '1600 Pennsylvania Avenue Northwest, Washington, DC 20500'},
	{name: 'Department of Defense', address: '1000 Defense Pentagon Washington, DC 20301-1000'},
	{name: 'Best burgers in LA', address: '333 North Verdugo Road, Glendale, CA 91206'},
	{name: 'GA', address: '1520 2nd St., Santa Monica, CA'}
])
