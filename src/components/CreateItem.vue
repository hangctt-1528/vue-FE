// CreateComponent.vue

<template>
  <div>
    <h1>Input your favorite location</h1>
    <form @submit.prevent="addPost">
      <div class="row">
        <div class="col-md-6">
          <div class="form-group">
            <label>Name:</label>
            <input type="text" class="form-control" v-model="post.name">
          </div>
        </div>
        </div>
        <div class="row">
          <div class="col-md-6">
            <div class="form-group">
              <label>Province:</label>
              <input type="text" class="form-control" v-model="post.province_name">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Create</button>
        </div>
    </form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      post: {}
    }
  },
  methods: {
    addPost () {
      let uri = 'http://localhost:2020/api/items/create'
      this.axios.post(uri, this.post).then((response) => {
        this.$router.push({name: 'index'})
      })
    }
  }
}
</script>
