# Apartment Application

## Create new Rails project with a PostgreSQL database

```shell
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:generate
$ rails s
```

## Add rspec to the Application

```shell
$ bundle add rspec-rails
$ rails generate rspec:install
```

## Add Devise to the application

```shell
$ bundle add devise
```

<!-- Depending on your application's configuration some manual setup may be required:

  1. Ensure you have defined default url options in your environments files. Here
     is an example of default_url_options appropriate for a development environment
     in config/environments/development.rb:

       config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

     In production, :host should be set to the actual host of your application.

     * Required for all applications. *

  2. Ensure you have defined root_url to *something* in your config/routes.rb.
     For example:

       root to: "home#index"

     * Not required for API-only Applications *

  3. Ensure you have flash messages in app/views/layouts/application.html.erb.
     For example:

       <p class="notice"><%= notice %></p>
       <p class="alert"><%= alert %></p>

     * Not required for API-only Applications *

  4. You can copy Devise views (for customization) to your app by running:

       rails g devise:views

     * Not required * -->

```shell
$ rails generate devise User
```

## Add React

```shell
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
```

## Serve React Components

```shell
$ rails generate controller Home
```

### Added index.html.erb and input component call

```html
<%= react_component 'App' %>
```

### direct the Rails app to serve the React App.js component as the landing page

```ruby
# ../config/routes.rb

Rails.application.routes.draw do
  resources :apartments
  devise_for :users
  root 'home#index'
end
```

### Updated Javascript file with class component

```javascript
import React, { Component } from 'react'

class App extends Component {
  render() {
    return(
      <>
        <h1>Hello World!</h1>
      <>
    )
  }
}

export default App
```

### Generate Apartment Resource

```shell
$ rails g resource Apartment street:string city:string state:string manager:string email:string price:string
$ rails db:migrate
```

### create relationship between users and apartments

```ruby
# ./app/models/user.rb
class User < ApplicationRecord
  # Include default devise modules. Others available are:
  # :confirmable, :lockable, :timeoutable, :trackable and :omniauthable
  devise :database_authenticatable, :registerable,
         :recoverable, :rememberable, :validatable
  has_many :apartments
end
```

## Navigation

### As an unregistered user, I can see the navigation options for a page with all the apartment listings, a page where I can create an account, and always get back to the home page.

```shell
$ git checkout -b navigation
```

```ruby
# ./config/environments/development.rb
# Creates a special model called User that gets devise code injected into each new model instance.
# allows for devise sign in and sign up forms
config.action_mailer.default_url_options = { host: 'localhost', port: 3000 }

# ./config/routes.rb
<%= react_component 'App', {
  logged_in: user_signed_in?,
  current_user: current_user,
  new_user_route: new_user_registration_path,
  sign_in_route: new_user_session_path,
  sign_out_route: destroy_user_session_path
} %>
```

```shell
$ bundle add bootstrap
$ yarn add reactstrap
$ yarn add react-router-dom@5.3.0
```

```ruby
class ApplicationController < ActionController::Base
    skip_before_action :verify_authenticity_token
end
```