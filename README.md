# Apartment Application

## Generating Rails Application

```shell
$ rails new apartment-app -d postgresql -T
$ cd apartment-app
$ rails db:greate
$ rails s
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
```

### Created React Component in Rails Application

```shell
$ bundle add react-rails
$ rails webpacker:install:react
$ rails generate react:install
$ rails generate react:component App
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
