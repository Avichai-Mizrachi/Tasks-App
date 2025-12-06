import { createClient } from '@supabase/supabase-js';


export const supabase = createClient(
    "https://ggnzeokxnrfdnebgeezk.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imdnbnplb2t4bnJmZG5lYmdlZXprIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NjUwMjE2ODMsImV4cCI6MjA4MDU5NzY4M30.fPGkRaKvOiwl_S-38-FCB62AkLaEDuqeNx75UJKYN2Y"
);