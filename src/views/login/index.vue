<template>
<div class="login">
  <div class="login-box">



    <div class="login-intro">
      <h1 class="intro-title">Login</h1>
    </div>

  <div class="login-form">
    <a-form ref="loginFormRef" :model="form" layout="vertical" :rules="rules" :style="{ width: '400px' }" @submit="handleSubmit">
      <a-form-item field="name" tooltip="Please enter username" label="Username">
        <a-input
          v-model="form.name"
          placeholder="please enter your username..."
        />
      </a-form-item>

    <a-form-item
        field="password"
        tooltip="Please enter your password"
        label="Password"
      >
        <a-input-password
          v-model="form.password"

          placeholder="please enter your password..."
          allow-clear
        />
      </a-form-item>

      <a-form-item field="isRead">
        <a-checkbox v-model="form.isRead"> I have read the manual </a-checkbox>
      </a-form-item>
      <a-form-item>
        <a-button class="login-btn" type="primary" html-type="submit">Submit</a-button>
      </a-form-item>
    </a-form>
  </div>
    </div>

  </div>
</template>

<script setup lang="ts">
import { reactive, ref } from 'vue';
import Cookie from 'js-cookie';
import { useRouter } from 'vue-router';
  import { Message } from '@arco-design/web-vue';


const router = useRouter();

interface LoginForm {
  name: string;
  password: string;
  isRead: boolean;
}

const loginFormRef = ref();
const form: LoginForm = reactive({
  name: '',
  password: '',
  isRead: false,
});


const rules = {
  name: [{
    required: true,
    message: 'Please enter your username',
  }],
  password: [{
    required: true,
    message: 'Please enter your password',
  },
  {
    min: 6,
    max: 20,
    message: 'The password must be between 6 and 20 characters',
  }],

  isRead: [{type:'boolean', true:true,message:'Please read the manual'}],

}

const setFieldStatus = (_field: string, _status: { status: string, message: string }, _ref?: any  ) => {
  const formRef = _ref || loginFormRef;
  const { status, message } = _status;
  formRef.value.setFields({ _field: { status, message } });
}

// TODO: add login

const handleSubmit = ({ values }: any) => {

  loginFormRef.value.validate().then(() => {
    const { name, password, isRead } = values;
    // to judge the username and password
    const incorrectFieldStatus = { status: 'error', message: 'The username or password is incorrect' }
    if(name !== 'admin' || password !== 'admin') return setFieldStatus('password', incorrectFieldStatus);
    // to judge the read
    const unReadFieldStatus = { status: 'error', message: 'Please read the manual' }
    if(!isRead) return setFieldStatus('isRead', unReadFieldStatus);

    Cookie.set('name', name);
    Cookie.set('password', password);
    Cookie.set('isRead', isRead);

    router.push({ name: 'home' });
  }).catch((err: any) => {
    console.error(err);
  })

};




</script>

<style lang="less" scoped>
.login {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  width: 100%;
  background-color: #f0f2f5;

  &-box {
    background-color: #fff;
    padding: 24px;
    border-radius: 4px;

     .intro-title {
      font-size: 54px;
      font-weight: bold;
      margin-bottom: 12px;
      text-align: center;
      margin: 0;

    }
  }
  .login-form {

    .login-btn {
      width: 100%;

    }
  }
}
</style>
