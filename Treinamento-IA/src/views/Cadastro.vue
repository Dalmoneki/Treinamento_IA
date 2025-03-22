<template>
  <div class="auth-container">
    <div class="auth-card">
      <div class="header">
        <img src="/logo.png" alt="RioSaúde" class="logo" />
      </div>
      <div class="content">
        <h2>Criar Conta</h2>
        <p class="subtitle">
          Registre-se para acessar o treinamento em IA para licitações e auditorias
        </p>

        <form @submit.prevent="signUp">
          <label for="name">Nome completo</label>
          <input
            type="text"
            id="name"
            v-model="name"
            placeholder="Seu nome"
            required
          />

          <label for="email">E-mail</label>
          <input
            type="email"
            id="email"
            v-model="email"
            placeholder="Seu e-mail"
            required
          />

          <label for="password">Senha</label>
          <input
            type="password"
            id="password"
            v-model="password"
            placeholder="Crie uma senha"
            required
          />

          <label for="confirmPassword">Confirme sua senha</label>
          <input
            type="password"
            id="confirmPassword"
            v-model="confirmPassword"
            placeholder="Digite a senha novamente"
            required
          />

          <button type="submit" :disabled="loading">
            {{ loading ? "Criando conta..." : "Criar conta" }}
          </button>
        </form>

        <p v-if="errorMessage" class="error-message">{{ errorMessage }}</p>

        <p class="register-text">
          Já tem uma conta? <a href="/login" class="register-link">Faça login</a>
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref } from "vue";
import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";

const router = useRouter();

const name = ref<string>("");
const email = ref<string>("");
const password = ref<string>("");
const confirmPassword = ref<string>("");
const errorMessage = ref<string | null>(null);
const loading = ref<boolean>(false);

const signUp = async () => {
  errorMessage.value = null;

  if (password.value !== confirmPassword.value) {
    errorMessage.value = "As senhas não coincidem!";
    return;
  }

  loading.value = true;

  const { data, error } = await supabase.auth.signUp({
    email: email.value,
    password: password.value,
    options: {
      data: { name: name.value },
    },
  });

  loading.value = false;

  if (error) {
    console.error("Erro no cadastro:", error.message);
    errorMessage.value = "Erro ao cadastrar: " + error.message;
  } else {
    console.log("Cadastro realizado com sucesso!", data);
    alert("Cadastro realizado com sucesso! Verifique seu e-mail para confirmação.");
    router.push("/login"); // 🔹 Redireciona para login após cadastro
  }
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
  text-align: center;
  width: 100%;
  max-width: 400px;
  overflow: hidden;
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
  padding: 1.5rem;
}

h2 {
  color: #064d84;
  font-size: 22px;
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

button:disabled {
  background-color: #ccc;
  cursor: not-allowed;
}

button:hover {
  background-color: #043c6a;
}

.register-text {
  margin-top: 15px;
  font-size: 14px;
}

.register-link {
  color: #064d84;
  font-weight: bold;
  text-decoration: none;
}

.register-link:hover {
  text-decoration: underline;
}

.error-message {
  color: red;
  font-size: 14px;
  margin-top: 10px;
}
</style>
