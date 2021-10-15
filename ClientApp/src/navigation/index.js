import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';

import {book} from "./book";

import { Views } from "../views";
import { Header, Footer } from "../components";
import { AdminHistoryLog, Home, User, Shop, Unknown } from '../pages';


export const Routes = () => (
  <>
    <Route
      component={ Header }
      path={ book.users }
    />
    <Route
      component={ Footer }
      path={ book.users }
    />
    <Switch>
      <Route exact path={ book.users } >
        <Views.Facade>
          <Home />
        </Views.Facade>
      </Route>
      <Route path={book.user} render={(props) => (
        <Views.Facade>
          <User {...props} />
        </Views.Facade>
      )}
       />

      <Route exact path={ book.shop } >
        <Views.Facade>
          <Shop />
        </Views.Facade>
      </Route>
      <Route exact path={ book.admin } >
        <Views.Facade>
          <AdminHistoryLog/>
        </Views.Facade>
      </Route>
      <Route path="/404" component={Unknown} />
    <Redirect to="/404" />
    </Switch>
  </>
);