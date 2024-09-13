import { createApp } from "vue";
import App from "./App.vue";
import utmDirective from "./directives/utm";

// Create the Vue app
const app = createApp(App);

// Register the UTM directive globally
app.directive("utm", utmDirective);

// Mount the app
app.mount("#app");
