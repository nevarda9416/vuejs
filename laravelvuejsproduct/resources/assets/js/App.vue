<template>
    <div class="container">
        <div>
            <transition name="fade">
                <route-view></route-view>
            </transition>
        </div>
    </div>
</template>
<style>
.fade-enter-active, .fade-leave-active {
    transition: opacity .5s
}
.fade-enter, .fade-leave-active {
    opacity: 0
}
</style>
<script>
export default {
    
}
</script>