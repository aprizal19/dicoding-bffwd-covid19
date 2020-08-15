class MyNavbar extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <style>
            .dark-green {
                background-color: rgba(0, 28, 26, 0.8);
            }
        </style>
        <nav class="navbar fixed-top navbar-expand-lg navbar-dark dark-green">
            <div class="container">
                <a class="navbar-brand" href="#">Coronavirus Live Update</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavDropdown" aria-controls="navbarNavDropdown" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                <div class="collapse navbar-collapse justify-content-end" id="navbarNavDropdown">
                    <ul class="navbar-nav">
                        <li class="nav-item">
                            <a class="nav-link" href="#global">Global </a>
                        </li>
                        <li class="nav-item">
                            <a class="nav-link" href="#countries">Countries </a>
                        </li>
                        <li class="nav-item">
                                <a class="nav-link" href="#indonesia">Indonesia </a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>`;
    }
}

customElements.define("my-navbar", MyNavbar);