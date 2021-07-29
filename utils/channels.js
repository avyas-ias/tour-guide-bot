const randomChannel= (n) =>{
 const channels = [
  {
    id: "C0297M6F5FX",
    name: "allhands-customeroperations",
    iid: "9188dd96-58f8-40b8-8edd-665db64a8aa7",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Channel to surface questions for CO All Hands",
      creator: "U0292CMFN14",
      last_set: 1627393608
    }
  },
  {
    id: "C029ALENQN6",
    name: "announcement",
    iid: "bc9671b6-79fc-4ee3-87d1-15a9d349d51b",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Your go-to resource for IAS company-wide news and events on Slack.",
      creator: "U0295UPV0GM",
      last_set: 1627393013
    }
  },
  {
    id: "C0293TJSE3G",
    name: "ask-compliance",
    iid: "4cef44a9-0ab4-4372-b7ef-189f7347b1c7",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Q&amp;A with compliance officers",
      creator: "U0295UPV0GM",
      last_set: 1627392853
    }
  },
  {
    id: "C0293SU36MU",
    name: "ask-iasacademy",
    iid: "20faaef5-b6b8-45bc-a72a-257207a60ea9",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Reach out to the IAS Academy Team! Our mission to maximize positive outcomes for IAS customers and employees through world-class education and enablement",
      creator: "U0295UPV0GM",
      last_set: 1627392571
    }
  },
  {
    id: "C02A0CDKW1W",
    name: "ask-lisau",
    iid: "f48660c3-7a0c-4a03-a059-fcfbfa4bb55b",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Ask me anything. Upvote questions you like. Answers will be in the Weekly Word.",
      creator: "U0292CMFN14",
      last_set: 1627393479
    }
  },
  {
    id: "C0293UN8HGW",
    name: "ask-looker",
    iid: "b6241c57-e696-47dc-b261-a1f75367a23d",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029GRSNBT6",
    name: "ask-optimization",
    iid: "14ff2939-fb01-4a7e-8263-80d0219d13d7",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Got something to talk about with the Optimization team? Here's the place for it.",
      creator: "U0295UPV0GM",
      last_set: 1627392701
    }
  },
  {
    id: "C028VTW1Y23",
    name: "ask-programmatic-reporting",
    iid: "4c89dadb-3229-4ef3-9de0-38a9255ebe58",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Public Channel for Programmatic Reporting Team. Platform for other teams, stakeholders to ask questions.",
      creator: "U0295UPV0GM",
      last_set: 1627392676
    }
  },
  {
    id: "C02A0AU1P7A",
    name: "ask-pure",
    iid: "d055aaac-49f9-4c24-bd4b-8d151f72257a",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Any queries related to reporting or pure project or the team.",
      creator: "U0295UPV0GM",
      last_set: 1627392767
    }
  },
  {
    id: "C029AT2JXL3",
    name: "ask-qa",
    iid: "5c6d3a87-ff8c-4ac8-9aed-73fe87c9ee59",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029AKXTUGJ",
    name: "ask-spo",
    iid: "1d2eaa47-a255-475c-bc22-927789ea1ae5",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "SPO- the strategic planning office - is a centralized business function focused on accelerating our strategic priorities and initiatives via project and program management methodologies. Have a question for the team? Join this channel and ask away!",
      creator: "U0295UPV0GM",
      last_set: 1627392792
    }
  },
  {
    id: "C028VU6CZM5",
    name: "ask-talent-acquisition",
    iid: "81beba34-e2f2-4f8b-8a23-5b85e01c1306",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C028VU1F91D",
    name: "ask-thehub",
    iid: "9484fb6b-362c-4304-8442-cdf8f0017e15",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Ask questions related to The Hub",
      creator: "U0295UPV0GM",
      last_set: 1627392744
    }
  },
  {
    id: "C029ZLSEYF2",
    name: "ask-walled-gardens-platform",
    iid: "97f8b6ba-1963-4e38-8563-a1366c6b45a6",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029GRNCM28",
    name: "askarchitecture",
    iid: "4ac09002-2c8e-40bf-9f94-2b0c2e24d6e7",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Discuss architectural practices and principles",
      creator: "U0295UPV0GM",
      last_set: 1627392648
    }
  },
  {
    id: "C028V8HH35M",
    name: "askchannelsales",
    iid: "703c0a43-10eb-449f-ad9d-383c33504d3d",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "Streamlined Channel Sales Inquiries",
      creator: "U0295UPV0GM",
      last_set: 1627380843
    }
  },
  {
    id: "C02937R32MC",
    name: "askcto",
    iid: "956a2af0-565a-4c21-96b2-43f7c3445437",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "Forum to ask the CTO anything.",
      creator: "U0295UPV0GM",
      last_set: 1627380816
    }
  },
  {
    id: "C029P9YBJU9",
    name: "askcustomerexcellence",
    iid: "297c5d13-60c4-4e27-bc24-21e0bfd886ec",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Field questions and feedback on customer excellence department",
      creator: "U0295UPV0GM",
      last_set: 1627392835
    }
  },
  {
    id: "C029GRJMCQL",
    name: "askops",
    iid: "d6bfc85b-63e4-4070-89fc-f2e3415911cf",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029A06143U",
    name: "billing_askanything",
    iid: "646c396e-0bde-4c53-a0ca-d78d175877d9",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "for all internal billing questions between IAS teams",
      creator: "U0295UPV0GM",
      last_set: 1627380758
    }
  },
  {
    id: "C029A03K8KU",
    name: "cloud9-ops",
    iid: "77bf1486-75a7-4523-8138-4e185493bd8b",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "Communication between Cloud9 and Ops teams. Not a general help channel. For help use #ask-cloud9 and #askops depending on which team you need.",
      creator: "U0295UPV0GM",
      last_set: 1627380709
    }
  },
  {
    id: "C029AKP7H6W",
    name: "coffee-meetup",
    iid: "82c8969e-c8d0-4b68-bc2e-562d15c155c2",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "To pair people together to grab coffee once/2 weeks so we can all get to know each other. Note: You don\u2019t need to get coffee to participate! Tea, Seltzer, or anything else is perfectly appropriate! Note2: Remote meetups are encouraged!",
      creator: "U0292CMFN14",
      last_set: 1627392683
    }
  },
  {
    id: "C029PB76GPK",
    name: "competitive-intel",
    iid: "f3062b7c-9f1b-4a3e-8dc1-b83a0f394f7e",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Always good to know what our competitors are up to.",
      creator: "U0292CMFN14",
      last_set: 1627393411
    }
  },
  {
    id: "C029407AXJS",
    name: "covid-india-leads",
    iid: "31cb043e-6de9-43d6-9f41-3618cff69fbb",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Covid relief resources, queries, information etc.",
      creator: "U0295UPV0GM",
      last_set: 1627393786
    }
  },
  {
    id: "C029A62G8BD",
    name: "csm-and-tcs",
    iid: "43475266-3af9-4c34-ac03-f0b46c9c7013",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "A forum for the CSM and TCS teams to share knowledge and ask questions cross-functionally. If you know the answer to a question, jump in!",
      creator: "U0295UPV0GM",
      last_set: 1627380653
    }
  },
  {
    id: "C029NKA12F3",
    name: "customerjourney",
    iid: "c8ead03f-da49-4ac6-99b8-45ce88b1c9b4",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "A place to ask questions about the customer journey activity analysis (CCO)",
      creator: "U0295UPV0GM",
      last_set: 1627380614
    }
  },
  {
    id: "C028V84CEJK",
    name: "customerobsession",
    iid: "9aef7cca-0aaa-4334-964a-0164a5b332ea",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "To tell stories of our customer obsession! Give a shout out to a colleague. If you have a great story to tell how you made a customer's day, share it here! Please share!",
      creator: "U0295UPV0GM",
      last_set: 1627380577
    }
  },
  {
    id: "C029G59EJA0",
    name: "customerorg-askanything",
    iid: "4c33afe4-2d92-428e-baa5-f06c16c26c60",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "A place where the Customer Operations team can ask Adrian and his leadership anything! What\u2019s on your mind?",
      creator: "U0295UPV0GM",
      last_set: 1627380127
    }
  },
  {
    id: "C0299UKGBCJ",
    name: "customersuccessapp_askanything",
    iid: "043a1f32-cb59-4709-9a4a-fe92a5d09114",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "For any and all questions related to the new Customer Success App in SFDC",
      creator: "U0295UPV0GM",
      last_set: 1627380096
    }
  },
  {
    id: "C0293SQLUTG",
    name: "deploy-coord",
    iid: "a860eb64-81ae-404d-804f-e4c8785a9b13",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "A channel to coordinate all deployments",
      creator: "U0292CMFN14",
      last_set: 1627392539
    }
  },
  {
    id: "C029NJC85JM",
    name: "devops",
    iid: "2291a525-c378-43ec-81f3-2754c43f3504",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "#devops is for people in IAS who are interested in DevOps trends and discussion",
      creator: "U0295UPV0GM",
      last_set: 1627380027
    }
  },
  {
    id: "C029ZK817LY",
    name: "ds-infra-github",
    iid: "6c490de1-4c5f-4ee4-ba14-6cfb9540334e",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "This channel is for GitHub notifications of the Mars AppOps Support team. Please, refer to #ask-mars to contact the team.",
      creator: "U0295UPV0GM",
      last_set: 1627379968
    }
  },
  {
    id: "C02943A85B8",
    name: "eig-basketball",
    iid: "7068e20e-f4e3-482d-ac77-7971f709f016",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "This channel is for all the basketball fans.",
      creator: "U0292CMFN14",
      last_set: 1627394956
    }
  },
  {
    id: "C02943FAQAJ",
    name: "eig-carrom",
    iid: "d63cdfa9-6c50-4db9-a10d-28c887874c7c",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "This Channel is for Carrom enthusiasts.",
      creator: "U0292CMFN14",
      last_set: 1627395019
    }
  },
  {
    id: "C029B1RRRGT",
    name: "eig-cricket",
    iid: "7a72304d-30eb-4c0d-b64a-87a4b985973c",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "This channel is for Cricket fans.",
      creator: "U0292CMFN14",
      last_set: 1627394910
    }
  },
  {
    id: "C028V70LAR5",
    name: "eig-ias-dance",
    iid: "8a10c587-f13b-4779-97cc-17d9a02b6a72",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "dance dance ias-volution",
      creator: "U0295UPV0GM",
      last_set: 1627379930
    }
  },
  {
    id: "C029A4S6K0T",
    name: "eig-volleyball",
    iid: "8abe92d7-b364-475d-82b3-f7a4340973ef",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        'Goal: Help Thanya get her first trophy Motto: "nope. it\'s not worth it"',
      creator: "U0295UPV0GM",
      last_set: 1627379878
    }
  },
  {
    id: "C029NHZ8H41",
    name: "erg-bind",
    iid: "3db3659a-97d5-4207-8d23-c7d1b83c087d",
    member_count: 7,
    is_member: true,
    purpose: {
      value: '"4 the culture", All are Welcome!',
      creator: "U0295UPV0GM",
      last_set: 1627379833
    }
  },
  {
    id: "C029G4N770U",
    name: "erg-iaswomen",
    iid: "cd79dff8-2935-4d6d-9781-def7474ef001",
    member_count: 2,
    is_member: false,
    purpose: {
      value:
        "Discussions seeking to support, educate, entertain and engage all women at IAS",
      creator: "U0295UPV0GM",
      last_set: 1627379796
    }
  },
  {
    id: "C0297MXPMGD",
    name: "erg-iasworkingparents",
    iid: "c7c253b2-ea7f-446c-9e81-1d5ab5f3103b",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "W",
      creator: "U0292CMFN14",
      last_set: 1627393940
    }
  },
  {
    id: "C029NHVNCP3",
    name: "etl-alerts",
    iid: "13235d8a-fd98-44e0-9424-a056c66fd8e1",
    member_count: 7,
    is_member: true,
    purpose: {
      value:
        "send alerts to this channel when human intervention is needed for ETL related issues. Sources include jenkins, grafana and human",
      creator: "U0295UPV0GM",
      last_set: 1627379765
    }
  },
  {
    id: "C028V6L1PTR",
    name: "etl-pipeline-notif",
    iid: "d1b06dd9-78f9-4bc5-802f-a15cc828592e",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "Notifications about ETL pipeline key processes",
      creator: "U0295UPV0GM",
      last_set: 1627379653
    }
  },
  {
    id: "C0296T95MC5",
    name: "etl-pm-land-reports-discussion",
    iid: "a7c6e85e-e120-4b67-a0fd-e58cc80265d5",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "Discussion for LAND-122",
      creator: "U0295UPV0GM",
      last_set: 1627379687
    }
  },
  {
    id: "C029ZJK9ZB2",
    name: "flow-notifications",
    iid: "fc733f0d-4421-41b9-8e1b-bbeed839ab74",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "jenkins notifications",
      creator: "U0295UPV0GM",
      last_set: 1627379548
    }
  },
  {
    id: "C0299TNSEUS",
    name: "followthethrone",
    iid: "2f6dcc56-ca33-428e-9f03-113182d8c7e3",
    member_count: 1,
    is_member: false,
    purpose: {
      value:
        "Game of Thrones Final Season Bracket (<https://followthethrone.com/>)",
      creator: "U0295UPV0GM",
      last_set: 1627379578
    }
  },
  {
    id: "C029G46CQJ0",
    name: "fridaylunches",
    iid: "0d2bf2aa-84ff-42b4-b6b3-418437b3098a",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "What food is being served on Friday at IAS-NYC",
      creator: "U0295UPV0GM",
      last_set: 1627379491
    }
  },
  {
    id: "C029ZJE896C",
    name: "gdops",
    iid: "e9ce95b8-3793-4870-8f51-2fb06be9cd06",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "grid dynamics discussion with ias ops",
      creator: "U0295UPV0GM",
      last_set: 1627379449
    }
  },
  {
    id: "C0295QU9LH0",
    name: "general",
    iid: "37e28200-75c9-49af-aca2-196c37b4dc94",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Welcome to the General channel. All team members are in this channel.",
      creator: "U0295UPV0GM",
      last_set: 1627379417
    }
  },
  {
    id: "C0299TCADA6",
    name: "google_revenue_share",
    iid: "f95ed9bd-cbb5-4e1b-9a24-4fd57bf03d2e",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "Discuss Monthly Billing &amp; Reporting",
      creator: "U0295UPV0GM",
      last_set: 1627379376
    }
  },
  {
    id: "C029NH7A2BB",
    name: "gpso-india-updates",
    iid: "a7641508-9c6c-4201-892a-fc34d7b95f79",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029G46CQJ0",
    name: "fridaylunches",
    iid: "623f7dc8-d215-447b-9703-7054d375f482",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "What food is being served on Friday at IAS-NYC",
      creator: "U0295UPV0GM",
      last_set: 1627379491
    }
  },
  {
    id: "C029ZJE896C",
    name: "gdops",
    iid: "ece8102a-231d-4a92-b5dc-37a8a16c1e89",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "grid dynamics discussion with ias ops",
      creator: "U0295UPV0GM",
      last_set: 1627379449
    }
  },
  {
    id: "C0295QU9LH0",
    name: "general",
    iid: "3e1267cd-6a92-44df-8834-7c746bc5d89f",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Welcome to the General channel. All team members are in this channel.",
      creator: "U0295UPV0GM",
      last_set: 1627379417
    }
  },
  {
    id: "C0299TCADA6",
    name: "google_revenue_share",
    iid: "e552a479-44e7-4253-8897-76df7b9bf8f0",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "Discuss Monthly Billing &amp; Reporting",
      creator: "U0295UPV0GM",
      last_set: 1627379376
    }
  },
  {
    id: "C029NH7A2BB",
    name: "gpso-india-updates",
    iid: "fff409c6-86c7-4fc0-b54c-fc8257f54147",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C028V6013GF",
    name: "gpso_knowledge_base",
    iid: "6199e476-17a5-4242-abfc-fd473741f131",
    member_count: 1,
    is_member: false,
    purpose: {
      value:
        "This group is specifically created to share topic wise links or documents related to IE or any IAS related relevant products",
      creator: "U0295UPV0GM",
      last_set: 1627379266
    }
  },
  {
    id: "C029G3STY04",
    name: "hack-your-heart-out",
    iid: "ac2e01c3-5a20-44e5-84aa-ca6f993333f9",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "2019 Fall Hackathon discussion and announcements",
      creator: "U0295UPV0GM",
      last_set: 1627379232
    }
  },
  {
    id: "C0296SHSB0V",
    name: "happychicago",
    iid: "550a1632-1e73-4412-9e68-0925c8214309",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "happy hour",
      creator: "U0295UPV0GM",
      last_set: 1627379199
    }
  },
  {
    id: "C02976ZLCR3",
    name: "ias-india",
    iid: "dfbd3320-05df-4d18-ba09-7dc50dd370de",
    member_count: 5,
    is_member: false,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C029ALU9T6W",
    name: "ias-pune",
    iid: "ef723b41-7c98-43c0-8886-f1faba7ff28e",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Members of the IAS Pune office",
      creator: "U0295UPV0GM",
      last_set: 1627393197
    }
  },
  {
    id: "C0299SZUZDY",
    name: "ias_stop_the_bot_challenge",
    iid: "7b47f140-9a6e-44d0-acd1-5979df599fbe",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "support cross functional stakeholder communications and requests",
      creator: "U0295UPV0GM",
      last_set: 1627379139
    }
  },
  {
    id: "C029ZHVHT0Q",
    name: "ias_viewability_skins",
    iid: "0e27bcf2-2a9d-4193-bedb-4cc9d809e076",
    member_count: 1,
    is_member: false,
    purpose: {
      value: "IAS Viewability on Skin formats",
      creator: "U0295UPV0GM",
      last_set: 1627379092
    }
  },
  {
    id: "C02A0CVSCHW",
    name: "india-tech",
    iid: "b5b9bb56-95f6-48bd-87dc-ee4e000db39d",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Tech comms- INDIA",
      creator: "U0292CMFN14",
      last_set: 1627393688
    }
  },
  {
    id: "C0297HEH4FP",
    name: "music",
    iid: "aa5f5e97-3251-4e8f-80af-8c8f2e3b018f",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Share what you are listening to, no matter how terrible.",
      creator: "U0292CMFN14",
      last_set: 1627391994
    }
  },
  {
    id: "C0293S32ETG",
    name: "musicians",
    iid: "bebd1c82-11f0-4346-af52-371500207f4a",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Channel for anyone who plays an instrument and wants to discuss",
      creator: "U0292CMFN14",
      last_set: 1627392239
    }
  },
  {
    id: "C029B1SG811",
    name: "photographer-club",
    iid: "4121d03b-d3ab-4935-8cee-0dc1f60642fd",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Join if you like to clicks pictures!",
      creator: "U0295UPV0GM",
      last_set: 1627394918
    }
  },
  {
    id: "C028VUY2Q6T",
    name: "product-rd-townhall",
    iid: "ebe4cbdc-2c02-4f8a-89bb-0903f7d81217",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "",
      creator: "",
      last_set: 0
    }
  },
  {
    id: "C028Z2UU5GE",
    name: "random",
    iid: "74742ecd-9a1c-4101-a0c4-8c053d7c775a",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "This channel is for... well, everything else. It\u2019s a place for team jokes, spur-of-the-moment ideas, and funny GIFs. Go wild!",
      creator: "U028R3L3Q2K",
      last_set: 1627301070
    }
  },
  {
    id: "C02A0GGUTK2",
    name: "solo-traveller",
    iid: "3c0765fe-5bd9-43a7-bf88-b4316302860b",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "This channel for all the Travel freaks.",
      creator: "U0292CMFN14",
      last_set: 1627395091
    }
  },
  {
    id: "C029A7EHS3V",
    name: "sportsfanonly",
    iid: "832348bb-e4a5-40d0-9876-0b645f17fa63",
    member_count: 7,
    is_member: true,
    purpose: {
      value: "Join if you are a Sports fan!",
      creator: "U0295UPV0GM",
      last_set: 1627381604
    }
  },
  {
    id: "C029ARUTP6E",
    name: "standup-comedy",
    iid: "a1997925-1d0c-497e-bcf9-696573145751",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "This channel is to showcase your inner comedian.",
      creator: "U0292CMFN14",
      last_set: 1627395218
    }
  },
  {
    id: "C0293TY6QB0",
    name: "technologists",
    iid: "8eefbb52-dabd-4563-963a-21f9e4941262",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "Home of the Super Friends: Data Science, Engineering, PMO, Compliance, Tech-Communication, and Product (formerly #engineering)",
      creator: "U0292CMFN14",
      last_set: 1627393030
    }
  },
  {
    id: "C0292QB02LD",
    name: "tour-guide-bot",
    iid: "d59d4305-4bcf-4cda-aa24-c8711a0bb415",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "This *channel* is for working on a project. Hold meetings, share docs, and make decisions together with your team.",
      creator: "U028R3L3Q2K",
      last_set: 1627301139
    }
  },
  {
    id: "C029PA6CG8H",
    name: "townhall",
    iid: "7d877420-1446-4f2d-b65e-0b4ef366ec7d",
    member_count: 8,
    is_member: true,
    purpose: {
      value: "Ask questions to the presenters in the weekly townhall",
      creator: "U0295UPV0GM",
      last_set: 1627392941
    }
  },
  {
    id: "C0297R67TLM",
    name: "travel-stories",
    iid: "85459c83-5431-4abc-9a4f-a5e8b7d1336a",
    member_count: 8,
    is_member: true,
    purpose: {
      value:
        "This channel is for people to share their amazing travel experiences.",
      creator: "U0292CMFN14",
      last_set: 1627395174
    }
  }
];
  
  var results = [];
  for(let i=0;i<n;i++){
    var rand_index = Math.floor(Math.random() * channels.length);
    results.push(channels[rand_index]);
  }
  
  return results;
  
}

module.exports = randomChannel;