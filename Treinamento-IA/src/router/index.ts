import { createRouter, createWebHistory } from "vue-router";
import type { RouteRecordRaw } from "vue-router"; // Importação correta do tipo
import { supabase } from "../services/supabase"; // Caminho relativo correto
import Login from "../views/Login.vue";
import Cadastro from "../views/Cadastro.vue";
import Dashboard from "../views/Dashboard.vue"; // Nova tela inicial após login

const routes: RouteRecordRaw[] = [
  { path: "/", redirect: "/login" },
  { path: "/login", component: Login },
  { path: "/cadastro", component: Cadastro },
  { 
    path: "/dashboard",
    component: Dashboard,
    meta: { requiresAuth: true } // Apenas usuários logados podem acessar
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

// 🔹 Verifica autenticação antes de acessar rotas protegidas
router.beforeEach(async (to, _, next) => { // Removido 'from' pois não está sendo usado
  // Obtém o usuário autenticado
  const { data } = await supabase.auth.getSession();
  const user = data.session?.user || null;

  // Se a rota exige autenticação e o usuário não está logado, redireciona para o login
  if (to.meta.requiresAuth && !user) {
    next("/login");
  } 
  // Se o usuário já está logado e tenta acessar login ou cadastro, redireciona para o Dashboard
  else if ((to.path === "/login" || to.path === "/cadastro") && user) {
    next("/dashboard");
  } 
  // Caso contrário, permite a navegação
  else {
    next();
  }
});

export default router;
