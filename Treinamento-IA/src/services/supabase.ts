import { createClient } from "@supabase/supabase-js";

const supabaseUrl = "https://ynvltfirvztbkpzswmnq.supabase.co";
const supabaseAnonKey = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inludmx0Zmlydnp0YmtwenN3bW5xIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzkyODc5NDIsImV4cCI6MjA1NDg2Mzk0Mn0.5M_X_bF4tu_uQMeZOvAxVjET9mcljM7ngNY7pBxJtd0";

export const supabase = createClient(supabaseUrl, supabaseAnonKey);
