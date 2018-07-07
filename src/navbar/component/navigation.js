import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { NAVIGATION_CONSTANT } from "../navConstant.js";

class Navigation extends React.PureComponent {
  constructor(props) {
    super(props);
  }

  render() {
    const { onNavClick } = this.props;
    return (
      <Router>
        <React.Fragment>
          <div className="c-navbar">
            <div className="c-navbar__item" id="topNav">
              <ul>
                {NAVIGATION_CONSTANT.map(nav => {
                  return (
                    <li key={nav.key} className="c-navbar__items">
                      <Link to={nav.path}>{nav.label}</Link>
                    </li>
                  );
                })}
              </ul>
              <div className="c-navbar__icon">
                  <i className="fa fa-bars" onClick={onNavClick} />
              </div>
            </div>
          </div>
          {NAVIGATION_CONSTANT.map((route, index) => (
            <Route
              key={index}
              path={route.path}
              exact={route.exact}
              component={route.sidebar}
            />
          ))}
        </React.Fragment>
      </Router>
    );
  }
}

export default Navigation;
