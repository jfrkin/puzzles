<template>
    <div>
        <Navbar/>
        <div id="content">
        <slot/>
        </div>
    </div>
</template>
  
<script>
import Navbar from "../components/NavBar.vue";

export default {
    components: {
        Navbar
    }
}
</script>