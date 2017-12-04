<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
        <router-link to="/" class="navbar-brand">
            <img src="static/icon/icon-hires.png" width="30" height="30" class="d-inline-block align-top" alt="">
            Sjtek Dashboard
        </router-link>
        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarText"
                aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarText">
            <ul class="navbar-nav mr-auto">
                <router-link tag="li" to="/" active-class="active" replace class="nav-item">
                    <a class="nav-link">Dashboard</a>
                </router-link>
                <router-link tag="li" to="/music" active-class="active" replace class="nav-item">
                    <a class="nav-link">Music</a>
                </router-link>
                <router-link tag="li" to="/sonarr" active-class="active" replace class="nav-item">
                    <a class="nav-link">Sonarr</a>
                </router-link>
                <router-link tag="li" to="/radarr" active-class="active" replace class="nav-item">
                    <a class="nav-link">Radarr</a>
                </router-link>
                <router-link tag="li" to="/transmission" active-class="active" replace class="nav-item">
                    <a class="nav-link">Transmission</a>
                </router-link>
            </ul>
        </div>
    </nav>
</template>

<script>

    export default {
        name: "nav-header"
    }
</script>