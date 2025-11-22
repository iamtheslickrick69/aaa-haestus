# Golf HQ - Complete Feature Specification
## SMS AI Platform for Golf Courses ($350/month)

**Version:** 1.0
**Date:** 2025-11-21
**Target:** Small golf courses (9-18 holes)
**Constraints:** 4-8 week MVP, $10K budget, solo/small team, self-service model

---

## EXECUTIVE SUMMARY

**Core Value Proposition:** Enable golf courses to handle tee time bookings and customer inquiries 24/7 via SMS using AI, without replacing their existing tee sheet software.

**MVP Goal:** Ship in 4-6 weeks with core SMS conversation handling, basic bot configuration, and simple dashboard. Everything else is iteration.

**Critical Success Factors:**
1. Bot actually works (doesn't hallucinate, handles booking flow)
2. Self-service setup takes <30 minutes
3. Integrates with existing tee sheets (at least 1-2 partners)
4. Dashboard shows clear ROI (bookings made, time saved)
5. Zero ongoing manual intervention required

---

## SECTION 1: ONBOARDING & SETUP WIZARD

### 1.1 INITIAL ACCOUNT CREATION

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Email/password signup | MVP | 4h | High | Low | Auth system (Supabase) |
| Email verification | MVP | 2h | High | Low | Email service |
| Course name input | MVP | 1h | High | Low | Database schema |
| Welcome modal/tour | V1.1 | 8h | Medium | Medium | UI library |
| Sample data pre-loaded | V2.0 | 12h | Medium | Medium | Seed data scripts |

**MVP Scope:**
- Simple signup form (email, password, course name)
- Email verification link (security requirement)
- Redirect to setup wizard immediately after signup
- NO complex tour (keep it simple - learn by doing)

**User Flow:**
1. Land on golfhq.com
2. Click "Start Free Trial" (14 days free, then $350/month)
3. Enter email, password, course name
4. Verify email
5. Redirected to Setup Wizard Step 1

**Technical Implementation:**
- Supabase Auth for user management
- Next.js 16 server actions for form submission
- Email via SendGrid (transactional)
- Password requirements: 8+ chars, 1 number, 1 special char

---

### 1.2 API KEY SETUP

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Twilio SID/Token input | MVP | 3h | High | Low | Encrypted storage |
| Claude API key input | MVP | 2h | High | Low | Encrypted storage |
| Test connection buttons | MVP | 6h | High | Medium | Twilio/Claude SDKs |
| Error handling (invalid keys) | MVP | 4h | High | Medium | Validation logic |
| Encrypted storage | MVP | 8h | High | High | Encryption lib |
| Cost warnings/education | V1.1 | 4h | Medium | Low | UI copy |
| Usage estimate calculator | V2.0 | 12h | Medium | Medium | Pricing API |

**MVP Scope:**
- Two input fields: Twilio credentials (SID + Auth Token), Claude API key
- "Test Connection" button for each
- Visual feedback (green checkmark or red error)
- Encrypted storage using Supabase Vault or similar
- Simple help text: "Get your Twilio credentials here: [link]"

**Critical UX Decision:**
- MUST validate keys work before allowing next step
- If keys fail, show clear error message with troubleshooting link
- Save in encrypted format in database

**User Flow:**
1. Setup Wizard Step 1: "Connect Your APIs"
2. "Get Twilio Credentials" button → opens Twilio docs in new tab
3. Paste Account SID and Auth Token
4. Click "Test Twilio Connection" → shows success/failure
5. Repeat for Claude API key
6. "Next Step" button only enables when both validated

**Error States:**
- Invalid format (wrong length, wrong chars)
- Invalid credentials (API rejection)
- Network error (retry prompt)
- Insufficient permissions (explain required scopes)

---

### 1.3 PHONE NUMBER PROVISIONING

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Buy Twilio number in-app | MVP | 16h | High | High | Twilio API |
| Area code selector | MVP | 4h | Medium | Low | Twilio available numbers API |
| Number verification | MVP | 3h | High | Medium | Twilio webhook |
| External number link (fallback) | MVP | 1h | Low | Low | Documentation |
| Multiple numbers support | V2.0 | 20h | Low | High | Database schema change |

**MVP Scope:**
- Search available numbers by area code (user enters ZIP code → we find area code)
- List 10 available numbers
- User selects one
- Purchase via Twilio API using their credentials
- Configure webhook to point to our endpoint
- Test: Send SMS to number, verify it hits our system

**Critical Decision:**
- Build in-app purchase flow (better UX) vs link to Twilio console (faster to ship)
- **RECOMMENDATION:** Build in-app for MVP. This is core to "self-service" promise.

**User Flow:**
1. Setup Wizard Step 2: "Get Your SMS Number"
2. "Enter your course's ZIP code or area code"
3. Search → Shows list of available numbers
4. Select number → "Purchase for $1.15/month" button
5. Twilio API purchases number
6. Configure webhook URL automatically
7. Test message: "Send TEST to your new number to verify setup"
8. User sends TEST → system receives it → green checkmark

**Technical Implementation:**
```javascript
// Twilio number purchase flow
const availableNumbers = await twilioClient.availablePhoneNumbers('US')
  .local.list({areaCode: areaCode, limit: 10});

const purchasedNumber = await twilioClient.incomingPhoneNumbers.create({
  phoneNumber: selectedNumber,
  smsUrl: `https://golfhq.com/api/sms/webhook/${userId}`,
  smsMethod: 'POST'
});
```

---

### 1.4 COURSE PROFILE SETUP

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Basic info (name, address, phone) | MVP | 4h | High | Low | Form handling |
| Operating hours | MVP | 8h | High | Medium | Time picker component |
| Course description | MVP | 2h | High | Low | Text area |
| Logo upload | V1.1 | 6h | Medium | Medium | Image storage (R2/S3) |
| Hero image upload | V1.1 | 4h | Low | Medium | Image storage |
| Seasonal hours | V1.1 | 12h | Medium | High | Complex date logic |
| Number of holes (9/18/27+) | MVP | 2h | Medium | Low | Dropdown |
| Course type (public/private) | V1.1 | 1h | Low | Low | Dropdown |
| Website URL | MVP | 1h | Medium | Low | URL input |

**MVP Scope:**
- Course name (pre-filled from signup)
- Full address (for directions feature)
- Phone number (for escalation)
- Website URL
- Operating hours (simple: "Open 7am-7pm daily" text field)
- Course description (3-4 sentences for bot to use)

**V1.1 Additions:**
- Logo upload (shows in SMS if supported by carrier)
- Seasonal hours (Winter vs Summer schedules)

**User Flow:**
1. Setup Wizard Step 3: "Tell Us About Your Course"
2. Form with 7 fields
3. All required except logo/hero image
4. "Save & Continue"

**Bot Usage:**
This data populates the bot's knowledge base:
```
Course: Pebble Creek Golf Course
Address: 123 Fairway Dr, Austin, TX 78701
Hours: Open daily 6:30am - 8pm
Description: Championship 18-hole public course with pro shop and restaurant
```

---

### 1.5 SETUP WIZARD CHECKLIST

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Step-by-step wizard UI | MVP | 12h | High | Medium | Multi-step form component |
| Progress indicator | MVP | 3h | Medium | Low | UI component |
| Skip vs required fields | MVP | 4h | Medium | Medium | Validation logic |
| "Test your bot" sandbox | MVP | 16h | High | High | SMS simulator |
| Launch checklist | V1.1 | 8h | Medium | Medium | Checklist UI |
| Save draft (incomplete setup) | V1.1 | 6h | Medium | Medium | Session storage |

**MVP Scope:**
- 4-step wizard:
  1. API Keys
  2. Phone Number
  3. Course Profile
  4. Test Bot
- Linear flow (can't skip ahead)
- Progress bar at top (Step 2 of 4)
- "Test Bot" step lets you send SMS without real phone
- "Go Live" button at end (enables webhook)

**User Flow:**
1. Complete steps 1-3 (forced sequence)
2. Step 4: "Test Your Bot"
   - Simulated phone interface on screen
   - Type message → see bot response in real-time
   - Pre-suggested test messages: "What are your hours?", "Book a tee time for 2pm tomorrow"
3. If satisfied → "Go Live" button
4. Confirmation modal: "Ready to go live? Your bot will start responding to real SMS messages."
5. Click "Yes, Go Live" → Redirected to dashboard

**Critical Feature: SMS Simulator**
- Shows iPhone-style message interface
- User types message → system processes with Claude → shows response
- No real SMS sent (saves cost during testing)
- Can test entire booking flow

---

## SECTION 2: DASHBOARD (HOME PAGE)

### 2.1 KEY METRICS CARDS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Total conversations (today/week/month) | MVP | 6h | High | Medium | Analytics queries |
| Active conversations (ongoing) | MVP | 4h | High | Medium | Real-time status tracking |
| Bookings made via SMS | MVP | 6h | High | Medium | Booking tracking |
| Response time (avg) | V1.1 | 8h | Medium | Medium | Time tracking |
| Bot accuracy rate | V2.0 | 16h | Medium | High | AI evaluation |
| Cost tracker (Twilio + Claude) | V1.1 | 12h | High | High | Usage tracking APIs |
| Customer satisfaction score | V2.0 | 20h | Medium | High | Survey system |

**MVP Scope (3 metrics only):**
1. **Conversations Today** (big number at top)
2. **Bookings Today** (conversion is key metric)
3. **Active Now** (real-time engagement)

**Dashboard Layout:**
```
┌─────────────────────────────────────────────┐
│  GOLF HQ - Pebble Creek Golf Course         │
├─────────────────────────────────────────────┤
│  ┌──────────┐  ┌──────────┐  ┌──────────┐  │
│  │    24    │  │    8     │  │    3     │  │
│  │Conversations│ │ Bookings│  │ Active  │  │
│  │   Today  │  │  Today   │  │   Now   │  │
│  └──────────┘  └──────────┘  └──────────┘  │
├─────────────────────────────────────────────┤
│  Recent Activity                            │
│  ↓ (feed below)                             │
└─────────────────────────────────────────────┘
```

**V1.1 Additions:**
- Cost tracker (Twilio spend + Claude API spend + projected monthly cost)
- Response time metric
- Week/month toggles for time range

---

### 2.2 ACTIVITY FEED

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Recent conversations (last 20) | MVP | 8h | High | Medium | Database queries |
| Recent bookings | MVP | 4h | High | Low | Booking query |
| Failed message alerts | MVP | 6h | High | Medium | Error logging |
| Bot errors/escalations | V1.1 | 8h | Medium | Medium | Error tracking |
| System notifications | V1.1 | 6h | Low | Low | Notification system |

**MVP Scope:**
- Single chronological feed
- Last 50 items (pagination later)
- Item types:
  - New conversation started
  - Booking made (highlight in green)
  - Message failed to send (highlight in red)
- Click item → go to conversation detail

**Feed Item Example:**
```
🟢 Booking made - 2pm, 4 players
   (512) 555-0123 • 2 minutes ago

💬 New conversation started
   (512) 555-9876 • 5 minutes ago

🔴 Message failed to send
   (512) 555-4444 • 12 minutes ago
```

---

### 2.3 QUICK ACTIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| "Test your bot" button | MVP | 2h | High | Low | Links to simulator |
| "View all conversations" link | MVP | 1h | High | Low | Navigation |
| "Configure bot" link | MVP | 1h | High | Low | Navigation |
| "Download reports" button | V2.0 | 12h | Medium | Medium | Export functionality |
| "Get help/support" button | V1.1 | 2h | Medium | Low | Support widget |

**MVP Scope:**
- Floating action button (bottom right corner)
- Opens menu with 3 options:
  - Test Bot
  - View Conversations
  - Bot Settings

---

### 2.4 ALERTS & NOTIFICATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Low Twilio balance warning | V1.1 | 6h | High | Medium | Twilio balance API |
| Claude API errors | MVP | 4h | High | Medium | Error monitoring |
| Bot accuracy dropping | V2.0 | 16h | Low | High | ML monitoring |
| High volume spikes | V1.1 | 8h | Medium | Medium | Anomaly detection |
| Customer complaints | V2.0 | 12h | Medium | High | Sentiment analysis |

**MVP Scope:**
- Alert banner at top of dashboard (only shows if critical issue)
- Types:
  - Claude API key invalid/expired
  - Twilio credentials not working
  - No SMS received in 7 days (possible webhook issue)

**V1.1:**
- Email notification for critical alerts
- Low balance warning (Twilio <$10)

---

### 2.5 GETTING STARTED / TIPS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Next steps checklist | V1.1 | 8h | Medium | Medium | Onboarding state tracking |
| Feature announcements | V1.1 | 4h | Low | Low | CMS for announcements |
| Best practices tips | V2.0 | 12h | Medium | Medium | Content system |
| Video tutorials embedded | V2.0 | 8h | Medium | Low | Video hosting |

**SKIP FOR MVP:** Users can figure it out. Focus on making UI intuitive.

**V1.1:** If user has <5 conversations in first week, show tip: "Share your SMS number on your website to get more conversations!"

---

## SECTION 3: SMS CONVERSATIONS MANAGER

### 3.1 CONVERSATION LIST VIEW

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| All conversations paginated | MVP | 8h | High | Medium | Database pagination |
| Filter by date range | V1.1 | 6h | Medium | Medium | Date picker |
| Filter by status (active/resolved) | V1.1 | 4h | Medium | Low | Status field |
| Search by phone/name/keywords | V1.1 | 12h | High | High | Full-text search |
| Sort by recent/oldest | MVP | 3h | Medium | Low | SQL ORDER BY |
| Status indicators | MVP | 4h | High | Low | UI badges |
| Message preview | MVP | 2h | Medium | Low | String truncation |

**MVP Scope:**
- List all conversations, newest first
- Show: Phone number, time, message preview (first message), status badge
- Status: Active (green) or Resolved (gray)
- Click row → open conversation detail
- Simple pagination (Show more button)

**List Item Example:**
```
┌──────────────────────────────────────────┐
│ 🟢 (512) 555-0123          2 mins ago   │
│ "Hi, what are your hours today?"        │
│ 5 messages • Booking made               │
└──────────────────────────────────────────┘
```

**V1.1 Additions:**
- Search bar at top
- Date range filter
- Status filter dropdown

---

### 3.2 CONVERSATION DETAIL VIEW

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Full message thread | MVP | 12h | High | Medium | Chat UI component |
| Timestamp per message | MVP | 2h | High | Low | Date formatting |
| Message status (sent/delivered/failed) | V1.1 | 8h | Medium | Medium | Twilio status callbacks |
| Customer info sidebar | V1.1 | 8h | Medium | Medium | Customer data aggregation |
| Booking made (if any) | MVP | 4h | High | Medium | Booking display component |
| Bot confidence score | V2.0 | 12h | Low | High | AI evaluation |
| Flag conversation | V1.1 | 4h | Medium | Low | Flag field |
| Add internal notes | V1.1 | 6h | Medium | Medium | Notes system |

**MVP Scope:**
- iMessage-style chat interface
- Customer messages (left side, gray bubbles)
- Bot messages (right side, blue bubbles)
- Timestamps (relative: "2 mins ago" → absolute after 24hrs)
- If booking made, show card at top with details
- "Mark as Resolved" button

**Chat UI Example:**
```
┌─────────────────────────────────────────────┐
│ Conversation with (512) 555-0123           │
│ Started 15 minutes ago • 6 messages         │
├─────────────────────────────────────────────┤
│ ✅ Booking Made:                            │
│ Tomorrow, 2:00 PM • 4 players              │
│ Confirmation: #GH-20251121-001             │
├─────────────────────────────────────────────┤
│                                             │
│ ┌─────────────────────┐                    │
│ │ Hi, what are your   │ 15 mins ago        │
│ │ hours today?        │                    │
│ └─────────────────────┘                    │
│                                             │
│              ┌────────────────────────────┐ │
│  14 mins ago │ Hi! We're open 6:30am to  │ │
│              │ 8pm today. How can I help?│ │
│              └────────────────────────────┘ │
│                                             │
│ ┌─────────────────────┐                    │
│ │ I'd like to book    │ 14 mins ago        │
│ │ a tee time          │                    │
│ └─────────────────────┘                    │
│                                             │
│              ┌────────────────────────────┐ │
│  13 mins ago │ Great! What date and time │ │
│              │ were you thinking?        │ │
│              └────────────────────────────┘ │
│                                             │
└─────────────────────────────────────────────┘
│ [Take Over Conversation] [Mark Resolved]   │
└─────────────────────────────────────────────┘
```

---

### 3.3 HUMAN TAKEOVER

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| "Take over conversation" button | MVP | 8h | High | Medium | State management |
| Staff send manual SMS reply | MVP | 12h | High | High | Twilio send API |
| Bot pauses during takeover | MVP | 4h | High | Medium | Conversation state |
| "Return to bot" button | MVP | 2h | Medium | Low | State toggle |
| Takeover logs (who, when, why) | V1.1 | 6h | Medium | Medium | Activity logging |

**MVP Scope:**
- "Take Over" button in conversation view
- When clicked:
  - Bot stops responding
  - Message input field appears at bottom
  - Staff can type and send SMS
  - Each message costs ~$0.0079 (Twilio)
- "End Takeover" button → bot resumes

**Critical UX:**
- Must be clear bot is paused (show banner: "🟡 You are now responding (Bot paused)")
- Must show typing indicator while staff types
- Must show delivery confirmation

**User Flow:**
1. Staff sees conversation needs help
2. Click "Take Over Conversation"
3. Confirmation: "Bot will stop responding. You'll handle this conversation manually."
4. Text input appears
5. Type message → Send
6. Message delivers via Twilio
7. Customer responds → goes to staff, not bot
8. When done → "End Takeover" → Bot resumes

**Technical Implementation:**
```javascript
// Takeover state in database
conversation {
  id: uuid
  status: 'active' | 'resolved' | 'takeover'
  takeover_by: user_id (nullable)
  takeover_at: timestamp (nullable)
}

// Webhook logic
if (conversation.status === 'takeover') {
  // Don't send to Claude
  // Store message for staff to see
  // Notify staff of new message
} else {
  // Normal bot flow
}
```

---

### 3.4 CONVERSATION ACTIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Mark as resolved | MVP | 3h | High | Low | Status update |
| Flag for review | V1.1 | 4h | Medium | Low | Flag field |
| Export conversation (PDF) | V2.0 | 16h | Low | High | PDF generation |
| Delete conversation | V1.1 | 4h | Medium | Medium | Soft delete |
| Block phone number (spam) | V1.1 | 6h | Medium | Medium | Blocklist |

**MVP Scope:**
- Mark as Resolved (button in detail view)
- Resolved conversations move to "Resolved" tab (V1.1 feature)

**V1.1:**
- Flag (for staff review later)
- Delete (soft delete - don't actually remove from DB)
- Block number (prevent future messages)

---

### 3.5 ANALYTICS PER CONVERSATION

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Total messages in thread | MVP | 2h | Medium | Low | Count query |
| Bot response time | V1.1 | 6h | Medium | Medium | Time tracking |
| Resolution time | V1.1 | 4h | Medium | Low | Time diff calculation |
| Customer satisfaction (if rated) | V2.0 | 16h | Medium | High | Survey system |
| Cost of conversation | V1.1 | 8h | Medium | High | Usage tracking |

**MVP Scope:**
- Show message count in header: "6 messages"
- Show booking if made

**V1.1:**
- Show cost: "This conversation cost $0.15 (Twilio: $0.05, Claude: $0.10)"
- Show duration: "Resolved in 8 minutes"

---

## SECTION 4: AI BOT CONFIGURATION

### 4.1 BOT PERSONALITY SETTINGS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Bot name (customizable) | V1.1 | 3h | Medium | Low | Text field |
| Personality selector presets | V1.1 | 8h | Medium | Medium | Prompt templates |
| Tone adjustments (slider) | V2.0 | 12h | Low | Medium | UI component + prompt engineering |
| Emoji usage toggle | V1.1 | 4h | Low | Low | Prompt instruction |
| Response length setting | V2.0 | 6h | Low | Low | Prompt instruction |
| Custom system prompt | V2.0 | 8h | Low | Medium | Text area + safety validation |

**MVP Scope:**
- Fixed personality (friendly, professional)
- Fixed bot name ("Caddie AI" or course name)
- No customization (keep it simple for MVP)

**System Prompt (MVP):**
```
You are an AI assistant for [Course Name], a golf course.
Your job is to help customers with:
1. Answering questions about hours, rates, location, policies
2. Booking tee times

Be friendly, concise, and helpful.
Always confirm booking details before finalizing.

Course Information:
{course_profile_data}

Current date/time: {current_datetime}
```

**V1.1 Additions:**
- Personality presets:
  - Professional: "You are a professional golf course assistant..."
  - Friendly: "You're a friendly and enthusiastic golf expert..."
  - Casual: "You're a laid-back golf buddy helping out..."
- Emoji toggle (On = use emojis like ⛳️, Off = no emojis)

---

### 4.2 COURSE INFORMATION LIBRARY

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| FAQs (pre-defined) | MVP | 12h | High | Medium | FAQ management UI |
| Custom FAQs (unlimited) | MVP | 8h | High | Medium | CRUD for FAQs |
| Templates (pre-written responses) | V1.1 | 10h | Medium | Medium | Template system |
| Knowledge base articles | V2.0 | 20h | Medium | High | Rich text editor |
| Import from website (scraping) | V2.0 | 30h | Low | High | Web scraping |

**MVP Scope:**
- Pre-populated FAQ categories:
  - Hours & Availability
  - Rates & Pricing
  - Location & Directions
  - Dress Code
  - Cart Policies
  - Weather Policy
  - Contact Information
- Each category has text field for answer
- Bot uses this as RAG knowledge base

**FAQ Setup UI:**
```
┌─────────────────────────────────────────────┐
│ Course Information & FAQs                   │
├─────────────────────────────────────────────┤
│                                             │
│ ▼ Hours & Availability                      │
│   What are your hours?                      │
│   ┌───────────────────────────────────────┐ │
│   │ We're open daily 6:30am - 8pm.        │ │
│   │ Hours may vary by season.             │ │
│   └───────────────────────────────────────┘ │
│                                             │
│ ▼ Rates & Pricing                           │
│   How much does it cost?                    │
│   ┌───────────────────────────────────────┐ │
│   │ $45 weekday, $60 weekend for 18 holes│ │
│   │ Cart rental $20                       │ │
│   └───────────────────────────────────────┘ │
│                                             │
│ ▼ Location & Directions                     │
│   Where are you located?                    │
│   ┌───────────────────────────────────────┐ │
│   │ 123 Fairway Dr, Austin, TX 78701      │ │
│   │ Take I-35 exit 234...                 │ │
│   └───────────────────────────────────────┘ │
│                                             │
│ + Add Custom FAQ                            │
│                                             │
└─────────────────────────────────────────────┘
```

**How Bot Uses This:**
When customer asks "What are your rates?", bot retrieves FAQ answer and formats naturally:
```
Customer: "How much does it cost?"
Bot: "Great question! It's $45 for 18 holes on weekdays and $60 on weekends. Cart rental is $20. Would you like to book a tee time?"
```

**Technical Implementation:**
- Store FAQs in database
- Send to Claude as part of system prompt
- Use Claude's retrieval abilities (no need for separate vector DB for MVP)

---

### 4.3 BOOKING FLOW CONFIGURATION

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Enable/disable booking via SMS | MVP | 2h | High | Low | Feature flag |
| Required fields (name, phone, email) | MVP | 6h | High | Medium | Form validation |
| Player count options (1-4) | MVP | 4h | High | Low | Dropdown config |
| Player type handling (Member/Public) | V1.1 | 8h | Medium | Medium | Type system |
| Confirmation message template | MVP | 4h | High | Low | Template editor |
| Booking policies (cancellation) | V1.1 | 6h | Medium | Low | Text field |
| Integration with tee sheet | V1.1 | 40h | High | High | API integration |

**MVP Scope:**
- Booking enabled by default
- Bot collects:
  - Date
  - Time
  - Number of players
  - Name
  - Phone (already have it)
  - Email (optional)
- Stores in Golf HQ database (not integrated with tee sheet yet)
- Sends confirmation SMS

**Booking Flow (Customer Experience):**
```
Customer: "I want to book a tee time"
Bot: "I'd be happy to help! What date would you like to play?"

Customer: "Tomorrow"
Bot: "Great! What time works for you? We have availability from 7am-6pm."

Customer: "2pm"
Bot: "Perfect! How many players?"

Customer: "4"
Bot: "Awesome! Can I get your name?"

Customer: "John Smith"
Bot: "Thanks John! Can I get your email for confirmation? (optional)"

Customer: "john@email.com"
Bot: "All set! You're booked for tomorrow at 2:00 PM for 4 players.
     Confirmation: #GH-20251122-001
     We'll send a reminder 24 hours before. See you then! ⛳️"
```

**MVP Database Schema:**
```sql
bookings (
  id uuid
  course_id uuid
  conversation_id uuid
  customer_name text
  customer_phone text
  customer_email text (nullable)
  booking_date date
  booking_time time
  player_count integer
  status text (confirmed, cancelled, no_show)
  confirmation_code text (unique)
  created_at timestamp
  external_booking_id text (nullable, for tee sheet integration)
)
```

**Confirmation Message Template:**
```
You're all set! ✅

Date: {date}
Time: {time}
Players: {player_count}
Confirmation: {confirmation_code}

See you soon! Reply CANCEL to cancel or CHANGE to reschedule.
```

**V1.1: Tee Sheet Integration**
- When booking made, also create in ForeUp/Lightspeed/etc via API
- Two-way sync (customer cancels in tee sheet → SMS notification)

---

### 4.4 BUSINESS RULES

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Auto-responses for keywords | MVP | 8h | High | Medium | Keyword matching |
| Escalation triggers (angry language) | V1.1 | 12h | Medium | High | Sentiment analysis |
| Hours bot is active | V1.1 | 6h | Medium | Medium | Time-based rules |
| After-hours message template | V1.1 | 3h | Medium | Low | Template |
| Language detection (multi-language) | V2.0 | 30h | Low | High | Translation API |

**MVP Scope:**
- Keyword auto-responses:
  - "STOP" → Unsubscribe confirmation + mark contact as opted-out
  - "CANCEL [confirmation code]" → Cancel booking flow
  - "HELP" → Help menu
- Bot active 24/7 (no time restrictions)

**Auto-Response Logic:**
```javascript
// Before sending to Claude, check for keywords
if (message.toLowerCase() === 'stop') {
  await optOutCustomer(phone);
  return "You've been unsubscribed. Reply START to resubscribe.";
}

if (message.toLowerCase().startsWith('cancel ')) {
  const confirmationCode = message.split(' ')[1];
  return await handleCancellation(confirmationCode);
}

// Otherwise, send to Claude
```

**V1.1: Escalation Rules**
- If customer uses profanity or angry language → notify staff
- If bot fails to understand after 3 attempts → offer to connect to staff
- If customer asks for "manager" or "human" → trigger takeover

---

### 4.5 INTEGRATION SETTINGS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| ForeUp API connection | V1.1 | 40h | High | High | ForeUp API docs |
| Lightspeed Golf API | V1.1 | 40h | High | High | Lightspeed API |
| TeeSnap API | V2.0 | 40h | Medium | High | TeeSnap API |
| Generic webhook (custom) | V2.0 | 20h | Medium | High | Webhook builder |
| Google Calendar sync | V2.0 | 24h | Low | Medium | Google Calendar API |
| Email notifications | V1.1 | 12h | Medium | Medium | SendGrid integration |

**MVP Scope:**
- No integrations (bookings stored in Golf HQ only)

**V1.1: ForeUp Integration (Priority #1)**
Why ForeUp? Popular with small/medium courses.

Integration points:
1. **Read availability:** Check tee sheet for available times
2. **Create booking:** When customer books via SMS, create in ForeUp
3. **Update booking:** Customer cancels → cancel in ForeUp
4. **Webhook:** ForeUp notifies us of changes → update customer via SMS

**UI for Integration Setup:**
```
┌─────────────────────────────────────────────┐
│ Tee Sheet Integration                       │
├─────────────────────────────────────────────┤
│                                             │
│ Select your tee sheet software:             │
│ ( ) ForeUp                                  │
│ ( ) Lightspeed Golf                         │
│ ( ) TeeSnap                                 │
│ ( ) Other / None                            │
│                                             │
│ [If ForeUp selected]                        │
│                                             │
│ ForeUp API Key:                             │
│ ┌───────────────────────────────────────┐   │
│ │ ••••••••••••••••••                    │   │
│ └───────────────────────────────────────┘   │
│                                             │
│ ForeUp Facility ID:                         │
│ ┌───────────────────────────────────────┐   │
│ │ 12345                                 │   │
│ └───────────────────────────────────────┘   │
│                                             │
│ [Test Connection]                           │
│                                             │
└─────────────────────────────────────────────┘
```

**Build Complexity:**
- 40 hours per integration (ForeUp, Lightspeed, TeeSnap)
- Prioritize based on customer demand
- Start with ForeUp for V1.1

---

### 4.6 TESTING & PREVIEW

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| "Test bot" playground | MVP | 16h | High | High | SMS simulator |
| Conversation simulator | MVP | (same as above) | High | High | - |
| A/B testing (different prompts) | V2.0 | 30h | Low | High | Experiment framework |
| Bot response logs | V1.1 | 8h | Medium | Medium | Logging UI |
| Prompt version history | V2.0 | 12h | Low | Medium | Versioning system |

**MVP Scope:**
- Test Bot simulator (already specified in Onboarding section)
- Accessible from Dashboard and Settings
- Can test booking flow end-to-end without real SMS cost

**V1.1: Response Logs**
- See what Claude generated for each message
- Useful for debugging and improving prompts
- Shows: Customer message → Bot reasoning → Bot response

---

## SECTION 5: ANALYTICS & REPORTS

### 5.1 CONVERSATION ANALYTICS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Total conversations (day/week/month) | MVP | 6h | High | Medium | Aggregation queries |
| Average messages per conversation | V1.1 | 4h | Medium | Low | Calculation |
| Average response time | V1.1 | 8h | Medium | Medium | Time tracking |
| Peak hours heatmap | V2.0 | 16h | Medium | High | Visualization library |
| Conversation outcomes | V1.1 | 10h | High | Medium | Outcome tracking |
| Bot accuracy rate | V2.0 | 20h | Medium | High | AI evaluation |

**MVP Scope:**
- Simple metrics on Dashboard (covered in Section 2.1)
- No separate Analytics page for MVP

**V1.1: Analytics Page**
- Dedicated page with charts
- Metrics:
  - Conversations over time (line chart)
  - Bookings over time (line chart)
  - Conversion rate (conversations → bookings)
  - Outcomes: Booked, Question Answered, Escalated, Abandoned

**Chart Example (V1.1):**
```
Conversations Last 30 Days
   ┌─────────────────────────────────┐
50 │         ╱╲                      │
   │        ╱  ╲    ╱╲               │
40 │       ╱    ╲  ╱  ╲              │
   │      ╱      ╲╱    ╲   ╱╲        │
30 │     ╱              ╲ ╱  ╲       │
   │    ╱                ╲╱    ╲     │
20 │   ╱                        ╲    │
   └─────────────────────────────────┘
    Nov 1        Nov 15       Nov 30
```

---

### 5.2 BOOKING ANALYTICS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Bookings made via SMS | MVP | 4h | High | Low | Count query |
| Booking conversion rate | V1.1 | 6h | High | Medium | Calculation |
| Popular tee times | V1.1 | 8h | Medium | Medium | Aggregation |
| Average booking lead time | V2.0 | 6h | Low | Low | Date math |
| No-show rate | V2.0 | 12h | Medium | High | Requires manual input |

**MVP Scope:**
- Bookings count on Dashboard

**V1.1:**
- Conversion rate: X% of conversations result in bookings
- Popular times: "Most bookings are for 9am-11am on weekends"

---

### 5.3 CUSTOMER ANALYTICS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Unique customers texting | V1.1 | 4h | Medium | Low | Distinct count |
| Repeat vs new customers | V1.1 | 6h | Medium | Medium | Comparison logic |
| Customer satisfaction ratings | V2.0 | 20h | Medium | High | Survey system |
| Most common questions | V1.1 | 12h | Medium | High | NLP/categorization |
| Question categories breakdown | V2.0 | 16h | Medium | High | Classification |

**V1.1:**
- Unique customers metric
- Repeat customer rate

**V2.0:**
- Post-conversation survey: "How was your experience? Reply 1-5"
- Question categorization (requires AI to analyze and categorize)

---

### 5.4 COST ANALYTICS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Twilio spend | V1.1 | 12h | High | High | Twilio usage API |
| Claude API spend | V1.1 | 12h | High | High | Claude usage API |
| Cost per conversation | V1.1 | 4h | Medium | Medium | Calculation |
| Cost per booking | V1.1 | 4h | Medium | Low | Calculation |
| Cost trends over time | V1.1 | 8h | Medium | Medium | Time series |
| Budget alerts | V2.0 | 10h | Medium | Medium | Alert system |

**V1.1 Scope (High Priority):**
Customers need to understand their costs (since they're paying for Twilio + Claude).

**Cost Dashboard:**
```
┌──────────────────────────────────────────┐
│ Your Usage Costs This Month              │
├──────────────────────────────────────────┤
│                                          │
│ Twilio (SMS):        $45.67              │
│ Claude API (AI):     $23.12              │
│ ────────────────────────────             │
│ Total:               $68.79              │
│                                          │
│ Cost per conversation: $0.18             │
│ Cost per booking: $0.85                  │
│                                          │
│ Projected monthly cost: $82.55           │
│                                          │
└──────────────────────────────────────────┘
```

**Technical Implementation:**
- Call Twilio API to get usage data
- Call Claude API to get token usage → calculate cost
- Cache results (update hourly, not real-time)

**API Calls:**
```javascript
// Twilio usage
const usageRecords = await twilioClient.usage.records.list({
  category: 'sms',
  startDate: monthStart,
  endDate: today
});
const twilioSpend = usageRecords.reduce((sum, r) => sum + parseFloat(r.price), 0);

// Claude API usage (via Anthropic API)
// NOTE: Anthropic doesn't have usage API yet, so track ourselves
// Store token counts per conversation in database
const claudeTokens = await db.query('SELECT SUM(tokens_used) FROM conversations WHERE created_at >= ?', [monthStart]);
const claudeCost = claudeTokens * PRICE_PER_1K_TOKENS;
```

---

### 5.5 OPERATIONAL ANALYTICS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Human takeover rate | V1.1 | 6h | Medium | Medium | Calculation |
| Average takeover duration | V2.0 | 6h | Low | Medium | Time tracking |
| Staff response time | V2.0 | 8h | Low | Medium | Timestamp analysis |
| Bot errors/failures | V1.1 | 8h | Medium | Medium | Error logging |
| System uptime | V2.0 | 12h | Low | Medium | Health checks |

**V1.1:**
- Takeover rate: "Bot handled 94% of conversations without human help"
- Error count: "3 bot errors this month"

---

### 5.6 EXPORT & REPORTING

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Date range selector | V1.1 | 4h | Medium | Low | Date picker |
| Export CSV | V2.0 | 12h | Medium | Medium | CSV generation |
| Export PDF | V2.0 | 16h | Low | High | PDF library |
| Scheduled reports (email) | V2.0 | 20h | Medium | High | Cron jobs + email |
| Custom report builder | V2.0+ | 40h | Low | High | Complex UI |
| API access to analytics | V2.0+ | 30h | Low | High | API endpoints |

**SKIP FOR MVP & V1.1**

**V2.0:**
- "Download CSV" button on Analytics page
- Exports conversations or bookings data

---

## SECTION 6: SETTINGS & ADMINISTRATION

### 6.1 ACCOUNT SETTINGS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Profile (name, email, password) | MVP | 6h | High | Low | User management |
| Course profile editing | MVP | 4h | High | Low | Form handling |
| Billing & subscription | MVP | 20h | High | High | Stripe integration |
| Payment method management | MVP | 8h | High | Medium | Stripe Elements |
| Billing history | V1.1 | 8h | Medium | Medium | Invoice list |
| Invoices download | V1.1 | 6h | Low | Medium | PDF generation |
| Cancel subscription | MVP | 8h | High | Medium | Cancellation flow |

**MVP Scope:**
- Edit profile (name, email)
- Change password
- View current subscription status
- Update payment method (credit card)
- Cancel subscription (with confirmation)

**Billing Page:**
```
┌─────────────────────────────────────────────┐
│ Billing & Subscription                      │
├─────────────────────────────────────────────┤
│                                             │
│ Current Plan: Golf HQ Pro                   │
│ Price: $350/month                           │
│ Status: Active                              │
│ Next billing date: Dec 21, 2025            │
│                                             │
│ Payment Method:                             │
│ •••• •••• •••• 4242 (Visa)                 │
│ Expires 12/2027                             │
│ [Update Payment Method]                     │
│                                             │
│ ─────────────────────────────────           │
│                                             │
│ [Cancel Subscription]                       │
│                                             │
└─────────────────────────────────────────────┘
```

**Technical Implementation:**
- Stripe for payments
- Subscription model: $350/month, recurring
- 14-day free trial
- Webhook for subscription events (payment succeeded, failed, canceled)

---

### 6.2 TEAM MANAGEMENT

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Invite team members | V1.1 | 12h | Medium | Medium | Invitation system |
| User roles (Admin/Manager/Staff) | V1.1 | 16h | Medium | High | RBAC system |
| Remove team members | V1.1 | 4h | Medium | Low | Delete user |
| Activity log | V2.0 | 16h | Low | High | Audit trail |

**SKIP FOR MVP** (assume single user)

**V1.1:**
- Owner can invite staff via email
- Roles:
  - Owner (full access, billing)
  - Admin (full access, no billing)
  - Staff (view conversations, takeover, no settings)

---

### 6.3 NOTIFICATION PREFERENCES

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Email notifications (critical) | MVP | 8h | High | Medium | Email service |
| SMS notifications to staff | V1.1 | 10h | Medium | Medium | Twilio SMS |
| Slack integration | V2.0 | 20h | Low | High | Slack API |
| Push notifications (browser) | V2.0 | 24h | Low | High | Web Push API |
| Notification frequency settings | V1.1 | 6h | Low | Low | Preferences UI |

**MVP Scope:**
- Email notifications for:
  - API errors (Claude or Twilio)
  - Daily summary (conversations, bookings)
  - Critical alerts

**V1.1:**
- SMS alerts to staff phone for urgent issues
- Customizable frequency (immediate, hourly digest, daily digest, off)

---

### 6.4 API & DEVELOPER SETTINGS

**SKIP ENTIRELY FOR MVP & V1.1**

This is for customers who want to build on top of Golf HQ (V2.0+ feature).

---

### 6.5 SECURITY & PRIVACY

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Two-factor authentication (2FA) | V1.1 | 16h | High | High | 2FA library |
| API key encryption | MVP | 8h | High | High | Encryption (already covered) |
| Data retention policy settings | V2.0 | 12h | Medium | Medium | Automated deletion |
| GDPR compliance (data export) | V2.0 | 20h | Medium | High | Export functionality |
| Access logs | V2.0 | 16h | Low | Medium | Audit logging |

**MVP Scope:**
- API keys encrypted at rest (covered in Section 1.2)
- HTTPS everywhere
- Basic security best practices

**V1.1:**
- 2FA for login (TOTP via authenticator app)

---

### 6.6 BRANDING & CUSTOMIZATION

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| White-label (custom domain) | V2.0+ | 40h | Low | High | DNS, SSL certs |
| Remove Golf HQ branding | V2.0+ | 12h | Low | Medium | Enterprise tier |
| Color theme customization | V2.0 | 16h | Low | Medium | Theme system |
| Logo in bot responses | V2.0 | 8h | Low | Medium | MMS support |

**SKIP FOR MVP & V1.1**

This is enterprise tier feature ($1000+/month pricing).

---

## SECTION 7: CUSTOMER-FACING FEATURES

### 7.1 PUBLIC BOOKING PAGE (OPTIONAL)

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Web-based booking form | V2.0 | 40h | Medium | High | Full booking UI |
| SMS bot integration (shared data) | V2.0 | 12h | Medium | Medium | Database sync |
| Mobile-responsive design | V2.0 | 8h | Medium | Medium | Responsive CSS |
| Course branding | V2.0 | 6h | Low | Low | Theme application |
| SEO-optimized | V2.0 | 8h | Low | Medium | Meta tags, sitemap |

**SKIP FOR MVP & V1.1**

MVP is SMS-only. Web booking is future expansion.

---

### 7.2 SMS CONVERSATION EXPERIENCE (Customer Side)

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Welcome message (first time) | MVP | 3h | Medium | Low | First message detection |
| Quick reply buttons | V2.0 | 16h | Low | High | RCS/MMS advanced features |
| Confirmation messages | MVP | 2h | High | Low | Template |
| Reminder messages (24hrs before) | V1.1 | 12h | High | Medium | Cron job scheduler |
| Follow-up satisfaction survey | V2.0 | 20h | Medium | High | Survey flow |
| Opt-out handling (STOP) | MVP | 4h | High | Medium | Unsubscribe logic |

**MVP Scope:**
- Welcome message: "Hi! I'm the AI assistant for [Course Name]. I can help with hours, rates, and bookings. How can I help?"
- Confirmation message after booking (covered in 4.3)
- STOP handling (covered in 4.4)

**V1.1:**
- Reminder SMS 24 hours before booking:
  "Reminder: You have a tee time tomorrow at 2:00 PM for 4 players. See you then! Reply CANCEL if you need to cancel."

**Technical Implementation (V1.1):**
```javascript
// Cron job runs every hour
// Check for bookings that are exactly 24 hours away
const upcomingBookings = await db.query(`
  SELECT * FROM bookings
  WHERE booking_date = CURRENT_DATE + INTERVAL '1 day'
  AND booking_time BETWEEN CURRENT_TIME AND CURRENT_TIME + INTERVAL '1 hour'
  AND reminder_sent = false
`);

for (const booking of upcomingBookings) {
  await sendSMS(booking.customer_phone, reminderMessage);
  await db.query('UPDATE bookings SET reminder_sent = true WHERE id = ?', [booking.id]);
}
```

---

### 7.3 CUSTOMER SELF-SERVICE

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Text "STATUS" to check booking | V1.1 | 8h | Medium | Medium | Booking lookup |
| Text "CANCEL" to cancel booking | MVP | 10h | High | Medium | Cancellation flow |
| Text "CHANGE" to reschedule | V2.0 | 20h | Medium | High | Complex rescheduling |
| Text "HELP" for help menu | MVP | 4h | Medium | Low | Menu response |
| Text "CONTACT" to reach staff | V1.1 | 8h | Medium | Medium | Escalation |

**MVP Scope:**
- CANCEL command (covered in 4.4)
- HELP command

**HELP Response:**
```
How can I help?

Reply with:
- HOURS for our hours
- RATES for pricing
- BOOK to make a reservation
- CANCEL [confirmation code] to cancel
- Or just ask me anything!
```

**V1.1:**
- STATUS command: "Reply with your confirmation code to check your booking"
- CONTACT command: "Let me connect you with our team. What do you need help with?"

---

## SECTION 8: INTEGRATIONS & EXTENSIONS

### 8.1 TEE SHEET SOFTWARE INTEGRATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| ForeUp connector | V1.1 | 60h | High | High | ForeUp API |
| Lightspeed Golf connector | V1.1 | 60h | High | High | Lightspeed API |
| TeeSnap connector | V2.0 | 60h | Medium | High | TeeSnap API |
| Generic API connector | V2.0+ | 80h | Low | High | Custom API builder |

**MVP:** No integrations

**V1.1:** Pick ONE integration based on early customer feedback
- Most likely: ForeUp (popular with small courses)
- Build full two-way sync (read availability, write bookings)

**Integration Priority Research Needed:**
Before building, survey first 10 customers: "What tee sheet software do you use?"
Build the most requested one first.

---

### 8.2 COMMUNICATION INTEGRATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| SendGrid (email) | MVP | 6h | High | Low | Already needed for signup |
| Slack (team alerts) | V2.0 | 20h | Low | Medium | Slack API |
| Microsoft Teams | V2.0+ | 20h | Low | Medium | Teams API |

**MVP:** SendGrid for transactional emails (signup, password reset, alerts)

---

### 8.3 CALENDAR INTEGRATIONS

**SKIP FOR MVP, V1.1, V2.0**

Low value for target customers (small golf courses).

---

### 8.4 ANALYTICS INTEGRATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Google Analytics (web traffic) | V2.0 | 4h | Low | Low | GA4 tag |
| Mixpanel (product analytics) | V1.1 | 8h | Medium | Low | Mixpanel SDK |

**V1.1:** Mixpanel for internal product analytics (track feature usage, retention, churn)

---

### 8.5 PAYMENT INTEGRATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Stripe (deposits) | V2.0 | 40h | Medium | High | Stripe API |
| Square (POS integration) | V2.0+ | 60h | Low | High | Square API |

**SKIP FOR MVP & V1.1**

Payment collection adds complexity and legal/compliance burden. Focus on booking first.

**V2.0 Consideration:**
If customers ask for deposit collection (e.g., "$20 deposit to hold tee time"), build Stripe integration.

---

### 8.6 AUTOMATION INTEGRATIONS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Zapier | V2.0 | 30h | Medium | High | Zapier platform integration |
| Make.com | V2.0+ | 30h | Low | High | Make.com API |
| n8n | V2.0+ | 30h | Low | High | n8n nodes |

**V2.0:**
Zapier integration allows customers to connect Golf HQ to their existing tools (Gmail, Sheets, CRM, etc.)

Triggers:
- New booking made
- Conversation started
- Booking canceled

Actions:
- Send SMS
- Create booking

---

## SECTION 9: HELP & SUPPORT

### 9.1 IN-APP HELP CENTER

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Searchable documentation | V1.1 | 20h | High | Medium | Docs site + search |
| Video tutorials | V1.1 | 16h | Medium | Low | Video hosting + embed |
| Step-by-step guides | V1.1 | 12h | Medium | Low | Content creation |
| Troubleshooting wizard | V2.0 | 24h | Medium | High | Interactive wizard |
| Common issues + solutions | V1.1 | 8h | Medium | Low | FAQ page |

**MVP:** Link to external documentation (Notion or simple doc site)

**V1.1:** Build proper help center with:
- Getting Started guide
- How to configure bot
- How to handle conversations
- Troubleshooting common issues
- Video walkthrough of key features

---

### 9.2 SUPPORT CHANNELS

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Live chat widget | V1.1 | 8h | High | Low | Intercom/Crisp |
| Email support | MVP | 2h | High | Low | support@ email |
| Support ticket system | V2.0 | 40h | Medium | High | Ticketing software |
| Community forum | V2.0+ | 60h | Low | High | Forum software |
| Phone support (premium) | V2.0+ | N/A | Low | N/A | Staffing required |

**MVP:**
- Email support: support@golfhq.com
- Response time: 24-48 hours

**V1.1:**
- Live chat widget (Intercom or Crisp)
- Faster response time: <4 hours during business hours

---

### 9.3 ONBOARDING ASSISTANCE

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| Setup guide checklist | MVP | 6h | High | Low | Already in wizard |
| Interactive tutorials | V1.1 | 16h | Medium | Medium | Tutorial library |
| Sample conversations | V1.1 | 8h | Medium | Low | Sample data |
| Bot training tips | V1.1 | 6h | Medium | Low | Content |
| Optimization recommendations | V2.0 | 20h | Medium | High | AI-powered suggestions |

**MVP:** Setup wizard IS the onboarding (Section 1.5)

**V1.1:**
- In-app tooltips and tutorials
- Sample conversations showing best practices
- "Bot training tips" page with suggestions

---

### 9.4 STATUS & MONITORING

| Feature | Priority | Build Time | User Value | Technical Complexity | Dependencies |
|---------|----------|------------|------------|---------------------|--------------|
| System status page | V1.1 | 12h | High | Medium | Status page (Better Uptime) |
| Scheduled maintenance notices | V1.1 | 4h | Medium | Low | Announcement system |
| Incident history | V1.1 | 6h | Low | Low | Status page |
| Social media status updates | V2.0 | 2h | Low | Low | Twitter account |

**V1.1:** Use Better Uptime or similar service for status page (status.golfhq.com)

---

## MVP FEATURE LIST (MUST LAUNCH WITH)

### Core Features Only - 6 Week Build

**Week 1-2: Authentication & Setup**
- [ ] Sign up / Login (Supabase Auth) - 8h
- [ ] Email verification - 2h
- [ ] API key setup (Twilio + Claude) - 15h
- [ ] Test connection validation - 6h
- [ ] Encrypted key storage - 8h
- [ ] Phone number provisioning (in-app purchase) - 20h
- [ ] Course profile setup - 6h
- [ ] Setup wizard UI - 12h

**Subtotal Week 1-2: 77 hours**

**Week 3-4: Core SMS & Bot**
- [ ] SMS webhook endpoint (receive messages) - 12h
- [ ] Claude integration (send/receive) - 16h
- [ ] Conversation storage (database) - 8h
- [ ] Bot system prompt configuration - 6h
- [ ] FAQ management UI - 12h
- [ ] Booking flow logic - 20h
- [ ] Confirmation SMS - 4h
- [ ] Keyword handlers (STOP, HELP, CANCEL) - 12h

**Subtotal Week 3-4: 90 hours**

**Week 5-6: Dashboard & Conversations UI**
- [ ] Dashboard (metrics cards) - 10h
- [ ] Activity feed - 8h
- [ ] Conversation list view - 12h
- [ ] Conversation detail view (chat UI) - 16h
- [ ] Human takeover (manual reply) - 20h
- [ ] Test bot simulator - 16h
- [ ] Settings page (profile, billing) - 14h
- [ ] Stripe integration (subscription) - 28h

**Subtotal Week 5-6: 124 hours**

---

**TOTAL MVP BUILD TIME: ~291 hours (7-8 weeks with 1 developer)**

Adjusted for solo developer:
- Assume 40 productive hours/week
- 291 hours ÷ 40 = **7.3 weeks**
- Add 20% buffer for bugs, testing, deployment = **9 weeks**

**REALISTIC MVP TIMELINE: 8-10 weeks**

---

### MVP Feature Checklist (Launch Requirements)

**MUST HAVE:**
✅ User signup and login
✅ API key setup (Twilio, Claude) with validation
✅ SMS number provisioning
✅ Course profile configuration
✅ SMS receiving (webhook)
✅ Bot responds to customer messages
✅ Booking flow (collect info, store in DB, send confirmation)
✅ View all conversations
✅ View conversation detail (chat interface)
✅ Human takeover (staff can reply manually)
✅ Dashboard (basic metrics: conversations, bookings, active)
✅ Test bot simulator (no real SMS cost)
✅ Subscription billing (Stripe)
✅ STOP/HELP/CANCEL keyword handling

**EXPLICITLY EXCLUDED FROM MVP:**
❌ Tee sheet integration (ForeUp, Lightspeed)
❌ Advanced analytics/charts
❌ Cost tracking (Twilio/Claude spend)
❌ Team management
❌ Bot personality customization
❌ Reminder messages (24hr before)
❌ Customer satisfaction surveys
❌ Zapier/integrations
❌ Export/reporting
❌ White-label branding
❌ Multi-language support
❌ Payment collection (deposits)
❌ Web booking page

---

## V1.1 FEATURE LIST (SHIP MONTH 2-3)

**Post-MVP, based on customer feedback**

**High Priority (Build First):**
1. **Tee Sheet Integration** (ForeUp OR Lightspeed - pick based on customer demand) - 60h
2. **Cost Tracking** (Twilio + Claude spend dashboard) - 32h
3. **Reminder SMS** (24hrs before booking) - 12h
4. **Analytics Page** (charts, conversion rates) - 24h
5. **Help Center** (documentation, videos) - 36h
6. **Live Chat Support Widget** (Intercom/Crisp) - 8h

**Medium Priority:**
7. **Logo Upload** (course branding) - 6h
8. **2FA** (two-factor authentication) - 16h
9. **Bot Personality Presets** (Professional/Friendly/Casual) - 8h
10. **Email Notifications** (customizable frequency) - 8h
11. **Team Management** (invite staff, roles) - 32h
12. **System Status Page** (Better Uptime) - 12h

**TOTAL V1.1 BUILD TIME: ~254 hours (6-7 weeks)**

---

## V2.0 FEATURE LIST (SHIP MONTH 4-6)

**Advanced features, enterprise features, AI improvements**

1. **Second Tee Sheet Integration** (if customers demand multiple) - 60h
2. **Zapier Integration** (connect to other tools) - 30h
3. **Web Booking Page** (alternative to SMS) - 64h
4. **Stripe Payment Integration** (collect deposits) - 40h
5. **Customer Satisfaction Surveys** (post-conversation rating) - 20h
6. **A/B Testing** (test different bot prompts) - 30h
7. **Advanced Analytics** (peak hours heatmap, question categorization) - 32h
8. **Export Reports** (CSV, PDF) - 28h
9. **Scheduled Reports** (email daily/weekly summaries) - 20h
10. **Custom System Prompt** (advanced users) - 8h
11. **GDPR Compliance Tools** (data export, deletion) - 20h

**TOTAL V2.0 BUILD TIME: ~352 hours (8-9 weeks)**

---

## FEATURE DEPENDENCIES MAP

```
CRITICAL PATH (Sequential):

1. Auth & User Management
   ↓
2. API Key Setup (Twilio + Claude)
   ↓
3. Phone Number Provisioning
   ↓
4. SMS Webhook (receive messages)
   ↓
5. Claude Integration (bot responses)
   ↓
6. Conversation Storage
   ↓
7. Dashboard & Conversation UI
   ↓
8. Billing (Stripe)
   ↓
9. LAUNCH MVP

PARALLEL TRACKS (Can build simultaneously):

Track A: Core Bot Logic
- FAQ management
- Booking flow
- Keyword handlers
- System prompt

Track B: User Interface
- Dashboard components
- Conversation list/detail
- Settings pages
- Test simulator

Track C: Infrastructure
- Database schema
- API endpoints
- Webhook handling
- Error logging
```

**Bottleneck Features** (block other features):
1. **Auth System** - blocks everything
2. **SMS Webhook** - blocks conversation features
3. **Claude Integration** - blocks bot features
4. **Database Schema** - blocks data features

**Can Build in Parallel:**
- Dashboard UI (while backend is being built)
- Settings pages (while core features are built)
- Documentation (while features are built)

---

## BUILD ROADMAP (GANTT-STYLE)

### MVP: Weeks 1-9

**Week 1:**
- [ ] Project setup (Next.js, Supabase, Tailwind)
- [ ] Database schema design
- [ ] Auth (signup, login, email verification)
- [ ] API key setup UI (forms, validation)

**Week 2:**
- [ ] Encrypted key storage
- [ ] Test connection logic (Twilio + Claude)
- [ ] Phone number provisioning API integration
- [ ] Setup wizard (multi-step form)

**Week 3:**
- [ ] SMS webhook endpoint
- [ ] Receive and parse incoming SMS
- [ ] Claude API integration
- [ ] Bot system prompt engineering

**Week 4:**
- [ ] Conversation database storage
- [ ] FAQ management UI
- [ ] Booking flow logic (state machine)
- [ ] Confirmation SMS templates

**Week 5:**
- [ ] Dashboard page (metrics)
- [ ] Activity feed component
- [ ] Conversation list view
- [ ] Keyword handlers (STOP, HELP, CANCEL)

**Week 6:**
- [ ] Conversation detail view (chat UI)
- [ ] Human takeover feature
- [ ] Manual SMS sending
- [ ] Test bot simulator

**Week 7:**
- [ ] Settings pages (profile, course, billing)
- [ ] Stripe integration setup
- [ ] Subscription checkout flow
- [ ] Webhook handlers (payment events)

**Week 8:**
- [ ] Testing & bug fixes
- [ ] Documentation
- [ ] Deploy to production
- [ ] Onboarding flow testing

**Week 9:**
- [ ] Beta testing with 2-3 courses
- [ ] Gather feedback
- [ ] Final polish
- [ ] PUBLIC LAUNCH 🚀

---

### V1.1: Weeks 10-16

**Week 10-11:**
- [ ] Cost tracking (Twilio + Claude APIs)
- [ ] Analytics page (charts, metrics)
- [ ] Conversion rate calculations

**Week 12-14:**
- [ ] Tee sheet integration (ForeUp or Lightspeed)
- [ ] API authentication
- [ ] Read availability
- [ ] Write bookings
- [ ] Two-way sync

**Week 15:**
- [ ] Reminder SMS (24hrs before)
- [ ] Help center (docs, videos)
- [ ] Live chat widget

**Week 16:**
- [ ] Team management (invite, roles)
- [ ] 2FA implementation
- [ ] Bot personality presets
- [ ] V1.1 LAUNCH 🎉

---

### V2.0: Weeks 17-25

**Week 17-19:**
- [ ] Web booking page (full UI)
- [ ] Integration with SMS bot data
- [ ] Mobile-responsive design

**Week 20-22:**
- [ ] Zapier integration
- [ ] Second tee sheet integration (if needed)
- [ ] Stripe payment integration (deposits)

**Week 23-25:**
- [ ] Customer satisfaction surveys
- [ ] A/B testing framework
- [ ] Advanced analytics (heatmaps, categorization)
- [ ] Export reports (CSV, PDF)
- [ ] V2.0 LAUNCH 🎊

---

## COMPETITIVE FEATURE COMPARISON

| Feature | Golf HQ (MVP) | ForeUp | Lightspeed | TeeSnap | MemberSports | GolfNow |
|---------|---------------|--------|------------|---------|--------------|---------|
| **Core Tee Sheet** | ❌ | ✅ | ✅ | ✅ | ✅ | ✅ |
| **SMS Booking** | ✅ | ⚠️ Limited | ⚠️ Limited | ❌ | ❌ | ❌ |
| **AI Conversation** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **24/7 Auto-Response** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |
| **Integrations** | ❌ (V1.1) | ✅ | ✅ | ✅ | ✅ | ✅ |
| **POS Integration** | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Member Management** | ❌ | ✅ | ✅ | ✅ | ✅ | ❌ |
| **Marketing Tools** | ❌ | ✅ | ✅ | ⚠️ | ✅ | ✅ |
| **Pricing** | $350/mo | $200-500/mo | $300-800/mo | $250-600/mo | $400+/mo | Commission |
| **Self-Service Setup** | ✅ | ❌ | ❌ | ⚠️ | ❌ | ⚠️ |
| **Bring Own APIs** | ✅ | ❌ | ❌ | ❌ | ❌ | ❌ |

**Golf HQ Competitive Advantages:**
1. ✅ **AI-powered SMS** (no one else has this)
2. ✅ **24/7 automated customer service** (competitors require staff)
3. ✅ **Self-service setup** (competitors require onboarding calls)
4. ✅ **Transparent pricing** ($350/mo flat - no hidden fees)
5. ✅ **Bring your own APIs** (customer owns their data/costs)

**Golf HQ Competitive Disadvantages (MVP):**
1. ❌ **Not a full tee sheet** (must integrate with existing)
2. ❌ **No POS integration** (can't process payments... yet)
3. ❌ **No member management** (public courses only for MVP)
4. ❌ **Limited reporting** (basic analytics only)

**Strategic Positioning:**
Golf HQ is NOT competing with ForeUp/Lightspeed (full tee sheet systems).
Golf HQ is an ADD-ON to existing systems - enhancing them with AI SMS.

**Target Customer:**
- Already has tee sheet software (ForeUp, Lightspeed, or even manual)
- Gets 10-50 phone calls/day asking same questions
- Wants to offer SMS booking without hiring more staff
- Small budget ($350/mo is affordable)

---

## RISK ASSESSMENT

### Technical Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Claude API reliability issues | Medium | High | Implement retry logic, fallback responses, error handling |
| Twilio webhook delivery failures | Medium | High | Implement queue system (BullMQ), retry failed webhooks |
| Tee sheet API integration complexity | High | High | Start with ONE integration, build robust error handling |
| Bot hallucinations (wrong info) | High | Critical | Strict system prompt, RAG with course FAQs, human review |
| SMS delivery delays | Low | Medium | Set customer expectations, show "sending" status |
| Database performance (high volume) | Low | Medium | Proper indexing, caching, pagination |
| Encryption key management | Medium | High | Use Supabase Vault or AWS KMS, never store plain text |

**Biggest Technical Risk: Bot Hallucinations**
- Customer asks "What are your rates?" → Bot makes up prices
- **Mitigation:**
  - Force customers to fill out ALL FAQs before launch
  - System prompt: "ONLY use information provided in FAQ section. If you don't know, say 'Let me connect you with our team.'"
  - Regular testing with real questions
  - Easy takeover for staff when bot fails

---

### User Adoption Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Setup too complex (>30 mins) | Medium | High | Streamline wizard, provide video walkthrough, live chat support |
| Customers don't trust AI bot | High | Medium | Allow easy takeover, show bot accuracy metrics, transparent about AI |
| Customers can't afford Twilio+Claude costs | Medium | High | Cost calculator during signup, clear usage estimates, budget alerts |
| Existing tee sheet integration doesn't work | High | Critical | Start with manual bookings (store in Golf HQ DB), integrate later |
| Bot provides bad customer experience | High | Critical | Extensive testing, easy human takeover, quick response to feedback |
| Churn after free trial | High | Critical | Onboarding checklist, proactive support, show ROI (time saved, bookings made) |

**Biggest Adoption Risk: Setup Abandonment**
- 50%+ of signups never complete setup
- **Mitigation:**
  - Setup wizard completion in <15 minutes
  - Save progress (can come back later)
  - Email reminders ("Complete your setup!")
  - Offer setup call for premium tier

---

### Support Burden Risks

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Too many support tickets | High | High | Comprehensive docs, in-app help, live chat (V1.1), video tutorials |
| Bot misconfiguration by users | High | Medium | Smart defaults, validation, "Test Bot" before going live |
| API key issues (wrong keys, expired) | High | Medium | Clear error messages, troubleshooting guides, automatic testing |
| Customer wants custom features | Medium | Medium | Feature request system, prioritize based on demand, say "no" often |
| Integration bugs (tee sheet sync) | High | High | Robust error logging, automatic retry, clear error messages to users |

**Support Burden Reduction Strategies:**
1. **Self-service docs** (reduce tickets by 50%)
2. **In-app troubleshooting** (detect common issues, show fix)
3. **Proactive monitoring** (alert user before they notice issue)
4. **Video tutorials** (visual learners)
5. **Community forum** (users help each other - V2.0)

---

### Cost Implications

| Risk | Likelihood | Impact | Mitigation |
|------|------------|--------|------------|
| Twilio costs higher than expected | Medium | Medium | Customer pays Twilio directly (not our cost), provide usage estimates |
| Claude API costs higher than expected | Medium | Medium | Customer pays Claude directly (not our cost), optimize prompts for token efficiency |
| Infrastructure costs scale poorly | Low | High | Use serverless (Vercel, Supabase), efficient queries, caching |
| Support costs too high | High | Critical | Self-service focus, docs, automation |
| Feature development too slow | Medium | High | Ruthless prioritization, say no to non-essential features |

**Cost Structure:**
- **Customer pays:** Twilio ($0.0079/SMS), Claude API (~$0.01-0.10/conversation), Golf HQ subscription ($350/mo)
- **Golf HQ pays:** Hosting (Vercel ~$20/mo), Database (Supabase ~$25/mo), Email (SendGrid ~$15/mo), Support chat (Crisp ~$25/mo)
- **Total Golf HQ costs per customer:** ~$85/mo
- **Gross margin:** $350 - $85 = $265/mo per customer (76% margin)

**Break-even:** 1 customer covers infrastructure costs. 10 customers = sustainable.

---

## FEATURE KILL CRITERIA

### Features to SKIP Entirely:

1. ❌ **White-label / Custom Branding**
   - Reason: Enterprise feature, not worth complexity for $350/mo tier
   - Alternative: Offer as $1000+/mo enterprise tier (future)

2. ❌ **Payment Collection (Deposits)**
   - Reason: Legal/compliance burden (PCI-DSS), refund management complexity
   - Alternative: Partner with tee sheet software that already handles this

3. ❌ **Web Booking Page (MVP/V1.1)**
   - Reason: SMS is the differentiator, web booking is commodity
   - Alternative: V2.0 feature if customers demand it

4. ❌ **Multi-Language Support**
   - Reason: Target market (US golf courses) primarily English-speaking
   - Alternative: V2.0+ if expanding internationally

5. ❌ **Custom Report Builder**
   - Reason: Over-engineering, most customers want standard reports
   - Alternative: Provide CSV export, let them build in Excel

6. ❌ **Phone Support**
   - Reason: Not scalable, too expensive for $350/mo pricing
   - Alternative: Email + live chat only

7. ❌ **Mobile App (iOS/Android)**
   - Reason: Web app is mobile-responsive, native app is overkill
   - Alternative: PWA (Progressive Web App) if needed (V2.0)

8. ❌ **Member Management System**
   - Reason: Scope creep, tee sheet software already does this
   - Alternative: Integrate with existing member systems (V2.0)

9. ❌ **Marketing Automation (Email campaigns, etc.)**
   - Reason: Not core value prop, many tools already exist
   - Alternative: Integrate with Mailchimp/Klaviyo (V2.0)

10. ❌ **Voice Calling (AI phone answering)**
    - Reason: Significantly more complex than SMS, higher costs
    - Alternative: V3.0+ expansion after SMS proven

---

### Gold Plating vs Necessity:

| Feature | Necessity Level | Rationale |
|---------|----------------|-----------|
| **API Key Setup** | CRITICAL | Core functionality - can't work without it |
| **SMS Webhook** | CRITICAL | Core functionality |
| **Bot Responses** | CRITICAL | The product |
| **Dashboard Metrics** | CRITICAL | Customers need to see ROI |
| **Human Takeover** | CRITICAL | Safety valve when bot fails |
| **Billing/Subscription** | CRITICAL | How we get paid |
| **Test Bot Simulator** | HIGH | Prevents bad customer experiences |
| **Booking Flow** | HIGH | Major use case |
| **Conversation History** | HIGH | Customers need to review |
| **Cost Tracking** | MEDIUM | Nice to have, not critical for MVP |
| **Tee Sheet Integration** | MEDIUM | Can launch without it, add post-MVP |
| **Analytics Charts** | LOW | Simple metrics sufficient for MVP |
| **Team Management** | LOW | Most customers are single-user initially |
| **Logo Upload** | LOW | Doesn't affect functionality |
| **Bot Personality Customization** | LOW | Good defaults are enough |

---

## USER FLOWS

### Critical Flow 1: First-Time Setup (NEW CUSTOMER)

**Entry Point:** User signs up at golfhq.com

**Success State:** Bot is live and responding to SMS

**Steps:**
1. Land on homepage → Click "Start Free Trial"
2. Enter email, password, course name → Submit
3. Check email → Click verification link
4. Redirected to Setup Wizard Step 1: API Keys
5. Open new tab → Get Twilio credentials from Twilio console
6. Paste Account SID and Auth Token → Click "Test Connection" → ✅ Success
7. Open new tab → Get Claude API key from Anthropic console
8. Paste Claude API key → Click "Test Connection" → ✅ Success
9. Click "Next Step"
10. Setup Wizard Step 2: Phone Number
11. Enter ZIP code → Click "Search Numbers"
12. List of 10 numbers appears → Select one → Click "Purchase"
13. Number purchased → Webhook configured automatically → "Send TEST to your new number to verify"
14. User sends TEST from personal phone → ✅ "Test successful!"
15. Click "Next Step"
16. Setup Wizard Step 3: Course Profile
17. Fill out name (pre-filled), address, phone, website, hours, description
18. Click "Next Step"
19. Setup Wizard Step 4: Test Your Bot
20. Simulated iPhone interface appears
21. Type "What are your hours?" → Bot responds correctly
22. Type "Book a tee time for tomorrow at 2pm for 4 players" → Bot walks through booking
23. Satisfied → Click "Go Live"
24. Confirmation modal: "Your bot is now live! Customers can text your number."
25. Redirected to Dashboard
26. Dashboard shows: 0 conversations, 0 bookings, "Share your SMS number!"

**Time to Complete:** 15-20 minutes

**Error States:**
- Invalid API keys → Clear error message with link to docs
- Twilio number purchase fails → "Try again" or "Link to Twilio console"
- Bot test fails → "Check your configuration" with troubleshooting link

**Edge Cases:**
- User closes browser mid-setup → Progress saved, can resume later (V1.1)
- User already has Twilio number → Option to "Use existing number" (V2.0)

---

### Critical Flow 2: Customer Books Tee Time via SMS

**Entry Point:** Customer texts golf course's SMS number

**Success State:** Booking confirmed, stored in database, confirmation SMS sent

**Steps (Customer Side):**
1. Customer texts: "Hi, I want to book a tee time"
2. Bot responds: "I'd be happy to help! What date would you like to play?"
3. Customer: "Tomorrow"
4. Bot: "Great! What time works for you?"
5. Customer: "2pm"
6. Bot: "Perfect! How many players?"
7. Customer: "4"
8. Bot: "Can I get your name?"
9. Customer: "John Smith"
10. Bot: "Thanks John! Your email? (optional, for confirmation)"
11. Customer: "john@email.com"
12. Bot: "All set! You're booked for [Tomorrow's Date] at 2:00 PM for 4 players. Confirmation: #GH-20251122-001. See you then! ⛳️"

**Steps (System Side):**
1. Incoming SMS hits webhook
2. Lookup conversation by phone number (create new if first message)
3. Send message history + new message to Claude API
4. Claude generates response (following booking flow)
5. Store bot response in database
6. Send SMS via Twilio
7. Update conversation state
8. When booking complete:
   - Create booking record in database
   - Generate confirmation code
   - Send confirmation SMS
   - Update dashboard metrics

**Time to Complete:** 2-4 minutes (depends on customer typing speed)

**Error States:**
- Customer provides invalid date ("yesterday") → Bot asks for valid future date
- Customer provides invalid time ("25pm") → Bot asks for valid time
- Customer abandons mid-flow → Conversation saved, can resume later
- Twilio SMS send fails → Retry 3 times, then alert staff

**Edge Cases:**
- Customer asks unrelated question mid-booking ("What's the weather?") → Bot answers, then returns to booking
- Customer wants to cancel mid-booking ("never mind") → Bot confirms cancellation
- Multiple people texting same number simultaneously → Each conversation tracked separately

---

### Critical Flow 3: Staff Takes Over Conversation

**Entry Point:** Staff views conversation where bot is struggling

**Success State:** Staff successfully helps customer, returns to bot

**Steps:**
1. Staff logged into Golf HQ dashboard
2. Sees new conversation in Activity Feed: "Customer asking about tournament rates"
3. Clicks conversation → Opens detail view
4. Sees bot has responded 3 times but customer still confused
5. Clicks "Take Over Conversation"
6. Confirmation: "Bot will stop responding. You'll handle manually."
7. Clicks "Confirm"
8. Banner appears: "🟡 You are now responding (Bot paused)"
9. Text input appears at bottom of chat
10. Staff types: "Hi! I can help with tournament rates. How many players?"
11. Clicks "Send" → SMS delivers to customer
12. Customer responds: "We have 40 players"
13. Message appears in chat → Staff responds with pricing
14. Conversation resolved → Staff clicks "End Takeover"
15. Bot resumes normal operation
16. Staff clicks "Mark as Resolved"
17. Conversation moves to Resolved list

**Time to Complete:** 3-5 minutes

**Error States:**
- SMS send fails → "Message not delivered. Try again."
- Customer stops responding → Staff can still end takeover
- Multiple staff try to take over → First person locks conversation

---

### Critical Flow 4: Course Owner Updates Bot Knowledge

**Entry Point:** Owner wants to update hours for winter season

**Success State:** Bot now responds with new hours

**Steps:**
1. Owner logs in → Navigates to "Bot Settings" → "Course Information"
2. Finds "Hours & Availability" section
3. Current text: "We're open daily 6:30am - 8pm."
4. Updates to: "We're open daily 7am - 6pm (winter hours Nov-Feb)."
5. Clicks "Save Changes"
6. Confirmation: "✅ Changes saved. Bot will use updated info immediately."
7. Clicks "Test Bot" to verify
8. In simulator, types: "What are your hours?"
9. Bot responds: "We're open daily 7am - 6pm (winter hours Nov-Feb). How can I help?"
10. ✅ Verified working

**Time to Complete:** 2 minutes

---

## CRITICAL QUESTIONS - ANSWERED

### 1. Can we build MVP in 4 weeks with 1 developer?

**Answer: NO. Realistic timeline is 8-10 weeks.**

Breakdown:
- Core features: ~291 hours
- 1 developer @ 40 hours/week = 7.3 weeks
- Add 20% buffer for bugs, testing, deployment = **9 weeks**

**To hit 4 weeks:**
- Reduce scope dramatically (no dashboard, no human takeover, no billing)
- Hire 2 developers working parallel
- Use more third-party tools (no-code elements)

**Recommendation:** Aim for 8 week MVP with core features. Launch with beta customers week 7-8.

---

### 2. What features justify $350/month pricing?

**Value Proposition Calculation:**

**Customer Costs Without Golf HQ:**
- Staff answering phones/SMS: 10 hours/week @ $15/hr = $600/month
- Missed bookings (after hours): ~5/month @ $45 avg = $225/month
- **Total:** ~$825/month in lost revenue/costs

**Customer Costs With Golf HQ:**
- Golf HQ subscription: $350/month
- Twilio: ~$50/month (600 SMS @ $0.0079 each)
- Claude API: ~$30/month (300 conversations @ $0.10 each)
- **Total:** $430/month

**Customer Savings:** $825 - $430 = **$395/month savings**
**ROI:** Customer breaks even immediately, saves $395+/month

**Features that justify pricing:**
1. ✅ **24/7 AI customer service** (no staff needed after hours)
2. ✅ **Automated booking** (no missed opportunities)
3. ✅ **Human takeover** (safety valve when needed)
4. ✅ **Conversation history** (searchable customer interactions)
5. ✅ **Cost tracking** (visibility into Twilio/Claude spend)
6. ✅ **Self-service setup** (no onboarding fees)

**Competitive Pricing:**
- ForeUp: $200-500/month (but requires manual SMS handling)
- Lightspeed: $300-800/month (no AI features)
- GolfNow: Commission-based (20-25% of booking)

Golf HQ at $350/month is **competitively priced** with clear ROI.

---

### 3. What features reduce support burden?

**High Impact:**
1. ✅ **Setup wizard with validation** (prevents wrong configuration)
2. ✅ **Test Bot simulator** (find issues before going live)
3. ✅ **API key test buttons** (immediate feedback on wrong keys)
4. ✅ **In-app documentation** (contextual help)
5. ✅ **Clear error messages** ("API key invalid. Get yours here: [link]")
6. ✅ **Video tutorials** (visual walkthrough)
7. ✅ **FAQ pre-population** (smart defaults)

**Medium Impact:**
8. ✅ **Live chat widget** (deflect email support)
9. ✅ **Status page** (proactive incident communication)
10. ✅ **Automated health checks** (detect issues before customer does)

**Feature Design for Low Support:**
- **Validate early:** Check API keys work BEFORE allowing setup completion
- **Smart defaults:** Pre-fill FAQs with common answers
- **Contextual help:** Tooltip on every input field
- **Error recovery:** Auto-retry failed webhooks, suggest fixes

**Support Reduction Goal:** <5% of customers need support per month (industry standard: 20%)

---

### 4. What features help with customer acquisition?

**High Impact (MVP):**
1. ✅ **Free trial** (14 days, no credit card required)
2. ✅ **Self-service signup** (no sales call needed)
3. ✅ **Test bot before paying** (try before you buy)
4. ✅ **Clear pricing** ($350/mo on homepage)
5. ✅ **Fast setup** (<15 minutes)

**Medium Impact (V1.1):**
6. ✅ **ROI calculator** (show savings vs hiring staff)
7. ✅ **Video demo** (see it in action)
8. ✅ **Customer testimonials** (social proof)
9. ✅ **Integration badges** ("Works with ForeUp, Lightspeed")
10. ✅ **Live demo bot** (text our number to try)

**V2.0:**
11. ✅ **Referral program** (refer another course, get $100 credit)
12. ✅ **Case studies** (detailed success stories)
13. ✅ **Zapier listing** (discoverability)

**Acquisition Strategy:**
- **SEO:** "SMS booking for golf courses", "AI golf course assistant"
- **Content marketing:** Blog posts, guides, best practices
- **Direct outreach:** Email/call small golf courses
- **Partnerships:** Tee sheet software companies (ForeUp, Lightspeed)

---

### 5. What features improve retention/reduce churn?

**Churn Reduction (MVP):**
1. ✅ **Immediate value** (see bookings day 1)
2. ✅ **Human takeover** (don't abandon when bot fails)
3. ✅ **Dashboard metrics** (see ROI constantly)
4. ✅ **Reliable uptime** (99.9%+ SLA)

**Churn Reduction (V1.1):**
5. ✅ **Cost transparency** (know exactly what you're spending)
6. ✅ **Integration with existing tools** (no workflow disruption)
7. ✅ **Regular feature updates** (show we're improving)
8. ✅ **Responsive support** (<4 hour response time)

**V2.0:**
9. ✅ **Advanced analytics** (prove we're driving revenue)
10. ✅ **Automation** (reminders, follow-ups - stickiness)
11. ✅ **Custom features** (for high-value customers)

**Retention Metrics to Track:**
- Monthly churn rate (goal: <5%)
- Time to first booking (goal: <24 hours)
- Active conversations per week (leading indicator)
- Support ticket volume (should decrease over time)

**Red Flags for Churn:**
- No conversations in 7 days (possible webhook issue)
- No bookings in 30 days (bot not working or no marketing)
- Support ticket about "not worth it" (pricing concern)
- Low conversion rate (bot accuracy issue)

**Proactive Retention:**
- Weekly email: "Your stats this week: X conversations, Y bookings"
- Monthly business review: "You saved $400 in staff costs this month"
- Quarterly check-in: "What features would help you more?"

---

### 6. What's the minimum viable product that customers will pay for?

**Core MVP (Must Have):**
1. SMS number customers can text
2. Bot responds intelligently to questions
3. Bot can take bookings (name, date, time, player count)
4. Confirmation SMS sent to customer
5. Course owner can view all conversations
6. Course owner can take over when needed
7. Course owner can configure FAQ responses
8. Dashboard showing bookings made

**That's it.** Everything else is enhancement.

**Hypothesis to Validate:**
"Golf course owners will pay $350/month for an AI that handles SMS bookings 24/7 without requiring tee sheet integration."

**MVP Test:**
- Launch to 5 beta customers
- Track: Daily active usage, bookings made, churn at 30 days
- Goal: 80%+ retention after month 1
- If validated → build V1.1 features
- If not → pivot or kill

---

### 7. What features can be templates vs custom configuration?

**Templates (Pre-built, Low Effort):**
1. ✅ **FAQ categories** (Hours, Rates, Location, Policies)
2. ✅ **Booking flow** (standardized questions)
3. ✅ **Confirmation messages** (simple template with variables)
4. ✅ **Bot personality** (3 preset options: Professional, Friendly, Casual)
5. ✅ **Keyword responses** (STOP, HELP, CANCEL)
6. ✅ **System prompts** (proven prompt engineering)

**Custom Configuration (User Inputs):**
1. Course name, address, hours
2. FAQ answers (fill in the blanks)
3. Booking policies (cancellation rules)
4. Staff contact info
5. Special instructions

**Why Templates Matter:**
- Faster setup (15 mins vs 1+ hour)
- Lower support burden (fewer ways to misconfigure)
- Proven to work (tested prompts)
- Easier to update (we push improvements to all customers)

**Customization Philosophy:**
- 80% templated (opinionated, works out of box)
- 20% customizable (course-specific info)
- Advanced customization only for power users (V2.0)

---

### 8. How do we make self-service actually work?

**Self-Service Success Factors:**

**1. Obvious First Steps**
- Homepage → "Start Free Trial" button
- Signup → Immediate redirect to setup wizard
- Step-by-step wizard (can't skip steps)

**2. Instant Feedback**
- "Test Connection" buttons (know immediately if keys work)
- "Test Bot" simulator (see it working before going live)
- Progress indicators (Step 2 of 4)

**3. Contextual Help**
- Every input has tooltip ("What's this?")
- Link to docs for complex steps
- Video embedded in wizard ("Watch how")

**4. Smart Defaults**
- Pre-fill everything possible
- Suggest answers (e.g., "Common dress code: Collared shirts required")
- Template responses ready to use

**5. Error Prevention**
- Validate in real-time (red/green indicators)
- Block "Next" until current step valid
- Clear error messages with fixes

**6. Recover from Mistakes**
- Save progress (can leave and come back)
- "Edit" buttons (change anything anytime)
- Undo/reset options

**7. Safety Nets**
- "Test Bot" before going live (no real SMS cost)
- Human takeover always available
- Pause bot anytime

**8. Proactive Support**
- If setup abandoned → Email "Need help?"
- If no conversations in 7 days → "Troubleshooting tips"
- Live chat badge (visible but not intrusive)

**Self-Service Metrics:**
- Setup completion rate (goal: >80%)
- Time to complete setup (goal: <15 minutes)
- Support tickets per new customer (goal: <20%)
- Days to first booking (goal: <3 days)

---

### 9. What's the "wow" feature that gets demos?

**The Demo Hook:**

**"Text this number right now: (512) 555-GOLF"**

Live demo where prospect texts our demo bot:
- Prospect: "What are your hours?"
- Bot: "We're open daily 6:30am - 8pm! Want to book a tee time?"
- Prospect: "How much does it cost?"
- Bot: "$45 weekday, $60 weekend for 18 holes. Should I get you set up for a round?"
- Prospect: "Book me for tomorrow at 2pm"
- Bot: [walks through booking flow]
- Bot: "All set! Confirmation #DEMO-123. See you tomorrow at 2pm! ⛳️"

**Then show dashboard:**
- "This conversation took 2 minutes"
- "Your staff would have spent 5 minutes on the phone"
- "Bot handled it automatically at 11pm (after hours)"
- "Cost: $0.15 (vs $2+ for phone call)"

**Why This Works:**
1. ✅ Immediate hands-on experience
2. ✅ Shows AI quality (not dumb chatbot)
3. ✅ Demonstrates 24/7 capability
4. ✅ Proves speed (2 min booking)
5. ✅ Shows ROI (time + cost savings)

**Other "Wow" Moments:**
- Human takeover (show how easy it is to jump in)
- Test Bot simulator (try different scenarios)
- Cost calculator (input your volume → see savings)

**Demo Script:**
1. "Let me show you how it works. Pull out your phone."
2. "Text anything to this number." [prospect texts]
3. [Open dashboard live] "See? It's already responding."
4. "Try booking a tee time." [prospect goes through flow]
5. [Show booking created] "Done. No staff needed. Now imagine this at 2am."
6. [Show cost] "That conversation cost $0.15. You just saved 5 minutes of staff time."
7. "Want to see what happens when the bot doesn't know something?" [show takeover]
8. "Questions?"

---

### 10. What features do competitors NOT have that we can own?

**Golf HQ's Unique Features:**

**1. ✅ AI-Powered SMS Conversations (UNIQUE)**
- Competitors: Basic SMS (Twilio notifications), no AI
- Golf HQ: Full conversational AI, contextual understanding
- **Ownership opportunity:** Be THE AI solution for golf

**2. ✅ Bring Your Own APIs (UNIQUE)**
- Competitors: All-in-one pricing (you pay them, they pay Twilio)
- Golf HQ: Customer owns Twilio + Claude accounts (data ownership)
- **Ownership opportunity:** Transparent costs, data privacy

**3. ✅ Self-Service Setup (UNIQUE for SMS AI)**
- Competitors: Require onboarding calls, account managers
- Golf HQ: 15-minute setup, no human needed
- **Ownership opportunity:** "SMS AI in 15 minutes"

**4. ✅ Test Bot Before Going Live (UNIQUE)**
- Competitors: Go live and hope it works
- Golf HQ: Simulator lets you test entire flow
- **Ownership opportunity:** "Try before you buy"

**5. ✅ Human Takeover (RARE in AI tools)**
- Competitors: Either full AI or full human, not hybrid
- Golf HQ: Seamless switch between bot and human
- **Ownership opportunity:** "AI with a safety net"

**6. ✅ Integration (not replacement) (STRATEGIC)**
- Competitors: Want you to switch entirely to their system
- Golf HQ: "Keep your tee sheet, add AI on top"
- **Ownership opportunity:** "Enhance what you have"

**7. ✅ Cost Tracking (USEFUL)**
- Competitors: Hidden costs, surprise bills
- Golf HQ: Real-time cost dashboard (Twilio + Claude)
- **Ownership opportunity:** "Know exactly what you're spending"

**Market Positioning:**
- **NOT:** "We replace ForeUp/Lightspeed"
- **YES:** "We make your existing system smarter with AI SMS"

**Category Creation:**
- "AI SMS Assistant for Golf Courses"
- New category = no direct competitors
- First mover advantage

**Long-Term Moat:**
- Proprietary bot training data (conversations)
- Integration partnerships (ForeUp, Lightspeed)
- Network effects (community of courses sharing best practices)
- Brand ("Golf HQ = AI for golf")

---

## FINAL RECOMMENDATIONS

### SHIP MVP IN 8-10 WEEKS

**MVP Scope (Ruthlessly Minimal):**
1. Signup, login, API key setup
2. SMS receive → Claude → SMS send
3. Booking flow (store in Golf HQ DB, no tee sheet integration)
4. Dashboard (simple metrics)
5. Conversation viewer + human takeover
6. FAQ management
7. Billing (Stripe subscription)

**Total Build:** ~291 hours = 7-9 weeks with 1 developer

**Launch Strategy:**
- Week 1-6: Build
- Week 7: Internal testing
- Week 8: Beta with 3-5 courses
- Week 9: Gather feedback, fix critical bugs
- Week 10: Public launch + marketing push

---

### V1.1 IN WEEKS 10-16 (BASED ON FEEDBACK)

**Priority Features:**
1. Tee sheet integration (ForeUp OR Lightspeed - pick one)
2. Cost tracking dashboard
3. Reminder SMS (24hrs before)
4. Analytics page with charts
5. Help center + live chat

**Only build what customers actually request.**

---

### PRICING STRATEGY

**Pricing Tiers:**

**MVP (Single Tier):**
- $350/month
- Unlimited conversations
- Unlimited bookings
- 1 SMS number
- 3 team members
- Email support

**V1.1 (Consider Two Tiers):**

**Starter: $199/month**
- 500 conversations/month
- Unlimited bookings
- 1 SMS number
- 1 user
- Email support only
- No integrations

**Pro: $350/month** (Original tier)
- Unlimited conversations
- Unlimited bookings
- 1 SMS number
- 5 team members
- Live chat support
- Tee sheet integrations
- Cost tracking
- Advanced analytics

**V2.0 (Three Tiers):**

**Starter: $199/mo**
**Pro: $350/mo**
**Enterprise: $799/mo**
- Everything in Pro, plus:
- 3 SMS numbers (multi-course)
- White-label branding
- Custom domain
- Dedicated account manager
- Phone support
- SLA guarantee (99.9% uptime)

---

### SUCCESS METRICS

**MVP (Month 1-2):**
- ✅ 10 paying customers
- ✅ 80%+ setup completion rate
- ✅ <10% churn after month 1
- ✅ <5 support tickets per customer
- ✅ 99%+ uptime

**V1.1 (Month 3-6):**
- ✅ 50 paying customers
- ✅ $17,500/mo MRR
- ✅ <5% churn
- ✅ 70%+ using tee sheet integration
- ✅ NPS score >40

**V2.0 (Month 7-12):**
- ✅ 200 paying customers
- ✅ $70,000/mo MRR
- ✅ <3% churn
- ✅ 50+ courses on annual plans
- ✅ 1-2 enterprise customers ($799/mo tier)

---

### GO/NO-GO DECISION POINTS

**After MVP Launch (Month 2):**
- ✅ **GO if:** 10+ customers, <20% churn, positive feedback
- ❌ **NO-GO if:** <5 customers, >50% churn, major product issues
- 🔄 **PIVOT if:** Customers want different features than expected

**After V1.1 (Month 6):**
- ✅ **GO if:** 40+ customers, growing MRR, clear product-market fit
- ❌ **NO-GO if:** Stagnant growth, high churn, unsustainable support burden
- 🔄 **PIVOT if:** Different customer segment shows more interest

---

### FOUNDER TIME ALLOCATION

**MVP Phase (Weeks 1-10):**
- 70% Building
- 20% Beta customer support
- 10% Marketing/sales

**V1.1 Phase (Weeks 11-20):**
- 50% Building
- 30% Customer support
- 20% Marketing/sales

**V2.0 Phase (Weeks 21-30):**
- 40% Building
- 30% Customer support
- 30% Marketing/sales/partnerships

**Goal:** Reduce building % over time, increase revenue-generating activities.

---

## CONCLUSION

**Golf HQ is buildable in 8-10 weeks with focused scope.**

**Key Success Factors:**
1. ✅ Ruthless prioritization (MVP only has critical features)
2. ✅ Self-service first (minimize support burden)
3. ✅ Integration not replacement (play nice with existing tools)
4. ✅ AI quality (bot must actually work)
5. ✅ Clear ROI (show time + cost savings)
6. ✅ Fast iteration (ship, learn, improve)

**Biggest Risks:**
1. ⚠️ Bot hallucinations (mitigate with strict prompts + testing)
2. ⚠️ Setup abandonment (mitigate with excellent UX)
3. ⚠️ Tee sheet integration complexity (mitigate by launching without it)
4. ⚠️ Support burden (mitigate with docs + self-service)

**Competitive Advantage:**
- First AI SMS solution for golf
- Self-service (no sales calls)
- Transparent pricing ($350/mo)
- Bring your own APIs (data ownership)

**Market Opportunity:**
- 15,000 golf courses in US
- 5,000 are small courses (9-18 holes) - target market
- If we capture 1% (50 courses) = $210,000/year revenue
- If we capture 5% (250 courses) = $1,050,000/year revenue

**Recommendation:** BUILD IT. Ship fast, learn fast, iterate fast.

---

**END OF SPECIFICATION**

*Document Version: 1.0*
*Last Updated: 2025-11-21*
*Total Features Defined: 150+*
*MVP Build Time: 291 hours (8-10 weeks)*
*Estimated Pages: 40+*
