  <template>
    <div id="app">

    <!-- ANNOUNCEMENTS -->
    <header class="masthead">
      <div class="container">
        <div class="intro-text">
          <div class="intro-lead-in">Announcements</div>
          <!-- <div class="intro-heading text-uppercase">It's Nice To Meet You</div> -->
          <!-- <a class="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="#services">Tell Me More</a> -->
            <p class=" " style="margin-left:200px; margin-right: 200px; font-size: 40px">Lorem ipsum dolor sit amet!</p>
        </div>
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
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal1">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/01-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>Strings</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal2">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/02-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>Woodwinds</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal3">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/03-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>Brass</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal4">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/04-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>Keys</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal5">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/05-thumbnail.jpg" alt="">
            </a>
            <div class="portfolio-caption">
              <h4>Percussion</h4>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 portfolio-item">
            <a class="portfolio-link" data-toggle="modal" href="#portfolioModal6">
              <div class="portfolio-hover">
                <div class="portfolio-hover-content">
                  <i class="fas fa-plus fa-3x"></i>
                </div>
              </div>
              <img class="img-fluid" src="img/portfolio/06-thumbnail.jpg" alt="">
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

  </script>
    name: "HomeDetails",
    props: {
      msg: String
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
