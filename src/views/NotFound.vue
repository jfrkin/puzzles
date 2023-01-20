<template>
    <div class="flex">
        <div>
            <h1>Žao nam je, nismo pronašli putanju '/{{ $route.params.catchAll }}'.</h1>
        </div>
        <div>
            <span>Vratite se na naslovnicu pa pokušajte ponovno. </span>
            <router-link to="/">Povratak</router-link>
        </div>
        <div class="img-placeholder">
            <img src="../assets/error.jpg" alt="404 slika">
        </div>
    </div>
</template>

<style>

.flex {
    display: flex;
    flex-direction: column;
    justify-content: center;
}

.img-placeholder {
    margin-top: 3em;
}
</style>