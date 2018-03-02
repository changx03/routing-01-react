import React, { Component } from 'react';
import { Route, NavLink, withRouter, Switch, Redirect } from 'react-router-dom';
import Posts from '../Posts';
import NewPosts from '../../components/NewPost/NewPost';
import FullPost from '../../components/FullPost/FullPost';
import './Blog.css';

class Blog extends Component {
  componentDidMount() {
    console.log('[Blog]', this.props);
  }

  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li>
                <NavLink
                  to="/posts"
                  exact
                  activeClassName="my-active"
                  activeStyle={{
                    color: '#fa923f',
                    textDecoration: 'underline',
                  }}
                >
                  Home
                </NavLink>
              </li>
              <li>
                <NavLink
                  to={{
                    pathname: '/new-post', // absolute path: '/new' = 'new' this.props.match.url + /new'
                    hash: '#submit',
                    search: '?quick-submit=true&id=111',
                  }}
                  exact
                >
                  New post
                </NavLink>
              </li>
            </ul>
          </nav>
        </header>
        <Switch>
          <Route path="/new-post" component={NewPosts} />
          <Route path="/posts" component={Posts} />
          <Redirect from="/" to="/posts" />
          {/* <Route path="/:id" exact component={FullPost}/> */}
          {/* <Route path="/" render={() => <h1>Home</h1>} /> */}
        </Switch>
      </div>
    );
  }
}

export default withRouter(Blog);
