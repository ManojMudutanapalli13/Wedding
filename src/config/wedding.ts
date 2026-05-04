
export const weddingConfig = {
  // 💍 Couple Details
  couple: {
    groomName: "Anjani",
    brideName: "Rahul",
  },
  // 📅 Wedding Date & Location
  date: new Date("2026-05-10T10:00:00"),
  displayDate: "Saturday, 09th May 2026",
  city: "Jayashankar Bhupalpalli",
  // 📅 Calendar Event
  calendar: {
    startDateTime: "2020215T100000",
    endDateTime: "20250215T230000",
    title: "Wedding Ceremony",
    description: "You are invited to our wedding!",
  },
  // 🌤 External Links
  weatherUrl: "https://weather.com",
  trafficUrl: "https://www.google.com/maps/@17.385,78.4867,12z/data=!5m1!1e1",
  // 💒 Events
  events: [
    {
      title: "Pelli Kuthuru",
      emoji: "💅🏽",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "11:00 AM",
      date: "07-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
    {
      title: "Sangeeth",
      emoji: "💃🏼",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "06:00 PM",
      date: "07-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
    {
      title: "Palaporaka",
      emoji: "🌿",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "9:00 AM",
      date: "08-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
    {
      title: "Haldi",
      emoji: "🌼",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "11:00 AM",
      date: "08-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
    {
      title: "Kurallu",
      emoji: "🌿",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "5:00 PM",
      date: "08-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
    {
      title: "Wedding Ceremony ",
      emoji: "💑",
      venue: "BRS Office ",
      address: "5 Incline Kaman, Jayashankar Bhupalpalli",
      time: "10:35 AM – 3:00 PM",
      date: "09-May-2026",
      mapUrl: "https://maps.app.goo.gl/5ke9bJkKy2QAieBz8",
    },
    {
      title: "Reception",
      emoji: "💑",
      venue: "Home",
      address: "Qr. No. T2-586, Satyanarayana Temple Lane, Thilaknagar Down, Godavarikhani, Dist. Peddapalli.",
      time: "6:00 PM - 10:00 PM",
      date: "10-May-2026",
      mapUrl: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
    },
  ],
  // 🗺 Directions
  directions: {
    tabs: ["Wedding Ceremony","Reception"],
    routes: {
      "Wedding Ceremony": {
        mapBase: "https://maps.app.goo.gl/5ke9bJkKy2QAieBz8",
        modes: [
          {
            type: "car" as const,
            label: "By Car",
            steps: [
              "Navigate towards Jayashankar Bhupalpalli",
              "BRS Office ,5 Incline Kaman",
              "Use 5 Incline Kaman as a nearby landmark if needed"
            ],
          },
          {
            type: "bus" as const,
            label: "By Bus",
            steps: [
              "Take a Jayashankar Bhupalpalli",
              "Jayashankar Bhupalpalli BusStand",
              "Take a local Auto",
              "BRS Office ,5 Incline Kaman"
            ],
          },
        ],
      },
      "Reception": {
        mapBase: "https://maps.app.goo.gl/6wS3AvJeMupV9aKV8",
        modes: [
          {
            type: "car" as const,
            label: "By Car",
            steps: [
              "Navigate towards Godavarikhani",
              "Head directly to Home location",
              "Use Thilaknagar Down Satyanarayana Temple as a nearby landmark if needed"
            ],
          },
          {
            type: "bus" as const,
            label: "By Bus",
            steps: [
              "Take a bus to Godavarikhani",
              "Get down at Godhavarikhani Bustand",
              "Take a local auto/Rapido",
              "Reach Thilaknagar Down Satyanarayana Temple lane"
            ],
          },
          {
            type: "train" as const,
            label: "By Train",
            steps: [
              "Take a train to Ramagundam",
              "Travel towards Godhavarikahni",
              "Take a local auto/Rapido",
              "Reach Thilaknagar Down Satyanarayana Temple lane"
            ],
          },
        ],
      },
    },
  },
  // 👨‍👩‍👦 Host Families
  families: [

    {
      side: "Bride's Family",
      names: ["Shri. Kampa Ramesh", "Smt. Kampa Rajitha"],
      address: "Thilaknagar Down,Godavarikhani",
      phones: ["9010840991","9440693080","9949394796"],
    }, {
      side: "Groom's Family",
      names: ["Shri. Kore Krishna", "Smt. Kore Latha"],
      address: "Jayashankar Bhupalpalli",
      phones: ["9705194026","9866295002"],
    },
  ],
  // 📱 WhatsApp for Travel Assistance
  whatsappNumber: "9705194026",
  // 🏨 Accommodation
  accommodationMessage: "Accommodation details will be updated soon. Stay tuned!",
  // 🚆 Smart Location destination
  destinationCity: "Jayashankar Bhupalpalli",
};


