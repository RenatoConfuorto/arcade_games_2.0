<template>
  <div class="loader">
    <div class="icon-wrapper">
      <i class="fas fa-spinner"></i>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
.loader {
  width: 100%;
  height: 100vh;

  position: relative;

  .icon-wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    font-size: 3rem;

    i{
      animation-timing-function: linear;
      animation-name: loaderRotation;
      animation-duration: 1s;
      animation-iteration-count: infinite;

    }

  }

  @keyframes loaderRotation {
    0% {
      transform: rotate(0deg);
    }

    50% {
      transform: rotate(180deg) scale(1.5);
    }

    100% {
      transform: rotate(360deg);
    }
  }
}
</style>