# Google Maps API in Rails

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

### Add the Map Template

`views/layouts/application.html.erb`

```erb
  <!-- Add the google maps library -->
  <script src="//maps.googleapis.com/maps/api/js"></script>
```

Also modified the following views:

 * `views/maps/show.html.erb`
 * `views/maps/index.html.erb`

