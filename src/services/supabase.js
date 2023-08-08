import { createClient } from "@supabase/supabase-js";
const supabaseURL = "https://dphflxpyhrdjvwxhixpw.supabase.co";

const supabaseKey =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImRwaGZseHB5aHJkanZ3eGhpeHB3Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2OTE0MjMyNjgsImV4cCI6MjAwNjk5OTI2OH0.G2SH_-6Ghlo6ODO35iVeeFnzUAWQ8Jkq3T4KBIBSJrQ";

// Create a single supabase client for interacting with your database
const supabase = createClient(supabaseURL, supabaseKey);

export default supabase;
