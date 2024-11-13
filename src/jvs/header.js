document.addEventListener("DOMContentLoaded", function() {
    inserirHeader();
});

function inserirHeader() {
    const headerHTML = `
        <header>
            <section class="py-2 bg-body-tertiary border-bottom">
                <div class="container d-flex flex-wrap">
                    <ul class="nav me-auto">
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2 active" aria-current="page">Home</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Features</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">Pricing</a></li>
                        <li class="nav-item"><a href="#" class="nav-link link-body-emphasis px-2">FAQs</a></li>
                        <li class="nav-item"><a href="/src/html/termos.html" class="nav-link link-body-emphasis px-2">Termos</a></li>
                    </ul>
                    <ul class="nav">
                        <li class="nav-item"><a href="/src/html/login.html" class="nav-link link-body-emphasis px-2">Login</a></li>
                        <li class="nav-item"><a href="/src/html/signUp.html" class="nav-link link-body-emphasis px-2">Sign up</a></li>
                    </ul>
                </div>
            </section>
            <section class="py-3 border-bottom"> 
                <div class="container d-flex flex-wrap justify-content-between">
                    <a href="/src/index.html" class="d-flex align-items-center mb-3 mb-lg-0 me-lg-auto link-body-emphasis text-decoration-none">
                        <img class="bi me-2" width="40" height="32" src="/src/media/img/logo-viagens.webp" alt="">
                        <span class="fs-4">Viamar.com</span>
                    </a>
                    <form class="col-12 col-md-8 mb-3 mb-lg-0 d-flex" role="search">
                        <input type="search" class="form-control me-2" placeholder="Search..." aria-label="Search">
                        <button type="submit" class="btn btn-secondary"><i class="bi bi-search"></i></button>
                    </form>
                </div>
            </section>
        </header>
    `;

    document.getElementById('head').innerHTML = headerHTML;
}
