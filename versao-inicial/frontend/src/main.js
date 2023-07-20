import "font-awesome/css/font-awesome.css";
import Vue from "vue";

import App from "./App";
import "./config/bootstrap";
import './config/msgs'
import store from "./config/store";
import router from "./config/router";

Vue.config.productionTip = false;

require("axios").defaults.headers.common["Authorization"] =
  "bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpZCI6MSwibmFtZSI6Ik5ldHRvIiwiZW1haWwiOiJvcmxhbmRpb21uZXR0b0BnbWFpbC5jb20iLCJhZG1pbiI6dHJ1ZSwiaWF0IjoxNjg5NzkwNTE0LCJleHAiOjE2OTAwNDk3MTR9.iTSf2SJhzOMiG5Wp8uUwP5Mm7QsluhdIhy6H0bqexBA";

new Vue({
  store,
  router,
  render: (h) => h(App),
}).$mount("#app");
