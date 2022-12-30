export const filterData = [ {name:"Doctor",image: require('../../assets/doctors.png'), id:"0"},
                            {name:"Nurse",image:require("../../assets/nurse.png"),id:"1"},
                            {name:"Dentist",image:require("../../assets/dentist.png"),id:"2"},
                            {name:"Gyne",image:require("../../assets/gyn.png"),id:"3"},
                            {name:"neuro",image:require("../../assets/brain.png"),id:"4"}  ,
                            {name:"psyche",image:require("../../assets/pschy.jpg"),id:"5"},
                            {name:"obste",image:require("../../assets/obste.jpg"),id:"6"},
                            {name:"Radi",image:require("../../assets/radi.jpg"),id:"7"},
                            {name:"Pedia",image:require("../../assets/pedia.png"),id:"8"}                 

                           ];
export const filterreview = [ {name:"John",review:'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tristique ante eget tristique tempor. Proin ullamcorper tellus rhoncus massa consectetur, nec viverra est ultricies. Aenean a eros et massa venenatis dapibus nec id risus. Duis egestas ac lorem id imperdiet. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Mauris eget euismod metus, sed venenatis risus. Vivamus at egestas lorem. Fusce scelerisque elementum lorem, sed luctus neque auctor nec. Sed ut pellentesque leo. Cras non dignissim tortor. Duis fringilla, purus a egestas tincidunt, felis metus iaculis magna, et tempus justo velit ac magna.', id:"0"},

                      {name:"Mark Normmand",review:'Pellentesque sed feugiat lacus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer erat magna, convallis sed accumsan quis, mattis ac ex. Pellentesque eu facilisis ex, quis accumsan nulla. Maecenas mattis in purus eu commodo. Aliquam sapien ex, lacinia sit amet aliquam eu, porttitor eu ligula. Nam tincidunt dignissim massa at facilisis. Mauris mauris purus, fringilla ut lectus in, gravida tincidunt lectus. Pellentesque fringilla lorem a orci condimentum dignissim. Quisque rutrum euismod dui at dignissim. Vestibulum in egestas risus. In justo augue, hendrerit eget eros vitae, posuere dapibus ante. Nulla iaculis tellus sit amet arcu laoreet, id blandit magna consectetur. Curabitur dictum consectetur felis, sit amet sagittis metus. Nunc in auctor metus. Donec ut sagittis ante.',id:"1"},
                      
                      {name:"Joe List",review:'Proin felis dolor, ullamcorper sit amet interdum vitae, tempus at neque. Etiam sapien neque, varius fermentum turpis eu, tempor bibendum mi. Phasellus ac metus sit amet sem venenatis ultricies vel dapibus enim. Nunc vehicula volutpat metus, quis tempus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ante tellus. In in sapien maximus, laoreet mauris vitae, mollis elit. Suspendisse pellentesque, lacus eu fermentum vestibulum, libero felis commodo nibh, eu congue sapien diam sed metus. Pellentesque felis diam, aliquam at placerat vitae, eleifend sit amet sapien.',id:"2"},

                      {name:"Akaash Singe",review:'Proin felis dolor, ullamcorper sit amet interdum vitae, tempus at neque. Etiam sapien neque, varius fermentum turpis eu, tempor bibendum mi. Phasellus ac metus sit amet sem venenatis ultricies vel dapibus enim. Nunc vehicula volutpat metus, quis tempus metus. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent in ante tellus. In in sapien maximus, laoreet mauris vitae, mollis elit. Suspendisse pellentesque, lacus eu fermentum vestibulum, libero felis commodo nibh, eu congue sapien diam sed metus. Pellentesque felis diam, aliquam at placerat vitae, eleifend sit amet sapien.',id:"3"},
                                     

                      ];

export const filterData2 = [{name:"Dentist",image:require("../../assets/dentistSearch.jpg") , id:"0"},
                            {name:"Nurse",image:require("../../assets/NurseSearch.jpg"),id:"1"},
                            {name:"Obstetricians",image:require("../../assets/Obstetric.jpg"),id:"2"},
                            {name:"Neurologist",image:require("../../assets/neuro.jpg"),id:"3"},
                            {name:"Radiologist",image:require("../../assets/radiologist.jpg"),id:"4"},
                            {name:"Pediatrician",image:require("../../assets/pediatric.jpg"),id:"5"},  
                            {name:"Cardiologist",image:require("../../assets/cardio.jpg"),id:"6"},
                            {name:"General Practitioner",image:require("../../assets/genprac.jpg"),id:"7"},
                            {name:"Psychiatrist",image:require("../../assets/psycho.jpg"),id:"8"},  
                          
];

export const restaurantsData = [
    {restaurantName:"Dr Rasaq", farAway:"21.2",
    businessAddress:"14, Agbelura challenge ",images:require("../../assets/denRasaq.jpg"),
    averageReview:4.9,numberOfReview:272,coordinates : {lat: -26.1888612, lng: 28.246325} ,discount:10,deliveryTime:15,
    collectTime:5, foodType:"Dentist,Oral health, Toothcare" ,
    productData:[{name:"BOOK APPOINTMENT", price:29.30,image:require("../../assets/docAppoint.jpg")},
    {name:"Contact Dr Rasaq", price:50.80,image:require("../../assets/docContact.png")},{name:"Find Location",
     price:10000,image:require("../../assets/docLoca.png")},
      ],
    id:0},
    
    {restaurantName:"Dr Chika", farAway:"12.7",businessAddress:"22 Bessie street, Cape Town",
    images:require("../../assets/denChika.jpg"),
    averageReview:4.3, numberOfReview:306, coordinates : {lat: -26.1891648, lng: 28.2441808},
    discount:20,deliveryTime:30,collectTime:10, foodType:"Dentist,Oral health, Toothcare ",
    productData:[{name:"BOOK APPOINTMENT", price:29.30,image:require("../../assets/docAppoint.jpg")},
    {name:"Contact Dr Chika", price:50.80,image:require("../../assets/docContact.png")},
    {name:"Find Location", price:70,image:require("../../assets/docLoca.png")},
        ],
    id:1},
    
    {restaurantName:"Dr Sam", farAway:"5",businessAddress:" 17 Olivia Rd, Johannesburg",
    images:require("../../assets/denSam.jpg"),
     coordinates :{ lat: -26.1886781, lng: 28.244879}, averageReview: 4.9,numberOfReview: 1272,
      discount:12, deliveryTime:25,collectTime:15,foodType:"Dentist,Oral health, Toothcare",
     productData:[{name:"BOOK APPOINTMENT", price:29.30,image:require("../../assets/docAppoint.jpg")},
     {name:"Contact Dr Sam", price:50.80,image:require("../../assets/docContact.png")},{name:"Find Location", price:70,image:require("../../assets/docLoca.png")},
        ],
     id:2},
    
    {restaurantName:"Dr Tunde", farAway:"7",businessAddress:" 15 Atlas Rd, Kempton Park",
    images:require("../../assets/denTunde.jpg"),
    averageReview:4.3, numberOfReview:700, coordinates: {lat: -26.1845336, lng: 28.2481691},
    discount:null,deliveryTime:20,collectTime:10,foodType:"Dentist,Oral health, Toothcare",
    productData:[{name:"BOOK APPOINTMENT", price:29.30,image:require("../../assets/docAppoint.jpg")},
    {name:"Contact Dr Tunde", price:50.80,image:require("../../assets/docContact.png")},{name:"Find Location", price:70,image:require("../../assets/docLoca.png")},
        ],
    id:3},
    ]



export const rideData =[
     {street:"32 Olivia Rd",area:"Klipfontein 83-Ir,Boksburg",id:"0"},
     {street:"Hughes Industrial Park",area:"Hughes,Boksburg",id:"1"},
     {street:"32 Olivia Road",area:" East Rand,Ekurhuleni,Gauteng,1459",id:"2"},
     {street:"Total Boksburg",area:"35 Atlas Rd,Anderbolt,Boksburg",id:"3"},
    {street:"179 8th Ave",area:"Bezuidenhout Valley,Johannesburg",id:"4"},
 ];


 export const productData = [
            {name:"BOOK APPOINTMENT", price:29.30,image:require("../../assets/docAppoint.jpg"),
            details:"Book an appointment",id:0},
            {name:"Contact Dr Rasaq", price:50.80,image:require("../../assets/docContact.png"),
            details:"Contact Dr Rasaq",id:1},
            {name:"Find Location",
            price:70,image:require("../../assets/docLoca.png"),details:" Find Location",id:2},
            
            {name:"Hand cut chips", price:29.30,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate4.png",
            details:"Two 100% fresh beef burger patties that are hot,deliciously",id:3},
            {name:"Big Mac", price:70.20,image:"https://bukasapics.s3.us-east-2.amazonaws.com/plate1.png",
            details:"McFeast features two 100% fresh beef burger patties that are hot",id:4},
            {name:"Chicken Burger", price:70,image:"https://bukasapics.s3.us-east-2.amazonaws.com/chicken.png",details:"",id:5},
            
                ]; 
// export const carTypeData =[
//     {title:"Popular",
//      data:[
//     {name:"Uber Go",group :2, price:7,image: require('../../assets/uberGo.png'),note:"Affordable.compact rides",promotion:5 ,time:"20:19",id:"0"},
//     {name:"UberX",group :3, price:5.5,image: require('../../assets/uberX.png'),note:"Affordable everyday trips",promotion:0,time:"20:20", id:"1"},
//     {name:"Connect", group:0, price:12.6,image: require('../../assets/uberConnect.png'),note:"Send and receive packages",promotion:10,time:"20:33", id:"2"}
//      ]
//     },

//     {title:"Premium",
//     data:[
//    {name:"Black",group :3, price:17.4,image: require('../../assets/uberBlack.png'),note:"Premium trips in luxury cars",promotion:0,time:"20:31",id:"3"},
//    {name:"Van", group:6, price:22.3,image: require('../../assets/uberVan.png'),note:"Rides for groups up to 6",promotion:12,time:"20:31", id:"4"},
//     ]
//    },

//    {title:"More",
//    data:[
//   {name:"Assist",group :3, price:35.3,image: require('../../assets/uberAssist.png'),note:"Special assistance from certified drivers",promotion:26,time:"20:25",id:"5"},
//    ]
//   },

// ];

//  export const requestData = [{
//     name:"For Me",id:0
// },
// {
//     name:"For Someone",id:1
// }

// ]

// export const rideOptions = [{name:"Personal",icon:"account", id:"0"},
// {name:"Business",icon:"briefcase", id:"1"},  

// ];

// export const paymentOptions = [{image:require('../../assets/visaIcon.png'),text:"Visa ...0476"},
//                                 {image:require('../../assets/cashIcon.png'),text:"Cash"}]

// export const availableServices = ["Uber Go","UberX","Uber connect","Uber Black","Uber Van","Uber Assist"]

export const docsAround = [{latitude:7.3411,longitude:3.868},
    {latitude:7.362727282943895,longitude:3.862213973850439},
    {latitude:7.377767219011136,longitude:3.877284130498029},
    {latitude:7.384053416956249,longitude:3.9073466167782156},
    {latitude:7.4147091459855945,longitude:3.8808680242457205},
]

export const specialData =[
    {title:"Doctor Home Visit",key:0},
    {title:"Book Appointment",key:1},
    {title:"Get Contact",key:2},
    {title:"Find Location",key:3},
  ];    
  
  export const menu = [
    { key: 1, title: 'Request Visit' },
    { key: 2, title: 'Book Appointment' },
    { key: 3, title: 'Contact' },
    { key: 4, title: 'Locate' },
    
  ] 

  export const appointment = [
    { key: 1, title: 'ACTIVE 4' },
    { key: 3, title: 'CANCElLED' },
    
    
  ] 
  export const menuData = [
    
    {title:"BEEF",special:false,key:0, },
    {title:"CHICKEN", special:false,key:1},
    {title:"VEGGIE BURGER",special:false ,key:2},
    {title:"FRIES& CORN",special:false ,key:3},
    {title:"SALADS",special:false,key:4},
    {title:"HAPPY MEALS",special:false,key:5},
    {title:"SAHRE BOX",special:false,key:6},
    {title:"MILKSHAKES",special:false,key:7},
    {title:"COLD DRINKS",special:false,key:8},
    {title:"DESSERTS",special:false,key:9},
    {title:"HOT DRINKS",special:false,key:10},
  
    ] ;

    export const menuDetailedData =[
      { 
        meal:"Home routine checkup",
        price:10000,
        phn: 2348079988455,
        email:'Rasaqhealth@gmail.com',
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Home Visit for a routine checkup",
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        preferenceData: [
  
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                        ],
  
                        [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                        ],
  
                        [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                        ],
  
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                        ],
                        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],              
        id:0
      },
    
      { 
        meal:"Sickness-Symptops",
        price:10000,
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Home Visit for specific symptoms",
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        preferenceData: [
  
          [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
          ],
  
          [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
          ],
  
          [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
            ],
              
          [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
          ],
  
          [
          {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
          ],
          ],
          minimum_quatity:[2,1,2,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false], 
          id:1
      },
    
      {
        meal:"Run tests at home",
        price:40000,
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Test as home service",
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        preferenceData: [
  
          [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
          ],
  
          [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
          ],
  
          [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
            ],
              
          [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
          ],
  
          [
          {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
          ],
          ],
  
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],   
        id:2
      },
    
      {
        meal:"Home routine checkup",
        price:10000,
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Home Visit for a routine checkup",
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        preferenceData: [
  
          [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
          ],
  
          [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
          ],
  
          [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
            ],
              
          [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
          ],
  
          [
          {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
          ],
          ],
        
          minimum_quatity:[2,1,1,null,null],
          counter:[0,0,0,0,0],
          required: [true,true,true,false,false],    
        id:3
      },
    
      
      { 
        
        meal:"Home routine checkup",
        price:10000,
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Home Visit for a routine checkup",
        
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        
        preferenceData: [
  
          [{name:"Jalapeno Dip",price:8.91,checked:false,id:0},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:1},{name:'BBQ Dip',price:11.99 ,checked:false,id:2},
          ],
  
          [{name:"Small Coke",price:8.90 ,checked:false,id:0 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},
          ],
  
          [{name:"Small Coke",price:8.90,checked:false ,id:0},{name:"Small Fanta Orange",price:8.90,checked:false ,id:1},{name:'Small Sprite',price:11.90,checked:false ,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95,checked:false ,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:8},
            ],
              
          [{name:"debonairs sauce",price:8.90 ,checked:false,id:0},{name:"BBQ Sauce",price:8.90,checked:false ,id:1},{name:'Tikka Sauce',price:11.90,checked:false ,id:2},
          ],
  
          [
          {name:"Small Coke",price:8.90 ,checked:false,id:0},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:1},{name:'Small Sprite',price:11.90 ,checked:false,id:2},
          {name:'Small Coke Zero',price:3.95 ,checked:false,id:3},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:4},{name:'Small Apple Juice',price:10.95 ,checked:false,id:5},
          {name:'Small Strawberry Shake',price:16.95,checked:false ,id:6},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:7},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:8},
          ],
          ],
  
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],     
        id:4
      },
  
      { 
        meal:"Home routine checkup",
        price:10000,
        image:require('../../assets/HomeVisit.jpg'),
        details:"Request a Home Visit for a routine checkup",
        preferenceTitle:["Choose your 2 dips","Choose your 1st drink flavour", "Choose your 2nd drink flavour","Would you like to add a side?","Would you Like any extra sauce?"  ],
        preferenceData: [
  
                        [{name:"Jalapeno Dip",price:8.91,checked:false,id:10},{name:"Sweet & Sour Dip",price:8.75,checked:false ,id:11},{name:'BBQ Dip',price:11.99 ,checked:false,id:12},
                        ],
  
                        [{name:"Small Coke",price:8.90 ,checked:false,id:13 },{name:"Small Fanta Orange",price:8.90 ,checked:false,id:14},{name:'Small Sprite',price:11.90,checked:false ,id:15},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:16},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:17},{name:'Small Apple Juice',price:10.95 ,checked:false,id:18},
                        {name:'Small Strawberry Shake',price:16.95 ,checked:false,id:19},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:20},
                        ],
  
                        [{name:"Small Coke",price:8.90,checked:false ,id:21},{name:"Small Fanta Orange",price:8.90,checked:false ,id:22},{name:'Small Sprite',price:11.90,checked:false ,id:23},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:24},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:25},{name:'Small Apple Juice',price:10.95,checked:false ,id:26},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:27},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:28},{name:'Small Vanilla Shake',price:17.95 ,checked:false,id:29},
                          ],
                            
                        [{name:"debonairs sauce",price:8.90 ,checked:false,id:30},{name:"BBQ Sauce",price:8.90,checked:false ,id:31},{name:'Tikka Sauce',price:11.90,checked:false ,id:32},
                        ],
  
                        [
                        {name:"Small Coke",price:8.90 ,checked:false,id:33},{name:"Small Fanta Orange",price:8.90 ,checked:false,id:34},{name:'Small Sprite',price:11.90 ,checked:false,id:35},
                        {name:'Small Coke Zero',price:3.95 ,checked:false,id:36},{name:'Small Syoney Zero',price:3.95 ,checked:false,id:37},{name:'Small Apple Juice',price:10.95 ,checked:false,id:38},
                        {name:'Small Strawberry Shake',price:16.95,checked:false ,id:39},{name:'Small Chocolate Shake',price:16.95 ,checked:false,id:40},{name:'Small Vanilla Shake',price:17.95,checked:false ,id:41},
                        ],
                        ],
        minimum_quatity:[2,1,1,null,null],
        counter:[0,0,0,0,0],
        required: [true,true,true,false,false],              
        id:5
      },
    
    ];


    export const Appointments =[
      { 
        name:"Sarah Idowu",
        ailment:'Chestpains ',
        phn: 2348079988455,
        email:'sarahidowu@gmail.com',
        image:require('../../assets/bp3.jpg'),
        details:"Requested a home visit for checkup",
        time:'9:00am',
        date:'02/07/2022',           
        id:0
      },
    
      { 
        name:"Micheal Isan",
        ailment:'Swelling by left side of the head ',
        phn: 2348079988455,
        email:'MichealIsan@gmail.com',
        image:require('../../assets/bp4.jpg'),
        details:"Requesting a time slot at hospital",
        time:'3:00pm',
        date:'02/08/2022',           
        id:2
      },
      { 
        name:"Ross Geller",
        ailment:'Sharp pain in lower abdomen',
        phn: 2348079988455,
        email:'MonicaG@gmail.com',
        image:require('../../assets/bp2.jpg'),
        details:"Requesting a home visit",
        time:'12:00pm',
        date:'04/07/2022',           
        id:3
      },
      { 
        name:"Monica Geller",
        ailment:'Sharp pain in upper abdomen',
        phn: 2348079988455,
        email:'MonicaG@gmail.com',
        image:require('../../assets/bp2.jpg'),
        details:"Requesting a home visit",
        time:'12:00pm',
        date:'04/07/2022',           
        id:4
      },
     
     
    
    ];
     
  