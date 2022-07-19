export interface Country{
    id:number;
    name: string;
    code: string;
}

export interface City{
    id:number;
    name:string;
    countryRefId:number;
}

export interface Hotel {
    id: number;
    name: string;
    star: number;
    cityRefId:number;
    image:string;
    description:string;
}

export interface Amenities{
    id: number;
    name: string;
    description:string;
}


export interface Room{
    id: number;
    name: string;
    description:string;
}

export interface HotelAmenities{
    id: number;
    hotelRefId: number;
    amenitieRefId:number;
}

 export interface HotelRoom{
    id: number;
    hotelRefId:number;
    roomRefId: number;
    perNight:number;
    perDay:number;
    perDayNight:number;
 }


 export interface TravelClass{
    id:number;  
    name:string,
 }

 export interface Users{
    id:number;  
    firstName:string;
    lastName:string;
    email:string;
    cityRefId:number;
 }

 export interface flight{
    id:number;
    code:string;
    fromAirPortRefId:number;
    toAirPortRefId:number;
    telephone:string;
    telephone2:string;
 }

 export interface Airport{
    id:number;
    name:string;
    shortName:string;
    cityRefId:number;
    pincode:number;
    logo:string;
    address1:string;
    address2:string;
    address3:string;
    telephone:string;
    telephone2:string;
    email:string;
    email2:string;
 }

export interface Airline{
    id:number;
    code:string;
    name:string;
    shortName:string;
    cityRefId:number;
    pincode:number;
    logo:string;
    address1:string;
    address2:string;
    address3:string;
    telephone:string;
    telephone2:string;
    email:string;
    email2:string;
}
export interface FlightTravel{
    id:number;
    flightRefId:number;
    travelClassRefId:number;
    rent:number;
}

export interface FlightBooking{
       id:number;
       userRefId:number;
       bookingDate:string;
       flightScheduleId:number;
       contactNumber:number;
       contactEmail:'';
       numberOfTicket:number;
       totalAmount:number;
}


export interface FlightCustomer{
       id: number;
       firstName:string;
       lastName:string;
       age:number;
       flightBookingId:number;
       userRefId:number;
}


export interface Flightshcedule{
    id:number;
    flightRefId:number;
    departureDate:string;
    arrivalDate:string;
}


export interface Locations{
    id:number;
    locationName:string;
}

export interface HolidayPackagr{
    holidaypackageId:number;
    from_locationRefId:number;
    to_locationRefId:number;
    image:string;
    hotel_ref_id:number;
    holidaypackagePrice:number;
    guestNo:number;
    description:string;
    dateTime:string;
}

export interface HolidayBooking {
     id:number;
     holidayPakageId:number;
     userId:number;
     bookingDate:string;
}


export class Employee {
    id?:number=0;
    firstname:string = '';
    lastname:string = '';
    birthdate:string = '';
    gender:string = '';
    education:string ='';
    company:string = '';
    jobExperience:number =0;
    salary:number = 0;
    profile:string='';
}
