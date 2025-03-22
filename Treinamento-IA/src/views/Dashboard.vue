<script setup lang="ts">
import { supabase } from "@/services/supabase";
import { useRouter } from "vue-router";

const router = useRouter();

const logout = async () => {
  await supabase.auth.signOut();
  alert("Você saiu do sistema.");
  router.push("/login"); // 🔹 Redireciona para o login após logout
};
</script>

<template>
  <div>
    <h1>Bem-vindo ao Treinamento IA</h1>
    <button @click="logout">Sair</button>
  </div>
</template>
