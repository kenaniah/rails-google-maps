# Google Maps API in Rails

[![Build Status](https://travis-ci.org/kenaniah/rails-google-maps.svg?branch=master)](https://travis-ci.org/kenaniah/rails-google-maps)

A basic Rails project to demonstrate how Google Maps can be used.

## Walkthrough to Replicate

### Initialize the Project

Run this:

```bash
rails new rails-google-maps
cd rails-google-maps
bundle
rails g scaffold maps name:string address:text
rake db:migrate
rake db:seed
```

And then `rails s` in a new terminal tab

### View the Glorious Diff

Did you know GitHub has an awesome commit comparison feature? Check out the glorious diff that shows every change I made on top of the base rails framework:

https://github.com/kenaniah/rails-google-maps/compare/e8dc23ddc0135de2dc2ae053e451241f2f08af4f...master
