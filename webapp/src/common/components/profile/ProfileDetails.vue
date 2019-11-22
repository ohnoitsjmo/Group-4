    <template>
      <div class="profile" >
        <header style='margin-top: 127px'>
          <body style="font-size: 30px; display:block; text-align:left; color: #ff5733;">Welcome Back, Sandra Adams</body>
        </header>
        <UserDetails/>
        
         <p style="position: absolute;margin-left: 90px;">asdf<UserDetails2/></p>
        <v-card style="display: inline;">
    <v-navigation-drawer
      expand-on-hover
      permanent
    >
      <template v-slot:prepend>
        <v-list>
          <!-- <v-list-item>
            <v-list-item-avatar>
              <v-img src="https://randomuser.me/api/portraits/women/85.jpg"></v-img>
            </v-list-item-avatar>
          </v-list-item> -->

          <v-list-item
            link
            two-line
            style="margin-bottom:150px"
          >
            <v-list-item-content>
              <v-list-item-title class="title">S.A.</v-list-item-title>
              <v-list-item-subtitle>sandra_a88@gmail.com</v-list-item-subtitle>
            </v-list-item-content>
            <v-list-item-action>
              <v-icon>mdi-menu-down</v-icon>
            </v-list-item-action>
          </v-list-item>
        </v-list>
      </template>

      <!-- <v-divider ></v-divider> -->

      <!-- <v-list
        nav
        dense
      >
        <v-list-item link @click="routeToHome">
          <v-list-item-icon>
            <v-icon>mdi-home</v-icon>
          </v-list-item-icon>
          <v-list-item-title>HomePage</v-list-item-title>
        </v-list-item>
        <v-list-item link @click="routeToOrders">
          <v-list-item-icon>
            <v-icon>mdi-basket</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Orders</v-list-item-title>
        </v-list-item>
        <v-list-item link>
          <v-list-item-icon>
            <v-icon>mdi-settings-outline</v-icon>
          </v-list-item-icon>
          <v-list-item-title>Account Settings</v-list-item-title>
        </v-list-item>
      </v-list> -->
    </v-navigation-drawer>
   
  </v-card>
      </div> 
  </template>

  <script>
    import UserDetails from "@/common/components/profile/UserDetails.vue";
    import UserDetails2 from "@/common/components/profile/UserDetails2.vue";
    export default {
      name: 'ProfileDetails',
      components: {
      UserDetails,
      UserDetails2,
      },
      data() {
        return {
          username: {
            name: '',
            email: '',
          },
        }
      },
      methods: {
        routeToHome () {
          this.$router.push('/');
        },
        routeToOrders () {
          this.$router.push('/orders');
        }
      }
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