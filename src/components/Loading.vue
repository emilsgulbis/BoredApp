<template>
  <div class="loading"></div>
</template>

<style lang="scss">
@keyframes spinner {
  to {transform: rotate(360deg);}
}

$size: 50px;

.loading {
  box-sizing: border-box;
  position: absolute;
  top: 50%;
  left: 50%;
  width: $size;
  height: $size;
  margin-top: -$size / 2;
  margin-left: -$size / 2;
  border-radius: 50%;
  border-width: 2px;
  border-style: solid;
  @apply .border-gray-500;
  border-top-color: transparent;
  animation: spinner .6s linear infinite;

}
</style>
