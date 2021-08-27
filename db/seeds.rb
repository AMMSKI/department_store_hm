# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require "faker"
Department.destroy_all
Item.destroy_all
Review.destroy_all

sportingGoods = Department.create(name:"Sporting Goods")
kitchen = Department.create(name:"Kitchen")
lawngarden = Department.create(name:"Lawn and Garden")
electronics = Department.create(name:"Electronics")

sportingGoods.items.create(name:"Baseball", discription: "10 pack")
sportingGoods.items.create(name:"Tennis racket", discription: "Premium racket")
sportingGoods.items.create(name:"Basketball hoop", discription: "10 ft. regulation hoop")
sportingGoods.items.create(name:"Golf Balls", discription: "10 pack of Pro V1s")

kitchen.items.create(name:"Dish set", discription: "10 bowls, 10 plates, full set of silverware")
kitchen.items.create(name:"Table cloth", discription: "Silk fine dining table cloth")
kitchen.items.create(name:"Toaster", discription: "4 slot toaster for all of you toasty needs")
kitchen.items.create(name:"Spices", discription: "Spice up your life with our array of spices")

lawngarden.items.create(name:"Lawn Mower", discription: "Mow through anything with our supercharged ridable lawn mower!!" )
lawngarden.items.create(name:"Fertilizer", discription: "Grow all the plants;) you want with our fertilizer" )
lawngarden.items.create(name:"Gardening tool set", discription: "Everything you need to get your garden ready for Spring!!" )

electronics.items.create(name:"Macbook Pro", discription: "More computing power than you'll probably ever need.. ")
electronics.items.create(name:"Xbox Games", discription: "Kill some zombies and take over the street with our Xbox games ")


def seed_reviews
  departments = Department.all
  departments.each do |department|
    department.items.each do |item|
    3.times do 
      item.reviews.create(stars:Faker::Number.between(from: 1, to: 5), body:Faker::Restaurant.review)
      end
    end
  end
end

seed_reviews