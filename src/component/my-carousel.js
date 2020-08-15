class MyCarousel extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="carouselExampleCaptions" class="carousel slide" data-ride="carousel">
        <ol class="carousel-indicators">
          <li data-target="#carouselExampleCaptions" data-slide-to="0" class="active"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="1"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="2"></li>
          <li data-target="#carouselExampleCaptions" data-slide-to="3"></li>
        </ol>
        <div class="carousel-inner">
          <div class="carousel-item active">
            <img id="coronavirusBanner" class="d-block w-100" alt="coronavirus banner">
            <div class="carousel-caption d-none d-md-block">
              <p>Has spread to more than 180 countries around the world.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img id="preventionCorona" class="d-block w-100" alt="prevention coronavirus">
            <div class="carousel-caption d-none d-md-block">
              <p>Coronavirus prevention starts from ourselves.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img id="wearMask" class="d-block w-100" alt="wear mask">
            <div class="carousel-caption d-none d-md-block">
              <p>Wear a mask wherever you go.</p>
            </div>
          </div>
          <div class="carousel-item">
            <img id="stayStrong" class="d-block w-100" alt="stay strong">
            <div class="carousel-caption d-none d-md-block">
              <p>Stay strong for all who are infected.</p>
            </div>
          </div>
        </div>
        <a class="carousel-control-prev" href="#carouselExampleCaptions" role="button" data-slide="prev">
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="sr-only">Previous</span>
        </a>
        <a class="carousel-control-next" href="#carouselExampleCaptions" role="button" data-slide="next">
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="sr-only">Next</span>
        </a>
      </div>`;
    }
}

customElements.define("my-carousel", MyCarousel);