function generateHTML(TeamCardsStr) {
    return `
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <script src="https://kit.fontawesome.com/2a0f064e00.js" crossorigin="anonymous"></script>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bulma@0.9.4/css/bulma-rtl.min.css">
    <link rel="stylesheet" href="./assets/css/styles.css">
    <title>Meet The Team!</title>
</head>

<body>
    <header>
        <section class="hero is-dark is-small">
            <div class="hero-body">
                <p class="title has-text-centered">
                    Meet My Team!
                </p>
            </div>
    </header>
    <section class="section has-background-grey-lighter pt-5">
        <div class="tile is-ancestor is-flex-wrap-wrap">
            ${TeamCardsStr}

            <!--Dynamic content goes here -->

            </div>
    </section>
    <footer>
        <div class="has-text-centered">
            <p>
                <strong>meetTheTeam</strong> by <a href="https://gnartistic.github.io/charlie-houston/">Charles
                    Houston</a>. The source code is licensed
                <a href="./LICENSE">MIT</a>. <a rel="license"
                    href="http://creativecommons.org/licenses/by-nc-nd/4.0/"><img alt="Creative Commons License"
                        style="border-width:0"
                        src="https://i.creativecommons.org/l/by-nc-nd/4.0/80x15.png" /></a><br />This work is
                licensed under a <a rel="license" href="http://creativecommons.org/licenses/by-nc-nd/4.0/">Creative
                    Commons
                    Attribution-NonCommercial-NoDerivatives 4.0 International License</a>
            </p>
        </div>
    </footer>
</body>
</html>
    `
}

module.exports = generateHTML;