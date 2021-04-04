import React, { lazy, Suspense } from "react";
import { Provider } from "use-http";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
} from "react-router-dom";
import { Header } from "./components/Header/Header";
import styles from "./App.module.css";

const HomePage = lazy(() => import("./pages/home"));
const MatchDetails = lazy(() => import("./pages/match-details"));

export const App: React.FC = () => {
  return (
    <div className={styles.app}>
      <Header />
      <Suspense fallback={null}>
        <Provider url="https://rtcwproapi.donkanator.com">
          <Router>
            <Switch>
              <Route path="/matches/:matchId" render={() => <MatchDetails />} />
              <Route path="/" render={() => <HomePage />} />
              <Redirect to="/" />
            </Switch>
          </Router>
        </Provider>
      </Suspense>
    </div>
  );
};
