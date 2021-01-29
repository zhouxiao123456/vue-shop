import Vue from 'vue';
import { Button, Form, FormItem, Input, Message } from 'element-ui';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);

//把弹框组件挂着了，这样每一个组件都可以直接通过this访问
Vue.prototype.$message = Message;
