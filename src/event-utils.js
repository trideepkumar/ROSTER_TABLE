
let eventGuid = 0
let todayStr = new Date().toISOString().replace(/T.*$/, '') // YYYY-MM-DD of today

export const INITIAL_EVENTS = [
  {
      "checkInLocation": {
          "latitude": 8.5673939,
          "longitude": 76.8650928
      },
      "checkOutLocation": {
          "latitude": 8.5673993,
          "longitude": 76.8650846
      },
      "_id": "677c97bf845a3cd5b12ddab3",
      "code": "SHID00001",
      "caregiverId": {
          "_id": "6764da51f827edf2be2cd89b",
          "firstName": "Pankaj",
          "lastName": "Kundnani"
      },
      "patientId": {
          "_id": "6767d3308ca28dc91c6c1fa4",
          "firstName": "Head",
          "lastName": "Office"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "Test",
      "end": "2025-01-07T13:00:00.000Z",
      "start": "2025-01-06T13:00:00.000Z",
      "title": "Test",
      "isDelete": false,
      "incidentsReported": [
          {
              "incidentDetail": {
                  "incidentDate": "2025-01-07T00:00:00.000Z",
                  "placeOfIncident": "test",
                  "witness": "test",
                  "description": "test",
                  "actionTaken": "test",
                  "reportedTo": "test",
                  "outcome": "test"
              },
              "_id": "677c9842845a3cd5b12ddb0f",
              "code": "INC00010",
              "addedBy": "6764da51f827edf2be2cd89b",
              "createdAt": "2025-01-07T02:58:10.185Z",
              "updatedAt": "2025-01-07T02:58:10.185Z",
              "__v": 0
          }
      ],
      "status": "Completed",
      "progressNote": [
          {
              "shiftInfo": {
                  "date": "2025-01-07T02:57:49.446Z",
                  "description": "test"
              },
              "_id": "677c982d845a3cd5b12ddb05",
              "code": "PGN00019",
              "patient": "6767d3308ca28dc91c6c1fa4",
              "createdAt": "2025-01-07T02:57:49.449Z",
              "updatedAt": "2025-01-07T02:57:49.449Z",
              "__v": 0
          }
      ],
      "eventTimeLine": [
          {
              "date": "2025-01-07T02:55:59.788Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 01:55 PM",
              "addedBy": "",
              "_id": "677c97bf845a3cd5b12ddab4",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T02:57:11.082Z",
              "typeOfEvent": "Start",
              "eventDetail": "Shift Started by Pankaj Surender Kundnani at 01:57 PM",
              "addedBy": "",
              "_id": "677c9807845a3cd5b12ddae6",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T02:57:49.643Z",
              "typeOfEvent": "Notes",
              "eventDetail": "test",
              "addedBy": "Pankaj Surender Kundnani",
              "_id": "677c982d845a3cd5b12ddb07",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T02:58:10.391Z",
              "typeOfEvent": "Incident",
              "eventDetail": "On 07/01/2025, an incident occurred at test. The incident involved test. It was witnessed by test. Actions taken in response to the incident included: test. The matter was reported to test, and the outcome was test.",
              "addedBy": "Pankaj Surender Kundnani",
              "incidentDetails": [
                  {
                      "heading": "Date of Incident",
                      "description": "07/01/2025",
                      "_id": "677c9842845a3cd5b12ddb12"
                  },
                  {
                      "heading": "Time of Incident",
                      "description": "8:00 PM",
                      "_id": "677c9842845a3cd5b12ddb13"
                  },
                  {
                      "heading": "Place of Incident (bedroom/lounge/kitchen/bathroom/outside/etc)",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb14"
                  },
                  {
                      "heading": "If the Incident was witnessed, please write full name below (if applicable)",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb15"
                  },
                  {
                      "heading": "Description of Incident (including any injuries sustained)",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb16"
                  },
                  {
                      "heading": "Action Taken by Support Worker",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb17"
                  },
                  {
                      "heading": "Reported To Registered Nurse (please write full name and time) and Directive from RN",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb18"
                  },
                  {
                      "heading": "Outcome",
                      "description": "test",
                      "_id": "677c9842845a3cd5b12ddb19"
                  }
              ],
              "_id": "677c9842845a3cd5b12ddb11"
          },
          {
              "date": "2025-01-07T02:58:31.389Z",
              "typeOfEvent": "Mileage",
              "eventDetail": "Mileage claimed for 60 Miles",
              "addedBy": "Pankaj Surender Kundnani",
              "_id": "677c9857845a3cd5b12ddb41",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T03:01:26.752Z",
              "typeOfEvent": "End",
              "eventDetail": "Shift Ended by Pankaj Surender Kundnani at 02:01 PM",
              "addedBy": "",
              "_id": "677c9906845a3cd5b12ddbe5",
              "incidentDetails": []
          }
      ],
      "createdAt": "2025-01-07T02:55:59.834Z",
      "updatedAt": "2025-01-07T03:01:26.753Z",
      "__v": 0,
      "checkInTime": "2025-01-07T02:57:10.497Z",
      "checkOutTime": "2025-01-07T03:01:26.175Z"
  },
  {
      "checkInLocation": {
          "latitude": -27.5880944,
          "longitude": 152.7439622
      },
      "_id": "677cadbe845a3cd5b12ddc8f",
      "code": "SHID00002",
      "caregiverId": {
          "_id": "6764da51f827edf2be2cd89b",
          "firstName": "Pankaj",
          "lastName": "Kundnani"
      },
      "patientId": {
          "_id": "66f8e574ecf47bec3764ea44",
          "firstName": "Celestino",
          "lastName": "Silva"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "Visit from Shyni from mental health",
      "end": "2025-01-07T05:00:00.000Z",
      "start": "2025-01-07T04:30:00.000Z",
      "title": "In home and social",
      "isDelete": false,
      "incidentsReported": [
          {
              "incidentDetail": {
                  "incidentDate": "2025-01-07T00:00:00.000Z",
                  "placeOfIncident": "home living area",
                  "witness": "Pankaj kundnani ",
                  "description": "had a fall from the sofa no injuries or concussion ",
                  "actionTaken": "informed the nurse ",
                  "reportedTo": "nurse hiwoit ",
                  "outcome": "give panadol if any pain or if not able to bear the pain call 000"
              },
              "_id": "677cb197845a3cd5b12dddb2",
              "code": "INC00011",
              "addedBy": "6764da51f827edf2be2cd89b",
              "createdAt": "2025-01-07T04:46:15.083Z",
              "updatedAt": "2025-01-07T04:46:15.083Z",
              "__v": 0
          }
      ],
      "status": "Started",
      "progressNote": [
          {
              "shiftInfo": {
                  "date": "2025-01-07T04:42:55.702Z",
                  "description": "testing time inside and outside work just format need change "
              },
              "_id": "677cb0cf845a3cd5b12ddd83",
              "code": "PGN00020",
              "patient": "66f8e574ecf47bec3764ea44",
              "createdAt": "2025-01-07T04:42:55.703Z",
              "updatedAt": "2025-01-07T04:42:55.703Z",
              "__v": 0
          },
          {
              "shiftInfo": {
                  "date": "2025-01-07T04:43:50.853Z",
                  "description": "shopping at brassall and back \nwatching TV \nmedication given at 10am \nshiyni visited at 12.40pm was there for 30mins"
              },
              "_id": "677cb106845a3cd5b12ddd95",
              "code": "PGN00021",
              "patient": "66f8e574ecf47bec3764ea44",
              "createdAt": "2025-01-07T04:43:50.854Z",
              "updatedAt": "2025-01-07T04:43:50.854Z",
              "__v": 0
          }
      ],
      "eventTimeLine": [
          {
              "date": "2025-01-07T04:29:50.813Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 03:29 PM",
              "addedBy": "",
              "_id": "677cadbe845a3cd5b12ddc90",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T04:42:03.408Z",
              "typeOfEvent": "Start",
              "eventDetail": "Shift Started by Pankaj Surender Kundnani at 03:42 PM",
              "addedBy": "",
              "_id": "677cb09b845a3cd5b12ddd6f",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T04:42:55.898Z",
              "typeOfEvent": "Notes",
              "eventDetail": "testing time inside and outside work just format need change",
              "addedBy": "Pankaj Surender Kundnani",
              "_id": "677cb0cf845a3cd5b12ddd85",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T04:43:13.740Z",
              "typeOfEvent": "Mileage",
              "eventDetail": "Mileage claimed for 13 KM",
              "addedBy": "Pankaj Surender Kundnani",
              "_id": "677cb0e1845a3cd5b12ddd8c",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T04:43:51.049Z",
              "typeOfEvent": "Notes",
              "eventDetail": "shopping at brassall and back \nwatching TV \nmedication given at 10am \nshiyni visited at 12.40pm was there for 30mins",
              "addedBy": "Pankaj Surender Kundnani",
              "_id": "677cb107845a3cd5b12ddd97",
              "incidentDetails": []
          },
          {
              "date": "2025-01-07T04:46:15.286Z",
              "typeOfEvent": "Incident",
              "eventDetail": "On 07/01/2025, an incident occurred at home living area. The incident involved had a fall from the sofa no injuries or concussion. It was witnessed by Pankaj kundnani. Actions taken in response to the incident included: informed the nurse. The matter was reported to nurse hiwoit, and the outcome was give panadol if any pain or if not able to bear the pain call 000.",
              "addedBy": "Pankaj Surender Kundnani",
              "incidentDetails": [
                  {
                      "heading": "Date of Incident",
                      "description": "07/01/2025",
                      "_id": "677cb197845a3cd5b12dddb5"
                  },
                  {
                      "heading": "Time of Incident",
                      "description": "8:00 PM",
                      "_id": "677cb197845a3cd5b12dddb6"
                  },
                  {
                      "heading": "Place of Incident (bedroom/lounge/kitchen/bathroom/outside/etc)",
                      "description": "home living area",
                      "_id": "677cb197845a3cd5b12dddb7"
                  },
                  {
                      "heading": "If the Incident was witnessed, please write full name below (if applicable)",
                      "description": "Pankaj kundnani ",
                      "_id": "677cb197845a3cd5b12dddb8"
                  },
                  {
                      "heading": "Description of Incident (including any injuries sustained)",
                      "description": "had a fall from the sofa no injuries or concussion ",
                      "_id": "677cb197845a3cd5b12dddb9"
                  },
                  {
                      "heading": "Action Taken by Support Worker",
                      "description": "informed the nurse ",
                      "_id": "677cb197845a3cd5b12dddba"
                  },
                  {
                      "heading": "Reported To Registered Nurse (please write full name and time) and Directive from RN",
                      "description": "nurse hiwoit ",
                      "_id": "677cb197845a3cd5b12dddbb"
                  },
                  {
                      "heading": "Outcome",
                      "description": "give panadol if any pain or if not able to bear the pain call 000",
                      "_id": "677cb197845a3cd5b12dddbc"
                  }
              ],
              "_id": "677cb197845a3cd5b12dddb4"
          }
      ],
      "createdAt": "2025-01-07T04:29:50.819Z",
      "updatedAt": "2025-01-07T04:46:15.287Z",
      "__v": 0,
      "checkInTime": "2025-01-07T04:42:02.833Z"
  },
  {
      "_id": "677cae36845a3cd5b12ddcc8",
      "code": "SHID00003",
      "caregiverId": {
          "_id": "6777920f076c6ff9905b5923",
          "firstName": "vaibhav",
          "lastName": "popli"
      },
      "patientId": {
          "_id": "6767d3308ca28dc91c6c1fa4",
          "firstName": "Head",
          "lastName": "Office"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "paper incpection",
      "end": "2025-01-07T07:00:00.000Z",
      "start": "2025-01-07T04:40:00.000Z",
      "title": "audit ",
      "isDelete": false,
      "incidentsReported": [],
      "status": "Booked",
      "progressNote": [],
      "eventTimeLine": [
          {
              "date": "2025-01-07T04:31:50.804Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 03:31 PM",
              "addedBy": "",
              "_id": "677cae36845a3cd5b12ddcc9",
              "incidentDetails": []
          }
      ],
      "createdAt": "2025-01-07T04:31:50.808Z",
      "updatedAt": "2025-01-07T04:31:50.808Z",
      "__v": 0
  },
  {
      "_id": "677caea5845a3cd5b12ddd10",
      "code": "SHID00004",
      "caregiverId": {
          "_id": "6764da51f827edf2be2cd89b",
          "firstName": "Pankaj",
          "lastName": "Kundnani"
      },
      "patientId": {
          "_id": "67480a22c6c91f4b27324df5",
          "firstName": "Francis",
          "lastName": "Pepper"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "go shopping and church",
      "end": "2025-01-07T08:00:00.000Z",
      "start": "2025-01-07T07:00:00.000Z",
      "title": "social",
      "isDelete": false,
      "incidentsReported": [],
      "status": "Booked",
      "progressNote": [],
      "eventTimeLine": [
          {
              "date": "2025-01-07T04:33:41.939Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 03:33 PM",
              "addedBy": "",
              "_id": "677caea5845a3cd5b12ddd11",
              "incidentDetails": []
          }
      ],
      "createdAt": "2025-01-07T04:33:41.943Z",
      "updatedAt": "2025-01-07T04:33:41.943Z",
      "__v": 0
  },
  {
      "_id": "677cb32a845a3cd5b12dde45",
      "code": "SHID00005",
      "caregiverId": {
          "_id": "6777920f076c6ff9905b5923",
          "firstName": "vaibhav",
          "lastName": "popli"
      },
      "patientId": {
          "_id": "66f8e574ecf47bec3764ea44",
          "firstName": "Celestino",
          "lastName": "Silva"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "na",
      "end": "2025-01-07T08:31:00.000Z",
      "start": "2025-01-06T16:54:00.000Z",
      "title": "na",
      "isDelete": false,
      "incidentsReported": [],
      "status": "Booked",
      "progressNote": [],
      "eventTimeLine": [
          {
              "date": "2025-01-07T04:52:58.119Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 03:52 PM",
              "addedBy": "",
              "_id": "677cb32a845a3cd5b12dde46",
              "incidentDetails": []
          }
      ],
      "createdAt": "2025-01-07T04:52:58.122Z",
      "updatedAt": "2025-01-07T04:52:58.122Z",
      "__v": 0
  },
  {
      "_id": "677cb6d4845a3cd5b12de0cb",
      "code": "SHID00006",
      "caregiverId": {
          "_id": "6777920f076c6ff9905b5923",
          "firstName": "vaibhav",
          "lastName": "popli"
      },
      "patientId": {
          "_id": "6767d3308ca28dc91c6c1fa4",
          "firstName": "Head",
          "lastName": "Office"
      },
      "allDay": false,
      "color": "#1890ff",
      "textColor": "#fff",
      "description": "na",
      "end": "2025-01-07T06:00:00.000Z",
      "start": "2025-01-07T05:00:00.000Z",
      "title": "na",
      "isDelete": false,
      "incidentsReported": [],
      "status": "Booked",
      "progressNote": [],
      "eventTimeLine": [
          {
              "date": "2025-01-07T05:08:36.100Z",
              "typeOfEvent": "ShiftCreation",
              "eventDetail": "Shift Created by Manager Calds at January 07, 2025 at 04:08 PM",
              "addedBy": "",
              "_id": "677cb6d4845a3cd5b12de0cc",
              "incidentDetails": []
          }
      ],
      "createdAt": "2025-01-07T05:08:36.108Z",
      "updatedAt": "2025-01-07T05:08:36.108Z",
      "__v": 0
  }
]
export function createEventId() {
  return String(eventGuid++)
}
