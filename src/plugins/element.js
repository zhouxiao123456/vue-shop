import Vue from 'vue';
import { Button, Form, FormItem, Input, Message, Header, Container, Aside, Main } from 'element-ui';

Vue.use(Button);
Vue.use(Form);
Vue.use(FormItem);
Vue.use(Input);
Vue.use(Header);
Vue.use(Container);
Vue.use(Aside);
Vue.use(Main);

// 把弹框组件挂着到了 vue 的原型对象上，这样每一个组件都可以直接通过 this 访问
Vue.prototype.$message = Message;
