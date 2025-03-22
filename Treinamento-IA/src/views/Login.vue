<template>
    <div class="auth-container">
      <div class="auth-card">
        <div class="header">
          <img src="/logo.png" alt="RioSaúde" class="logo" />
        </div>
        <div class="content">
          <h2>Entrar no Treinamento IA</h2>
          <p class="subtitle">
            Treinamento especializado em IA para a área de licitações e auditorias
          </p>
          <form @submit.prevent="login">
            <label for="email">E-mail</label>
            <input type="email" id="email" v-model="email" placeholder="Seu e-mail" required />
  
            <label for="password">Senha</label>
            <input type="password" id="password" v-model="password" placeholder="Sua senha" required />
  
            <button type="submit">Entrar</button>
          </form>
          <p class="register-text">
            Não tem uma conta? <a href="/cadastro" class="register-link">Cadastre-se</a>
          </p>
        </div>
      </div>
    </div>
  </template>
  
  <script setup lang="ts">
  import { ref } from "vue";
  
  const email = ref<string>("");
  const password = ref<string>("");
  
  const login = () => {
    console.log("Email:", email.value);
    console.log("Senha:", password.value);
  };
  </script>
  
  <style scoped>
  .auth-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #f0f2f5;
  }
  
  .auth-card {
    background: white;
    border-radius: 10px;
    box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.08);
    width: 100%;
    max-width: 400px;
    overflow: hidden;
    padding-bottom: 20px;
  }
  
  .header {
    background-color: #064d84;
    padding: 20px;
    display: flex;
    justify-content: center;
  }
  
  .logo {
    width: 100%;
    max-width: 250px;
  }
  
  .content {
    padding: 2rem;
    text-align: center;
  }
  
  h2 {
    color: #064d84;
    font-size: 24px;
    margin-bottom: 10px;
    font-weight: bold;
  }
  
  .subtitle {
    font-size: 14px;
    color: #666;
    margin-bottom: 20px;
  }
  
  form {
    display: flex;
    flex-direction: column;
    gap: 10px;
    text-align: left;
  }
  
  label {
    font-weight: bold;
    font-size: 14px;
    color: #333;
    margin-bottom: 5px;
  }
  
  input {
    padding: 12px;
    border: 1px solid #ddd;
    border-radius: 5px;
    font-size: 16px;
    background-color: #e5e8e9;
    color: #333;
    box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.1);
  }
  
  button {
    background-color: #064d84;
    color: white;
    padding: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 16px;
    font-weight: bold;
    transition: background 0.3s;
    margin-top: 10px;
  }
  
  button:hover {
    background-color: #043c6a;
  }
  
  .register-text {
    margin-top: 15px;
    font-size: 14px;
    text-align: center;
    display: block;
    white-space: normal;
    color: #333;
    padding-bottom: 10px;
  }
  
  .register-link {
    color: #064d84;
    font-weight: bold;
    text-decoration: none;
  }
  
  .register-link:hover {
    text-decoration: underline;
  }
  </style>
  