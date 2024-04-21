const app = Vue.createApp({
  // template:
  //   // "<h1>Hi {{teamName}} & {{firstName + lastName}}, This is template in main.js</h1>",

  data() {
    return {};
  },
  methods: {
    onChangeName() {
      console.log(app);
      console.log(this);
      this.firstName = "Sky";
      this.lastName = "Albert";
      this.isShowModal = !this.isShowModal;
    },
    onLogEvent(e) {
      console.log("running event...", e);
    },
  },
});
app.mount("#contact");
