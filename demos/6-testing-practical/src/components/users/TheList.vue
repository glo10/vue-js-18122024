<script>
export default {
  name: "TheList",
  data() {
    return {
      users: [],
    };
  },
  methods: {
    getUsers() {
      // Une fonction native de JS qui permet de faire des appels vers les API externe ou des fichiers internes
      fetch("https://api.github.com/users")
        .then((res) => {
            if(res.ok) {
                return res.json()
            }
        })
        .then((users) => {
            this.users = users
        })
        .catch((error) => console.error("Erreur Fetch", error));
    },
  },
  mounted() {
    setTimeout(() => {
        this.getUsers();
    }, 5000)
  },
};
</script>
<template>
  <div :class="{ loader : users.length === 0 }">
    <ul>
        <li v-for="user in users" :key="user.id">
            <img :src="user.avatar_url" alt="Avatar du user">
            <span>{{ user.login }}</span>
        </li>
    </ul>
  </div>
</template>
<style scoped>
.loader {
  border: 16px solid #f3f3f3;
  border-radius: 50%;
  border-top: 16px solid #3498db;
  width: 120px;
  height: 120px;
  -webkit-animation: spin 2s linear infinite; /* Safari */
  animation: spin 2s linear infinite;
}

/* Safari */
@-webkit-keyframes spin {
  0% { -webkit-transform: rotate(0deg); }
  100% { -webkit-transform: rotate(360deg); }
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
