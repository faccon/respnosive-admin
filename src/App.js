import logo from "./logo.svg";
import "./App.css";
import { Header } from "./components/Header";

function App() {
  document.addEventListener("DOMContentLoaded", function (event) {
    // To open the drawer
    document.querySelector("#menu-btn").addEventListener("click", function () {
      document.querySelector("aside").style.display = "block";
    });

    // To close the drawer
    // document.querySelector("#close-btn").addEventListener("click", function () {
    //   document.querySelector("aside").style.display = "none";
    //   console.log(event);
    // });

    // To toggle the theme
    // document
    //   .querySelector(".theme-toggler")
    //   .addEventListener("click", function () {

    //     // document.body.classList.toggle("dark-theme-variables");
    //   });
  });

  // themetoggler.addEventListener("click", () => {
  //   console.log('pressed');
  //   document.body.classList.toggle("dark-theme-variables");
  // });

  // menuBtn.addEventListener("click", () => {
  //   sideMenu.style.display = "block";
  // });

  // closeBtn.addEventListener("click", () => {
  //   sideMenu.style.display = "none";
  // });

  return (
    <div className="container">
      {/* -------------------- ASIDE SECTION  */}

      <aside>
        <div className="top">
          <div className="logo">
            <img src="/assets/images/logo.png" />
            <h2>
              EGA<span className="danger">TOR</span>
            </h2>
          </div>

          <div className="close" id="close-btn">
            <span className="material-icons-sharp">close</span>
          </div>
        </div>

        <div className="sidebar">
          <a href="#">
            <span className="material-icons-sharp">grid_view</span>
            <h3>Dashboard</h3>
          </a>
          <a href="#" className="active">
            <span className="material-icons-sharp">person_outline</span>
            <h3>Customers</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">receipt_long</span>
            <h3>Orders</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">insights</span>
            <h3>Analytics</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">mail_outline</span>
            <h3>Messages</h3>
            <span className="message-count">26</span>
          </a>
          <a href="#">
            <span className="material-icons-sharp">inventory</span>
            <h3>Products</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">report_gmailerrorred</span>
            <h3>Reports</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">settings</span>
            <h3>Settings</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">add</span>
            <h3>Add Product</h3>
          </a>
          <a href="#">
            <span className="material-icons-sharp">logout</span>
            <h3>Logout</h3>
          </a>
        </div>
      </aside>

      {/* ------------- END OF ASIDE SECTION */}

      <main>
        <h1>Dashboard</h1>

        <div className="date">
          <input type="date" />
        </div>

        <div className="insights">
          {/* ----------- START OF SALES */}
          <div className="sales">
            <span className="material-icons-sharp">analytics </span>
            <div className="middle">
              <div className="left">
                <h3>Total Sales</h3>
                <h1>$25,024</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>{" "}
                </svg>
                <div className="number">
                  <p>81%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* -----------------END OF SALES */}

          {/* ----------- START OF EXPENSES */}
          <div className="expenses">
            <span className="material-icons-sharp">bar_chart </span>
            <div className="middle">
              <div className="left">
                <h3>Total Expenses</h3>
                <h1>$14,160</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>{" "}
                </svg>
                <div className="number">
                  <p>62%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* -----------------END OF EXPENSES */}

          {/* ----------- START OF INCOME */}
          <div className="income">
            <span className="material-icons-sharp">stacked_line_chart </span>
            <div className="middle">
              <div className="left">
                <h3>Total Income</h3>
                <h1>$10,864</h1>
              </div>

              <div className="progress">
                <svg>
                  <circle cx="38" cy="38" r="36"></circle>{" "}
                </svg>
                <div className="number">
                  <p>44%</p>
                </div>
              </div>
            </div>
            <small className="text-muted">Last 24 Hours</small>
          </div>
          {/* -----------------END OF INCOME */}
        </div>
        {/* ------------  END OF INSIGHTS */}

        {/* -------------RECENT ORDERS */}
        <div className="recent-order">
          <h2>Recent Orders</h2>
          <table>
            <thead>
              <tr>
                <th>Product Name</th>
                <th>Product Number</th>
                <th>Payment</th>
                <th>Status</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td> Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td> Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td> Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td> Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
              <tr>
                <td>Foldable Mini Drone</td>
                <td>85631</td>
                <td> Due</td>
                <td className="warning">Pending</td>
                <td className="primary">Details</td>
              </tr>
            </tbody>
          </table>
          <a href="#">Show All</a>
        </div>
      </main>
      {/* --------------------END OF CENTER GRID (MAIN) */}

      <div className="right">
        <div className="top">
          <button id="menu-btn">
            <span className="material-icons-sharp">menu</span>
          </button>
          <div className="theme-toggler">
            <span className="material-icons-sharp active">light_mode</span>
            <span className="material-icons-sharp">dark_mode</span>
          </div>
          <div className="profile">
            <div className="infor">
              <p>
                Hey, <b>Daniel</b>
              </p>
              <small className="text-muted">Admin</small>
            </div>
            <div className="profile-photo">
              <img src="/assets/images/profile-1.jpg" alt="profile-picture-1" />
            </div>
          </div>
        </div>
        {/* -------------END OF TOP */}

        <div className="recent-updates">
          <h2>Recent Updates</h2>
          <div className="updates">
            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/profile-2.jpg" alt="profile-2" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b> received his order
                </p>
                <small className="text-muted"> 2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/profile-3.jpg" alt="profile-2" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b> received his order
                </p>
                <small className="text-muted"> 2 Minutes Ago</small>
              </div>
            </div>
            <div className="update">
              <div className="profile-photo">
                <img src="/assets/images/profile-4.jpg" alt="profile-2" />
              </div>
              <div className="message">
                <p>
                  <b>Mike Tyson</b> received his order
                </p>
                <small className="text-muted"> 2 Minutes Ago</small>
              </div>
            </div>
          </div>
        </div>
        {/* --------- end of recent updates */}

        <div className="sales-analytics">
          <h2>Sales Analytics</h2>
          <div className="item online">
            <div className="icon">
              <span className="material-icons-sharp">shopping_cart</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>ONLINE ORDERS</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className="success"> +30% </h5>
              <h3>3849</h3>
            </div>
          </div>
          <div className="item offline">
            <div className="icon">
              <span className="material-icons-sharp">local_mall</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>OFFLINE ORDERS</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className="danger"> -17% </h5>
              <h3>1100</h3>
            </div>
          </div>
          <div className="item customers">
            <div className="icon">
              <span className="material-icons-sharp">person</span>
            </div>
            <div className="right">
              <div className="info">
                <h3>NEW CUSTOMERS</h3>
                <small className="text-muted">last 24 hours</small>
              </div>
              <h5 className="danger"> +25% </h5>
              <h3>849</h3>
            </div>
          </div>

          <div className="item add-product">
            <div>
              <span className="material-icons-sharp">add</span>
              <h3>Add Product</h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
