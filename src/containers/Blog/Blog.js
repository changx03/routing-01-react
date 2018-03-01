import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Posts from '../Posts';
import NewPosts from '../../components/NewPost/NewPost';
import './Blog.css';

class Blog extends Component {
  render() {
    return (
      <div className="Blog">
        <header>
          <nav>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li>
                <Link 
                  to={{
                    pathname: '/new-post',
                    hash: '#submit',
                    search: ''
                  }}
                >
                  New post
                </Link>
              </li>
            </ul>
          </nav>
        </header>
        <Route path="/" exact component={Posts}/>
        <Route path="/new-post" exact component={NewPosts}/>
        {/* <Route path="/" render={() => <h1>Home</h1>} /> */}
      </div>
    );
  }
}

export default Blog;
