<template>
  <div>
    <p>{{ message }}</p>
    <input v-model="message">
  </div>
</template>

<script>

export default {
  data: function () {
    return {
      message: 'qua lại khách chờ sông lặng sóng'
    }
  }
}
</script>
