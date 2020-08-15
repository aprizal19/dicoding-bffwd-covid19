class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div class="card-footer text-center mt-lg-5">
            <div class="container">
                <h6>&copy; 2020. Fundamental Front-End Web Development Dicoding.com</h6>
                <p><a href='https://www.freepik.com/vectors/background'>Background vector created by starline - www.freepik.com</a></p>
                <p><a href='https://www.freepik.com/vectors/instagram'>Instagram vector created by freepik - www.freepik.com</a></p>
                <p><a href='https://www.freepik.com/vectors/people'>People vector created by pikisuperstar - www.freepik.com</a></p>
                <p><a href='https://www.freepik.com/vectors/health'>Health vector created by freepik - www.freepik.com</a></p>
            </div>
        </div>`;
    }
}

customElements.define("my-footer", MyFooter);