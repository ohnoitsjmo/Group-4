  <template>
    <div id="app">
    <!-- ANNOUNCEMENTS -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">ANNOUNCEMENTS</div>
            <PostedAnnouncements :announcements="announcements" v-bind:key="this.loading"/>
          </div> 
          <!-- <div class="text-center">
            <v-pagination
              v-model="page"
              :length="4"
              circle
              prev-icon="mdi-menu-left"
              next-icon="mdi-menu-right"
              ></v-pagination>
          </div> -->
      </div>
    </header>

    <!-- ABOUT US -->
    <section class="page-section" id="services">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">ABOUT US</h2>
            <!-- <h3 class="section-subheading text-muted">Insert Bio Here.</h3> -->
            <p class="text-muted " style="margin-left:200px; margin-right: 200px">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Sed turpis tincidunt id aliquet risus. Consequat interdum varius sit amet mattis vulputate enim. Sem nulla pharetra diam sit amet nisl suscipit. Morbi tempus iaculis urna id volutpat. Interdum velit laoreet id donec ultrices tincidunt arcu non. Augue lacus viverra vitae congue eu. Diam in arcu cursus euismod quis viverra nibh cras. Consequat mauris nunc congue nisi vitae suscipit tellus mauris. Dictumst quisque sagittis purus sit. Vestibulum rhoncus est pellentesque elit. Et netus et malesuada fames ac. Eget nullam non nisi est sit. Viverra maecenas accumsan lacus vel facilisis. Nibh tortor id aliquet lectus proin. Sit amet mattis vulputate enim nulla aliquet. Pulvinar etiam non quam lacus. Faucibus vitae aliquet nec ullamcorper sit amet risus nullam. Ut venenatis tellus in metus.</p>
          </div>
        </div>
      </div>
    </section>

    <!-- SHOP BY CATEGORY -->
    <section class="bg-light page-section" id="portfolio">
      <div class="container">
        <div class="row">
          <div class="col-lg-12 text-center">
            <h2 class="section-heading text-uppercase">SHOP BY CATEGORY</h2>
          </div>
        </div>
        <div class="row">
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Strings')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJsCLoYVnXSyiVGJgjIi_8ua76Dy4_n1Sgcufv49pZdQLuKcvS4w&s"
              />   
            </a>
            <div class="portfolio-caption">
              <h4>Strings</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Woodwinds')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="data:image/jpeg;base64,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"
              />   
            </a>
            <div class="portfolio-caption">
              <h4>Woodwinds</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Brass')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQxdORrQ77C5kayST73VjtcUh2z9bgRo-bjJE-vkzwkkk65F3cJow&s"
              />   
            </a>
            <div class="portfolio-caption">
              <h4>Brass</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Keys')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRVDx26FP3S3bE0kmmI8cCGOvTCC92XFkXlWzACMAwxYnVCGx7y&s"
              />   
            </a>
            <div class="portfolio-caption">
              <h4>Keys</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Percussion')">

              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="data:image/jpeg;base64,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"
              />            
            </a>
            <div class="portfolio-caption">
              <h4>Percussion</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" v-on:click = "saveCategory('Accessories')">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <v-img
                contain
                class="white--text align-end"
                src="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBxMTEhUSEhIVFRUVFxcYFhcVFRcWFhciGBYXFxcXFxUaHSgsGCYlGxUWITEhJikrLi4wFx8zODMtNygtLisBCgoKDg0OFQ8PFysdHx0rLSstKystLSsuLTIrKy0rLS0tLS0tLS0tMjcrNzc3LSwrLSsrLSstKysrLTcrKysrK//AABEIAOEA4QMBIgACEQEDEQH/xAAcAAEAAQUBAQAAAAAAAAAAAAAAAwIEBgcIAQX/xABDEAABAwIDBQUDCAgFBQAAAAABAAIDBBESITEFBgdBURNhcYGRIjKhI0JScrHB0fAUM1NigpKi4QgVY4OyJHOjwvH/xAAXAQEBAQEAAAAAAAAAAAAAAAAAAQID/8QAGhEBAQEAAwEAAAAAAAAAAAAAABEBITFREv/aAAwDAQACEQMRAD8A3iiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIi+JtPeqkgyfM0uBthZ7RBGdnEZNNvpEIPtoteVnFqkb7rSe572s8ssX5CopeLlK42cw8vcka89+RDdFKsbGRfF2JvPTVWUUntfQd7LvwPkSvtKoIiICIiAiIgIiICIiAiIgIiICIiAiIgIsf3o3up6Ft5XDFbJgIBzvYuPzRl49AVrCu41yYj2bIg2+V2vLh3YsVj44R4JVjd6LSuzOMz3PaJTC1meImKUm2vzXdOgKzLZnEukmDsBa4tDjYSMaXYTnhY8tNyMwCBceClIzhfL25t6GkZjmdbo0e862th95yHVYJt3i/AyP5KJ2M6dqWeOTWOdi9RbmtL7f3hnrZHPme6xzsdT0vy8AMhy6oZnrNN8uK8s5MVPkzMWaThPi7Iv+Dc+outeVNVPMbyPJ7ibD0GSojyGQVbdDf8AD1RUTaIn53oFHJRnTFe/JXueWnlzVLc3HPJuX4oKdl7ZqaV2KKRzDYAg2c0gEOthOVrgaWW1uF/FID/p66RzsTwGSOzDARzcTc56g3trcjIamqhlZWT47Z8iiO1Wm69WsOBm9jqmmdSyuxS01sJOro3e6e/CQW+GFbPVQREQEREBERAREQEREBERARFFLUsb7z2t+s4D7UEq+BvtvLHs+lfUSZkZRs5vcfdaPPM9ylrN6qOMEuqYzbUMcJCPEMvbXmueeJW+B2jU3aSIIso231v7z8svPxzIsivgbX2nLWTOmneXEkn91t+Q6dPTkrd0DANPDPVUF2QXhKiq30jDb2jfmrZ8HK91KUQUNjAUoZle9lRdehBcQw5XKkBGencoNP7o5BI94uD0y9QreVhabg5L3EvX5tsg8EmKypOd22ytkoIznZTtOduSDJOEe1zTbUpiTZsrjA/vEvstB/3OzPkuqFxfS1JimEo1jkY8fwuDvuXaCrIiIgIiwfi/vFLRUGKElsk0jYWvGseJr3ucO/DGQOhIPJB9nam+VFTuLJJxjBsWsa55B6EtBDT3EhfCquK9CzRk7/qtj+x0gPwXN7pHH3nE9LklUBqix0pJxPpQcPsNfrhknjba9vecLgHPQXWMS8bxypmD/ec7n07NtlpEMHRVFFbbqeNs/wAyOAdzo5XeVxI37FYTcZa06YG/Ujb8MeJazFlVYIjNpuK+0Dl27zp8yJp/oYFY1PECvfn284+rPI0eYabLF36KoaBFfUqd5KqT3yX63xuxa+JVsNrTjTC36thytp4K0ugKCSpq5pMpJDawyvqMwMuYuOahDbKeFmLLxA88x8WhQEoPSV4iIBXl16vS3JBQCq41EApoygqcRz8MkeqDyUpGX5/P/wBQQ81W7RUOCFBBob+gVwwaAqmCHO58lM5ttEHz5Rm9drrit0Zc8saM3FrR4kgD7V2oqmiIiILDOL2xjU7LnDRd8Np2eMWbrd5jMg81ma8c2+R0QcZON+/mqGFZPv7us7Z9ZJCWkQvLnU7tQ5hN8INzcsvhIOeQOhCxg28VFV+CoK8DvNe4u5FeAqZqgEwHNqmpmvkNo2ueejGOcfQAoKnqkaL6EW7tc73aKrd9WmlP/qvpwcPNqPFxQz/xFjPg5wRGOhyFyy+LhPtZxzow3vdUQW9GvK+jFwX2mdf0Zv1pnH/jGVVrAqecA68vvCpeQTlz8lsyn4HVx9+opG/V7Z/2tavn7b4Q7Sp2F7BFUtGZbCXCWw5hjgMXgCSeiFYIWFeWVZdbLPI2c05EEZWI+5VBoOYzUEbWqUtytZeMI6qvEgtizovFLIRroUa/vH4oIw5e40cR0XuqD1rbhEw25pbmgrAVMjwqHnNW1Q/kg+3uFs81G06WMfOnY4/VjPaP/pY5dcrR/wDh83XOKTaEgIaAYYLj3iSDLIMtBYMBHV45LeCrIiIgK22lXxwRPmme1kbAXOc42AA+3pbU3VyubeMG+clXVPpWEtp6eRzA39o9hLXSO62Nw3uz1OQfQ314sfphMEVJA6nBuDVMMr3EZBzWAgRHMjUnPUaLXEMjGvxOiY8ZkxuMrY8+QLHtcLcva8bq2pn2PLz+Hxsp3j8hRrGXbI3i2S1w7bYjT1LauaT0jlNvis22Tvdu0ff2eyHT9bRskHiCzH+K0wLr3yRI6f2Lt/Yr8IppqJpNsLR2cTvAMcAb91llkbgQC0gjlbTyXGjrHI6KahqZYiTDLJH3xvdHn34SLqkdjouWdn8Q9rQ2Da2VwHKUMmv3F0jSfjdZNs/jdXt/XQU8o/dD4nfzYnD+lCOgEWo6DjrTn9dRzMP+k+OUerixZJQcWNlSWBqTETyljkYB4vwlo9URnCL5mz94aScXhqoJOuCVjreIByVe0duU0DcU9RDE3q+RrfIXOfggwriXw0ZXXqabDHVgZ3FmTgDJsnR3R/kbixboLadDJTyGGojfBK3Vrxa+dsQOjgbGzhr1W6N5+N9NH7NFC6od+0feKIZagEYn+Fm+K1vt3iRtCsGGV1OGfs/0WKRmuR+Wa8jTW/JFxirneH4qPtSThBzJsA3NxJyAyV3Q1AjOMRRPysWys7RpzvpcZ5ag39VsPc3inT0ptJsynZf3pKNrY3nXVj/e5/PUVjuwuGe1Kmzm0xiafn1Duy/oPteeGyu9tcM9p0rMbqds7AMzTOMhb4xkBx8QDay3hsLiHs2qA7Orja4kDs5j2T7nkGvti/huvs1m3KaJuKWphjb1fKxo9SVUrkW7Tpy5cx5ckIW8t89tbtVJP6TJG+W2UlOyXtOg+VjbZ3g4kdy1PteHZjXH9FralzeQlpQSPGQSMv8AyqFfDa7kUMgA1VJdfT7SPuWSbu7pCrc0DaNBHc2wySSNk8GxvY3EfNFYu+Tp6q+ZsCoNI+uEZFOwhvaOyDnOdhtH9Oxvc6C2t8lvjdfgzRQEPqXOq3jOzwGQ9x7IE4v4iR3KTjwA3Y72gADtIQABYAB2QA5aKpWfbMo2QxMiiYGMY1rWtboAArpeNC9RBERAXNHFHY4i2nUjDYSOEo7+0aHOPd7Zeul1pbjvRWqKea36yN0ZNsrxuxAX62lPoeiLjUJpByy+CvP8jqC1krYiWPza5paQbHDawNwbi1iLlUkrMdztqNFJUwyyBrIxjbe1hjxOIGRv7TC7LMF18+Wa3mMCkhc0kOaQQSCCCHAg5gg2IPcqLd3qvt7bmx1EztPbIt0w+yR6hWNkqLElSNn7tPRXk1GQ1rnMs14JYcvawnCbeBFlCaZvS3hcKkWz8+7z08lXGy45fBSCmtoT9v4KnsD3fnxyRFYaCMw37FDKByy+78hVGM20OWlhcfDRRiU9BlyOV/G/9kFIw4rENItzGfqkcTSA7CBe5y8cgFFIDboTf7Rf4L39JyAHkg9mFvsVUZzUZdfPl36KtsLjnf0/P3IJP7KF0amMThyQhBQ1nXNRyRAHID4KcqJ0A6oIHEL1nXu/sq3MbyNyoyDyHqguQLCw5WXr/D+6t7/d8FJGfz+e9Bke62/FbQkCCYmMawy3fCdcg0n5PW92EHLO6zTiJxAg2lsgtaOynbNEZIXEE2s/243fPbew0BHMC4J1S78+qjZndp56dyI7VRY7uDvINoUcdRYB+bJmj5r2+8O4G4cO5wWRKoIiIC+ftzYlPVx9jUxNkZe4BuCCLgOa4EFpsSLgg5lfQRBrTaXBeifnDLUQnoHtkZ6PaXH+ZY1V8GquO/Y1FNUNOrJmSRA20PsOdmLmxBGpzsSFvBFItc1bY3E2pG575KJ7ruc4ugLZQS4knCxpLtT9FYxURujOGVj43fRkaWO/lcAV14o54GvGF7WuadQ4BwPkUhXJIiGHGHNuXEFmeMWAs45Wsb2FjfI5LKtyXUFnsq2RdoXXa+fF2bm2ADGvDgInA4syPaxDPKy3NX8Otly60cTD1hBhP/jIv5rGtocFqV1zDUTxE6B2CVg8iA4/zKRr6YPvnu1TQw/pEBERxNHZCYStkxOt8liOIEA4jywg6LCCFseu4LVjM4J6eX6wfC70s+/qsc2juDtOG+KikcBziLJb94axxd8EhcY1ZNe8fBV1cTozhmY+InlI10bvIOAKVFSXvLza7szhaGjS2TWgAeSUWs0WHTQqIRjU6Hppf8hfQls9twG+zkbam5t7XUg2zH0s9MvmPBabHTO391RPHE0529VN2YHJW8cjgb5EdPzorlk4PciCOaqz1RFiDsx0VJibrYedvgrglUuA70EHZjkPz4IWDoq8XKyEdftRFu6EKMw55HyKuzYdypvdBalRcx4hTy5nvChhzIQbs/w719nVtOT+ylY3nmHMkPwiW6Vpf/DtSi9bKWi/yDAbZj9a5wB5XuzLuC3QqzoiIgIiICIiAiIgIiICIiCiWJrhZzQ4dCAR6FaK437IigqKbsIIoGyRzFzoo2sxuDo74gLBxAIIv9I5hb4Xwt892Y9oUzqeT2Xe9FJa5jeAcLrcxmQRzBI70HO23Nhtp3MdDL21NUMMlNKbYiBYSRyAe69jjZw7xobgfDa1zsVmk4bXsL63tlz0K+jtbZ89LK6mmBa+N13MDjgdlYSNvk67dHa2uMjkLKN3tE3Njk63MXFwstLcxAEgtLXA2IzaR3FrgbeCv9kbIdUOc1jg3CA4mR+EZuDWgYYySSXAAWUlftV0jBGY4w1p9h1iZQBfCwvvYgDL3QpN2q0xT5FwEjHxuwmxAc29xfI2LQc+9FXG0d1ZYY3SPkjs0XwtlJc6xsQ20VjY63IWPFpHuuPg7Mev9lmG8u3Y5YCyna5rXSMMgNgCSZH3yJuS5tyfBYo0JhqOOoubOyKkxpJACPz8FBct1Fx8QqiYyLy1+VlQLHTM9EBOgy+KCKWDndQs7vz+Ku8R5qNwHOw8AgiItc9xUNI3MnopQ3FfLuH4lXFJS3IYPEm3qfAIN+8AaEsoJJSLdtUPLfqsa2P/AJNf8Fs1Ytw62AKSjYMTi6VsbyHWtHeNvybQOQOI31Jc4rKVWdEREBERAREQEREBERAREQEREGM757k020WAS3ZIz9XKy2Nt8y03yc0n5p8rHNYvR8FqQQuZLPM+VxBbK0iPBbk2PMEHniv3WWzkQaJ2lwWrGn5Coglb/qB8LvQB4PqFYM4S7VYQ5op7g3BEx+9mfgV0KikWue5uFO1SABHStaNGslwi9gMR9jM2AzJ62tc3xvbe61ZRWNVTvjaTYSAh8Z6AvYSGk8g6xK6oUVTTskY5kjWvY4FrmuAc1wORBB1HcrCuSCVG8LaG/XCl8OKfZ4MkWZdT3LpWf9onOQfun2umLQaud00IyIORBGoI5LLVQOjHSx6ty+Gn2LyxHzx/ECD8Lj4qZwUZCqPHtvzb/Oz8VJR0b5HYI2GRxzswF5tlcmwNgL5k2AVFl9fduUNke0kAyROY053uZI3WGY5NJ8kVS/dyRkTpZHMYGhpDblxdieGDC5t2HW+TyRlcC91PsWixvZE1pcZHNYBexcXODQMXLXXQL6289W0wQsY8FrjezBZvybQ2w6gFwzOtgeSy7gxuwXyf5hILRsxNgv8APcbtfJ4NGJo6kk/NCna7w2zsVkogiE+HtQxuMN90G2YBGttL87K+RFpzEREBERAREQEREBERAREQEREBERAREQEREBYjvhw9o6+73tMU/KaKzXnKw7QaSDIai9tCFlyIOc94OFe0ackxsFVGNHQ5Pt+9C43v3NLlhlXQzRfrYJo7a9pE9n/IBdfoi1xoKhv0gvr7J2XUyuBgpZ5rhzfk4329tjoye0w2bk/U5BdZ2XqFaW3U4SyyOa/aAEMLc200b8Tzc3IklByvYXwkkgAXbZblp4Gsa1jGhrWgNa1oAa0AWAAGgAyspERBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERAREQEREBERB5hHRF6iAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiAiIgIiICIiD//Z"
              />   
            </a>
            <div class="portfolio-caption">
              <h4>Accessories</h4>
            </div>
          </div>
        </div>
      </div>
    </section>
    </div>
  </template>

  <script>
  import PostedAnnouncements from '@/common/components/home/PostedAnnouncements.vue';
  import {AnnouncementModel} from '@/store.js'
  import {fetchAnnouncements} from "@/controllers/home/AnnouncementController.js";
  export default {
    name: "HomeDetails",
    components: {
      PostedAnnouncements
    },
    props: {
    },

    data() {
      return {
        loading: false,
        announcements: AnnouncementModel.getAnnouncements()
      }
    },
    created(){
      this.fetchAnnouncements();
    },

    methods: {	
      saveCategory(category) {	
        this.$store.state.currentCategory = category;	
        console.log("category", category)	
        this.$router.push('/shop');	
        console.log(this.category);	
      }	,
      async fetchAnnouncements() {
        this.loading = true;
        this.announcements = await fetchAnnouncements();
        let i = 0;
        for(var announcement in this.announcements){
          this.announcements[announcement].announce = this.announcements[announcement].text
          this.announcements[announcement].name = ['sales','buy our stuff'][i]
          this.announcements[announcement].category = 'woodwinds'
          i++
        }
        this.loading = false;
      }
    }
  };
  </script>

  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  h3 {
    margin: 40px 0 0;
  }
  ul {
    list-style-type: none;
    padding: 0;
  }
  li {
    display: inline-block;
    margin: 0 10px;
  }
  a {
    color: #42b983;
  }
  </style>
