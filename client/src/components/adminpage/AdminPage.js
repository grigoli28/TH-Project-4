import React, { Component } from "react";
import "./AdminPage.css";
import { BrowserRouter as Router, Route ,Link} from "react-router-dom";

class AdminPage extends Component {
  render() {
    return (
      <div className="ae">
        <input type="checkbox" id="navcheck" role="button" title="menu" className="admin-input" />

        <label for="navcheck" aria-hidden="true" title="menu" className="admin-label">
          <span className="burger">
            <span className="bar">
              <span className="visuallyhidden">Menu</span>
            </span>
          </span>
        </label>
        <nav id="menu" className="admin-nav">
          <Link to ="/">Users</Link>
          <Link to ="/Files">Upload Files</Link>
          <Link to ="/Contact">Contact</Link>
         
        </nav>
        <main>
          <article className="content">
            <section>
              <div className="tbl-header">
                <table cellpadding="0" cellspacing="0" border="0">
                  <thead>
                    <tr>
                      <th>Users</th>
                      <th>Mail</th>
                      <th>Purchases</th>
                      <th />
                    </tr>
                  </thead>
                </table>
              </div>
              <div className="tbl-content">
                <table cellpadding="0" cellspacing="0" border="0">
                  <tbody>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$1.38</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$2.38</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$3.22</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$1.02</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com </td>
                      <td>$1.38</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$2.38</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                    <tr>
                      <td>User</td>
                      <td>User@gmail.com</td>
                      <td>$3.22</td>
                      <td>
                        <button className="admin-btn">EDIT</button>
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </section>
          </article>
        </main>
      </div>
    );
  }
}

export default AdminPage;
