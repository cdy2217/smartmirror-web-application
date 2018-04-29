var config = {
    // Language for the mirror (currently not implemented)
    language : "ko",
    greeting : ["SmartMirror"], // An array of greetings to randomly choose from
    // forcast.io
    forcast : {
        key : "48236192a51bc52f6b4c7a4539ccb6ea", // Your forcast.io api key
        units : "auto" // See forcast.io documentation if you are getting the wrong units
    },
    // Calendar (An array of iCals)
    calendar: {
      icals : ["https://calendar.google.com/calendar/ical/nh0g7ldlmt0hk1umlv2lkmk5mc%40group.calendar.google.com/public/basic.ics"],
      maxResults: 9, // Number of calender events to display (Defaults is 9)
      maxDays: 365 // Number of days to display (Default is one year)
    },
    traffic: {
      key : "Ail-KEGup4WK0Fr8jNCgowP7tljmhqJYZBKxf98hdLfQyHV6Anjq9o-Vh81XwC8s", // Bing Maps API Key
      mode : "Transit", // Possibilities: Driving / Transit / Walking
      origin : "Seoul", // Start of your trip. Human readable address.
      destination : "Suwon", // Destination of your trip. Human readable address.
      name : "Home", // Name of your destination ex: "work"
      reload_interval : 5 // Number of minutes the information is refreshed
    },

    youtube: {
      key:"AIzaSyCm0JaJ8t1-RhXS61qiFingCXYr8-quHO4 "
    },

    subway: {
      key:"....."
    },
    soundcloud: {
    	key:"vy2u1t34bo123bu41234yduv1234tb"
    }
}
