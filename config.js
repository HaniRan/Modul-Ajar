/* =====================================================================
   KONFIGURASI DATABASE (Supabase)
   Ambil dari: Supabase Dashboard → Project Settings → API
     • Project URL        → SUPABASE_URL
     • Project API keys → anon / public  → SUPABASE_ANON_KEY
   (anon key memang aman ditaruh di halaman web; keamanan data dijaga oleh
    aturan Row Level Security di supabase_setup.sql. JANGAN pernah menaruh
    "service_role" key di sini.)
===================================================================== */
window.MODUL_CONFIG = {
  SUPABASE_URL:      'https://jtwgxkulfumuejjmdycy.supabase.co',
  SUPABASE_ANON_KEY: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Imp0d2d4a3VsZnVtdWVqam1keWN5Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3OTE2MzU1NjIsImV4cCI6MjEwNzIxMTU2Mn0.ISFU-HVMmVB531s1dbv_agvIdhzaPr17q8dBSy_jdro',

  // Akhiran email internal untuk akun berbasis username (tidak perlu diubah).
  // Contoh: username "andi" → login sebagai andi@siswa.modul4tak.id
  EMAIL_DOMAIN: 'siswa.modul4tak.id'
};
