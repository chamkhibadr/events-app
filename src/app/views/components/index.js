import React, { Fragment, useState, useEffect } from 'react';
import { Navbar } from '../../components'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import '../../styles/App.css'
import { list } from '../../data'
import { SubscribedPage } from './Subscribed'
import { Home } from './Home'
import UserProfileContextProvider  from '../../lib/UserProfileContext'

const App = props => {
  const { items, saveLocalStorage } = props
  const [category, setCategory] = useState(0)
  const [isFiltering, setFiltering] = useState(false)
  const [filterRed, setfilterRed] = useState(false)
  const [count, setCount] = useState(1);

  const loadCategory = i => { setCategory(i) }
  const filterResults = (input) => {
    let fullList = list.flat()
    let results = fullList.filter(item => {
      const name = item.name.toLowerCase()
      const term = input.toLowerCase()
      return name.indexOf(term) > -1
    })
    setfilterRed(results)
  }
  useEffect(() => {
    saveLocalStorage(items)
  }, [items])

  return (
    <Fragment>
      <Router>
        <UserProfileContextProvider>
          <Navbar filter={filterResults} setFiltering={setFiltering} count={count} />
          <Route exact path="/" component={() => <Home
            category={category}
            loadCategory={loadCategory}
            isFiltering={isFiltering}
            list={list}
            filterRed={filterRed} />}
          />
          <Route path="/Subscribed" component={SubscribedPage} />
        </UserProfileContextProvider>
      </Router>
    </Fragment>
  );
}
export default App;
