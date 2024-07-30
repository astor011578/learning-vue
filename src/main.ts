import './assets/main.css';

import { createApp } from 'vue';
import { createPinia } from 'pinia';

import App from './App.vue';
import router from './router';
import TodoDeleteButton from './components/todo-list/todo-delete-button.vue';

const app1 = createApp(App);

app1.use(createPinia());
app1.use(router);

/**
 * @description 捕捉以下內容產生的錯誤:
 * component renders
 * event handlers
 * lifecycle hooks
 * setup()
 * wathers
 * custom directive hooks
 * transition hooks
 * @param err 錯誤物件
 * @param instance 觸發 error 的元件
 * @param info Vue 特定的錯誤訊息, 例如錯誤產生時處於哪一個 lifecycle hook
 * errorHandler 文件: https://vuejs.org/api/application.html#app-config-errorhandler
 * 生產環境下的可能錯誤代碼 (info): https://vuejs.org/error-reference/#runtime-errors
 */
app1.config.errorHandler = (err, instance, info) => {
  console.error(err);
};

app1.component("TodoDeleteButton", TodoDeleteButton);
//重新取得這個被註冊的 component
// const MyComponent = app.component('TodoDeleteButton')

/* method 1: DOM element */
// const container = document.getElementById("app-1");
// app.mount(container!);

/* method 2: selector string */
app1.mount('#app-1');


// const app2 = createApp(TodoDeleteButton);
// app2.mount('#app-2');
