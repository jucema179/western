import React from 'react'
import { Switch, Route } from 'react-router-dom'
import styled from 'styled-components'
import PageUnderConstruction from './pages/PageUnderConstruction'
import NavigationBar from './landingPage/globalComponents/navbar'
import HomePageContainer from './landingPage/home/index'
import EnergyPageContainer from './landingPage/energy/index'
import SmartHomePageContainer from './landingPage/smartHome/index'
import VehiclePageContainer from './landingPage/vehicle/index'
import FindUSPageContainer from './landingPage/findUS/index'
import WaterPageContainer from './landingPage/water/index'
import PrivacityContainer from './landingPage/privacity/index'
import TermsContainer from './landingPage/terms/index'

import LoginPageContainer from './pages/login/Login'
// import { forgotPasswordPageContainer } from './pages/login/containers/ForgotPasswordPageContainer'
// import { resetPasswordPageContainer } from './pages/login/containers/ResetPasswordPageContainer'
// import { AdminPanelPage } from './pages/admin-panel'
// import HomePageContainer from './pages/home/containers/HomePageContainer'
// import PageNotFound from './pages/error404/components/pageNotFound'
// import { MapViewPageContainer } from './pages/map-view/containers/MapViewPageContainer'
// import PrivateRoute from './PrivateRoute'

// import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <Wrapper>
    <header>
      <NavigationBar />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/energy" component={EnergyPageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/smart-home" component={SmartHomePageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/vehicle" component={VehiclePageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/find-us" component={FindUSPageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/water" component={WaterPageContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/terms-of-use" component={TermsContainer} onUpdate={() => window.scrollTo(0, 0)} />
      <Route path="/privacity-policy" component={PrivacityContainer} onUpdate={() => window.scrollTo(0, 0)} />

      {/* <Route exact path="/mapa" component={MapViewPageContainer} />
      <PrivateRoute path="\/panel\/usuario(.+)?" adminOnly component={AdminPanelPage} />
      <PrivateRoute path="\/panel\/bitacora(.+)?" adminOnly component={AdminPanelPage} />
      <PrivateRoute path="/panel" adminOnly={false} component={AdminPanelPage} /> */}
      <Route path="/login" component={LoginPageContainer} />
      {/* <Route path="/forgotPassword" component={forgotPasswordPageContainer} />
      <Route path="/resetPassword" component={resetPasswordPageContainer} />
      <Route component={PageNotFound} /> */}
    </Switch>

    {/* <PageUnderConstruction /> */}
    {/* <Route path="/login" component={Login} /> */}
    {/* <header>
      <NavigationBar />
    </header>
    <Switch>
      <Route exact path="/" component={HomePageContainer} />
      <Route exact path="/mapa" component={MapViewPageContainer} />
      <PrivateRoute path="\/panel\/usuario(.+)?" adminOnly component={AdminPanelPage} />
      <PrivateRoute path="\/panel\/bitacora(.+)?" adminOnly component={AdminPanelPage} />
      <PrivateRoute path="/panel" adminOnly={false} component={AdminPanelPage} />
      <Route path="/login" component={LoginPageContainer} />
      <Route path="/forgotPassword" component={forgotPasswordPageContainer} />
      <Route path="/resetPassword" component={resetPasswordPageContainer} />
      <Route component={PageNotFound} />
    </Switch> */}
  </Wrapper>
);


const Wrapper = styled.div`

`

export default App
