// src/supabaseClient.js
import { createClient } from "@supabase/supabase-js";

// Supabase API URL and key from the project settings
const supabaseUrl = "https://lqnbojgahpksunyzpnex.supabase.co";
const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImxxbmJvamdhaHBrc3VueXpwbmV4Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MjU4OTE5MzIsImV4cCI6MjA0MTQ2NzkzMn0.7GggteDWrT3t-oavQE3TX7YlSKPCchY49NnYfph1Xs8";

const supabase = createClient(supabaseUrl, supabaseKey);

export default supabase;
