<template>
  <div>
    <h1>Edit Post</h1>
    <form @submit.prevent="updatePost">
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
              <label>Province Name:</label>
              <input type="text" class="form-control" v-model="post.province_name">
            </div>
          </div>
        </div><br />
        <div class="form-group">
          <button class="btn btn-primary">Update</button>
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
  created () {
    let uri = `http://localhost:2020/api/items/edit/${this.$route.params.id}`
    this.axios.get(uri).then((response) => {
      this.post = response.data
    })
  },
  methods: {
    updatePost () {
      let uri = `http://localhost:2020/api/items/${this.$route.params.id}`
      this.axios.put(uri, this.post).then((response) => {
        this.$router.push({name: 'index'})
      })
    }
  }
}
</script>
