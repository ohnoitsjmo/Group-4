    <template>
      <div class="profile">
        <header style='margin-top: 127px'>
          <body style="font-size: 30px; display:block; text-align:left; color: #ff5733;">Welcome Back, Sandra</body>
        </header>
        <v-card>
    <v-navigation-drawer
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list>
          <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item>

          <v-list-item
            link
            two-line
          >
            <v-list-item-content>
              <v-list-item-title class="title">Sandra Adams</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <v-divider></v-divider>

      <v-list
        nav
        dense
      >
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-folder</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account Home</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-account-multiple</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Purchases</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Track Order</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-star</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account Settings</v-list-item-title>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
    <v-content>
      Menu
    </v-content>
  </v-card>
  <v-content>
    <v-title>
      Menu
    </v-title>
    </v-content>
      </div> 
  </template>

  <script>
    export default {
      name: 'ProfileDetails',
      data() {
        return {
          username: {
            name: '',
            email: '',
          },
        }
      },
    }
  </script>

  <style scoped>
    form {
      margin-bottom: 2rem;
    }
    .header {
    padding: 10px;
    text-align: right;
    background: #eee;
    color: #42b983;
    font-size: 30px;

    }
    a {
    background-color: #eee; /* Grey background color */
    color: black; /* Black text color */
    display: block; /* Make the links appear below each other */
    padding: 12px; /* Add some padding */
    text-decoration: none; /* Remove underline from links */
  }

    ul {
    background-color: #eee; 
    color: black; 
    display: table; 
    padding: 0px; 
    font-size: 18px;
    text-decoration: none;
    width: 170px;
    height: 200;
    list-style-type: none;
    margin: 0;
    }
    column {
    float: left;
    padding: 10px;
    }
    a:hover {
    background-color: #ccc; /* Dark grey background on mouse-over */
    }
  table {
    font-family: "Trebuchet MS", Arial, Helvetica, sans-serif;
    border-collapse: collapse;
    width: 70%;
  }

  table td, customers th {
    border: 1px solid #ddd;
    padding: 8px;
  }

  table tr:nth-child(even){background-color: #f2f2f2;}

  table tr:hover {background-color: #ddd;}

  table th {
    padding-top: 12px;
    padding-bottom: 12px;
    text-align: center;
    background-color: #42b983;
    color: white;
  }
  </style>


  // <column>
  //       <ul>
  //         <a onclick='document.getElementById("customers").innerHTML = "Acount Home!"'>Account Home</a>
  //         <a onclick='document.getElementById("customers").innerHTML =  document.getElementById("customers").classList'>Purchases</a>
  //         <a onclick='document.getElementById("customers").innerHTML = "Track Order!"'>Track Order</a>
  //         <a onclick='document.getElementById("customers").innerHTML = "Acount Settings!"'>Account Settings</a>
  //       </ul>
  //       </column>
  //       <body id="body">
  //       <table id="customers">
  //         <tr>
  //           <th>Order#</th>
  //           <th>Status</th>
  //           <th>Total</th>
  //         </tr>
  //         <tr>
  //          <td>001</td>
  //          <td>Delivered</td>
  //           <td>$200</td>
  //         </tr>
  //       </table>
  //       </body>
  //     </div>