// ============================================================
//  AGENCY SETUP — edit this file for each new client
//  Everything the booking page needs lives here
// ============================================================

export const business = {
  // --- Branding ---
  name: 'GreenEdge Landscaping',
  phone: '(555) 123-4567',
  email: 'hello@greenedge.com',

  // --- Supabase (Settings → API in your Supabase project) ---
  supabaseUrl: 'https://gctajxnmxbeuerncdjch.supabase.co',
  supabaseAnonKey: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImdjdGFqeG5teGJldWVybmNkamNoIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NzkwNTk1ODgsImV4cCI6MjA5NDYzNTU4OH0.I6grLHJI_1BCdYmGYxA4pCIlzhzo3TCjS62DiBqqwcE',

  // --- Services shown in the booking form dropdown ---
  services: [
    'Lawn Maintenance',
    'Residential Landscaping',
    'Commercial Landscaping',
    'Garden Design',
    'Tree & Shrub Care',
    'Consultation / Quote',
  ],

  // --- Available appointment days (0 = Sunday, 6 = Saturday) ---
  availableDays: [1, 2, 3, 4, 5], // Mon–Fri

  // --- Time slots shown to the customer ---
  timeSlots: [
    '8:00 AM',
    '9:00 AM',
    '10:00 AM',
    '11:00 AM',
    '12:00 PM',
    '1:00 PM',
    '2:00 PM',
    '3:00 PM',
    '4:00 PM',
  ],

  // --- How many days ahead customers can book ---
  bookingWindowDays: 60,
}
