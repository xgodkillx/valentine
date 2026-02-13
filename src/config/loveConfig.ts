// ============================================================================
// Love Configuration - Personalize this file for your Valentine! 💕
// ============================================================================

/**
 * IMPORTANT: This is an EXAMPLE file to show you the structure.
 * 
 * For your actual configuration:
 * 1. Copy this file and rename it to: loveConfig.ts (without _example)
 * 2. Customize all the values with your personal information
 * 3. Make sure loveConfig.ts is in your .gitignore if keeping it private
 * 
 * OR simply edit the existing loveConfig.ts file directly.
 */

export interface Milestone {
  title: string;
  date: string;
  description: string;
}

export const loveConfig = {
  // === PERSONAL DETAILS ===
  // Replace with your actual names
  yourName: "Atul",
  partnerName: "Kachu",
  
  // === RELATIONSHIP START DATE ===
  // Set this to when your relationship began (Singapore timezone: +08:00)
  // Format: "YYYY-MM-DDTHH:MM:SS+08:00"
  relationshipStart: "2012-10-28T00:00:00+08:00",
  
  // === VALENTINE'S DATE ===
  valentineDate: "2026-02-14",
  
  // === HEADLINE AND INTRO ===
  heroHeadline: "To My Dearest Valentine",
  heroSubtext: "Hope this puts a smile on your face!!",
  
  // === PHOTO GALLERY ===
  // How many photos are in /public/photos/ ?
  // Photos should be named: photo_1.jpg, photo_2.jpg, photo_3.jpg, etc.
  photoCount: 8,
  
  // === TIMELINE MILESTONES ===
  // Add your relationship milestones here
  milestones: [
    {
      title: "Will you be my valentine?",
      date: "Feb 14, 2026",
      description: "Please say yes!!"
    },
    {
      title: "Kati garo yo manxe lai hasairakhna",
      date: "kati barsa theis?",
      description: "Ta eti sano huda vagya le talai ra malai judaune lekhi sakeko thiyo."
    },
    {
      title: "K saro ramri ho k",
      date: "Jaile pani",
      description: "Jati ramri uti jibro chado chalne hai??"
    },
    {
      title: "First foto",
      date: "No idea date kaile thhyo",
      description: "1st foto mai tha hune k kasto suhaune jodi xa vanera"
    },
    {
      title: "We look cute together",
      date: "Venice rocked",
      description: "Can't even explain the trip"
    },
    {
      title: "Hamro ramro lagera rakheko photo",
      date: "Denmark gako bela",
      description: ":)"
    },
    {
      title: "Our Little Traditions",
      date: "Ako 1st week",
      description: "From Sunday brunches to movie marathons, we've built a life full of beautiful routines."
    },
    {
      title: "This Moment",
      date: "February 2026",
      description: "Right now, as you read this, know that you are my greatest adventure and my safest home."
    }
  ],
  
  // === EMAIL CONFIGURATION ===
  // For the "Send me your answer" button
  yourEmail: "thapakazi.atul@gmail.com", // Replace with your actual email
  emailSubject: "My Valentine's Answer 💐",
  emailBody: "Yes! I'd love to be your Valentine! 💕\n\nLove always,\n",
  
  // === INVITE DETAILS ===
  inviteTitle: "Will You Be My Valentine?",
  inviteMessage: "Join me for a magical evening on February 14th. Let's make more beautiful memories together.",
  inviteDate: "February 14, 2026",
  inviteTime: "12:00 to 00:00",
  inviteLocation: "A romantic surprise awaits tara jana chai sangai jane ho.",
};

export default loveConfig;

