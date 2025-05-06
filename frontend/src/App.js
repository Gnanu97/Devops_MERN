//importing react modules
import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Container } from 'react-bootstrap'
import Header from './components/Header'
//importing all of the created screens
import HomeScreen from './screens/HomeScreen'
import PlanScreen from './screens/PlanScreen'
import AboutScreen from './screens/AboutScreen'
import ContactScreen from './screens/ContactScreen'
import LoginScreen from './screens/LoginScreen'
import RegisterScreen from './screens/RegisterScreen'
import ProductListScreen from './screens/ProductListScreen'
import ProductEditScreen from './screens/ProductEditScreen'

//the app component acts as a holder for all the created components/screens. I have used react router to simplify user navigation
const App = () => {
  return (
    <Router>
      <Header />
      <main className='py-3'>
        <Container>
          <Route path='/login' component={LoginScreen} />
          <Route path='/register' component={RegisterScreen} />
          <Route
            path='/admin/productlist'
            component={ProductListScreen}
            exact
          />
          <Route
            path='/admin/productlist/:pageNumber'
            component={ProductListScreen}
            exact
          />
          <Route path='/admin/product/:id/edit' component={ProductEditScreen} />
          <Route path='/search/:keyword' component={PlanScreen} exact />
          <Route path='/page/:pageNumber' component={PlanScreen} exact />
          <Route
            path='/search/:keyword/page/:pageNumber'
            component={PlanScreen}
            exact
          />
          <Route path='/' component={HomeScreen} exact />
          <Route path='/plans' component={PlanScreen} exact />
          <Route path='/about' component={AboutScreen} exact />
          <Route path='/contact' component={ContactScreen} exact />
        </Container>
      </main>
    </Router>
  )
}

export default App
