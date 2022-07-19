import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminPanalComponent } from './admin-panal/admin-panal.component';
import { FilghtBookComponent } from './Fights/filght-book/filght-book.component';
import { HeaderComponent } from './header/header.component';
import { HolidayPageComponent } from './holiday-page/holiday-page.component';
import { HomeComponent } from './HomePage/home/home.component';
import { LoginPageComponent } from './LoginComponent/login-page/login-page.component';
import { AddAirlineComponent } from './SumeraTravel/Airlines/add-airline/add-airline.component';
import { AirlineComponent } from './SumeraTravel/Airlines/airline/airline.component';
import { UpdateAirlineComponent } from './SumeraTravel/Airlines/update-airline/update-airline.component';
import { AddAirportComponent } from './SumeraTravel/Airport/add-airport/add-airport.component';
import { AirportComponent } from './SumeraTravel/Airport/airport/airport.component';
import { UpdateAirportComponent } from './SumeraTravel/Airport/update-airport/update-airport.component';
 import { AddAmenitiesComponent } from './SumeraTravel/Amenities/add-amenities/add-amenities.component';
import { AmenitiesComponent } from './SumeraTravel/Amenities/amenities/amenities.component';
import { UpdateComponent } from './SumeraTravel/Amenities/update-delete/update-delete.component';
import { AddCityComponent } from './SumeraTravel/Citys/add-city/add-city.component';
import { CitysComponent } from './SumeraTravel/Citys/citys/citys.component';
import { UpdateDeleteComponent } from './SumeraTravel/Citys/update-delete/update-delete.component';
 import { AddCounrtyComponent } from './SumeraTravel/CountryS/Add-Country/add-counrty.component';
import { CounrtyComponent } from './SumeraTravel/CountryS/Country/counrty.component';
import { EditComponent } from './SumeraTravel/CountryS/Update-Delete/edit.component';
import { AddFlightComponent } from './SumeraTravel/Flight/add-flight/add-flight.component';
import { FlightComponent } from './SumeraTravel/Flight/flight/flight.component';
import { UpdateFlightComponent } from './SumeraTravel/Flight/update-flight/update-flight.component';
import { AddFlightBookingComponent } from './SumeraTravel/FlightBooking/add-flight-booking/add-flight-booking.component';
import { FlightBookingComponent } from './SumeraTravel/FlightBooking/flight-booking/flight-booking.component';
import { UpdateFlightBookingComponent } from './SumeraTravel/FlightBooking/update-flight-booking/update-flight-booking.component';
import { AddCustomerDetailComponent } from './SumeraTravel/FlightCustomerDetail/add-customer-detail/add-customer-detail.component';
import { CustomerDetailComponent } from './SumeraTravel/FlightCustomerDetail/customer-detail/customer-detail.component';
import { UpdatecustomerComponent } from './SumeraTravel/FlightCustomerDetail/updatecustomer/updatecustomer.component';
import { AddFlightShceduleComponent } from './SumeraTravel/FlightShcedule/add-flight-shcedule/add-flight-shcedule.component';
import { FlightShceduleComponent } from './SumeraTravel/FlightShcedule/flight-shcedule/flight-shcedule.component';
import { UpdateFlightShceduleComponent } from './SumeraTravel/FlightShcedule/update-flight-shcedule/update-flight-shcedule.component';
import { AddFlightTravelComponent } from './SumeraTravel/FlightTravel/add-flight-travel/add-flight-travel.component';
import { FlightTravelComponent } from './SumeraTravel/FlightTravel/flight-travel/flight-travel.component';
import { UpdateFlightTravelComponent } from './SumeraTravel/FlightTravel/update-flight-travel/update-flight-travel.component';
import { AddHolidayBookingComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/add-holiday-booking/add-holiday-booking.component';
import { HolidayBookingComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/holiday-booking/holiday-booking.component';
import { UpdateholidayComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/updateholiday/updateholiday.component';
import { AddHolidayComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/add-holiday/add-holiday.component';
import { HolidayPackgeComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/holiday-packge/holiday-packge.component';
import { UpdateholidaylistComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/updateholidaylist/updateholidaylist.component';
import { AddLocationComponent } from './SumeraTravel/HolidayBooking/Locations/add-location/add-location.component';
import { LocationComponent } from './SumeraTravel/HolidayBooking/Locations/location/location.component';
import { UpdatelocationComponent } from './SumeraTravel/HolidayBooking/Locations/updatelocation/updatelocation.component';
import { AddHotelsComponent } from './SumeraTravel/Hotels/add-hotels/add-hotels.component';
import { HotelsComponent } from './SumeraTravel/Hotels/hotels/hotels.component';
import { UpdateDeleteComponents } from './SumeraTravel/Hotels/update-delete/update-delete.component';
import { AddRoomComponent } from './SumeraTravel/Room/add-room/add-room.component';
import { RoomComponent } from './SumeraTravel/Room/room/room.component';
import { UpdateComponents } from './SumeraTravel/Room/update/update.component';
import { AddHotelAmenitiesComponent } from './SumeraTravel/RoomAmenities/add-hotel-amenities/add-hotel-amenities.component';
import { EditArmenitiesComponent } from './SumeraTravel/RoomAmenities/edit-armenities/edit-armenities.component';
import { RoomAmenitiesComponent } from './SumeraTravel/RoomAmenities/room-amenities/room-amenities.component';
import { AddHotelRoomComponent } from './SumeraTravel/RoomHotel/add-hotel-room/add-hotel-room.component';
import { EditHotelroomComponent } from './SumeraTravel/RoomHotel/edit-hotelroom/edit-hotelroom.component';
import { RoomHotelComponent } from './SumeraTravel/RoomHotel/room-hotel/room-hotel.component';
import { AddTravelComponent } from './SumeraTravel/Travelclass/add-travel/add-travel.component';
import { EditTravelComponent } from './SumeraTravel/Travelclass/edit-travel/edit-travel.component';
import { TravelclassComponent } from './SumeraTravel/Travelclass/travelclass/travelclass.component';
import { AddUsersComponent } from './SumeraTravel/Users/add-users/add-users.component';
import { UpdateUserComponent } from './SumeraTravel/Users/update-user/update-user.component';
import { UsersComponent } from './SumeraTravel/Users/users/users.component';

const routes: Routes = [
  {
    path: '',
    component: HolidayPageComponent
  },
  {
    path: 'Country',
    component: CounrtyComponent
  },
  {
    path: 'add-country',component: AddCounrtyComponent   
  },
  {
    path:'app/edit/:id',
    component: EditComponent
  },
  {
    path:'Citys',
    component:CitysComponent
  },
  {
    path:'add-city',
    component:AddCityComponent  
  },
  {
    path:'app/update/:id',
    component:UpdateDeleteComponent
  },
  {
    path: 'Hotel',
    component:HotelsComponent
  },
  {
    path:'add-hotels',
    component:AddHotelsComponent
  },
  {
    path:'app/Update/:id',
    component:UpdateDeleteComponents
  },
  {
    path:'Amenities',
    component:AmenitiesComponent
  },
  {
    path:'add-amenities',
    component:AddAmenitiesComponent
  },
  {
    path:'app/amenities/:id',
    component:UpdateComponent
  },
  {
    path:'Rooms',
    component:RoomComponent
  },
  {
    path:'add-Room',
    component:AddRoomComponent
  },
  {
    path:'app/Updates/:id',
    component:UpdateComponents
  },
  {
    path:'HotelAmenities',
    component:RoomAmenitiesComponent
  },
  {
    path:'add-HotelAmenities',
    component:AddHotelAmenitiesComponent
  },
  {
    path:'app/HotelAmenities/:id',
    component:EditArmenitiesComponent
  },
  {
    path:'Hotel_roomAmenities',
    component:RoomHotelComponent
  },
  {
    path:'add-HotelRoom',
    component:AddHotelRoomComponent 
  },
  {
    path:'app/HotelRoom/:id',
    component:EditHotelroomComponent
  },
  {
    path:'Travel',
    component:TravelclassComponent
  },
  {
    path:'add-travel',
    component:AddTravelComponent
  },
  {
    path:'app/travel/:id',
    component:EditTravelComponent
  },
  {
    path:'User',
    component:UsersComponent
  },
  {
    path:'add-User',
    component:AddUsersComponent
  },
  {
    path:'app/Users/:id',
    component:UpdateUserComponent
  },
  {
    path:'Flight',
    component:FlightComponent
  },
  {
    path:'add-flight',
    component:AddFlightComponent
  },
  {
    path:'app/Flight/:id',
    component:UpdateFlightComponent
  },
  {
    path:'airport',
    component:AirportComponent
  },
  {
    path:'add-Airport',
    component:AddAirportComponent
  },
  {
    path:'app/Airport/:id',
    component:UpdateAirportComponent
  },
  {
    path:'Airline',
    component:AirlineComponent
  },
  {
    path:'add-Airline',
    component:AddAirlineComponent
  },
  {
    path:'app/Airline/:id',
    component:UpdateAirlineComponent
  },
  {
    path:'FlightTravel',
    component:FlightTravelComponent
  },
  {
    path:'add-FlightTravel',
    component:AddFlightTravelComponent
  },
  {
    path:'app/FlightTravel/:id',
    component:UpdateFlightTravelComponent
  },
  {
    path:'FlightBooking',
    component:FlightBookingComponent
  },
  {
    path:'add-FlightBooking',
    component:AddFlightBookingComponent
  },
  {
    path:'app/FlightBooking/:id',
    component:UpdateFlightBookingComponent
  },
  {
    path:'FlightCustemar',
    component:CustomerDetailComponent
  },
  {
    path:'add-FlightCustemar',
    component:AddCustomerDetailComponent
  },
  {
    path:'app/FlightCustemar/:id',
    component:UpdatecustomerComponent
  },
  {
    path:'FlightShcedule',
    component:FlightShceduleComponent
  },
  {
    path:'add-FlightShcedule',
    component:AddFlightShceduleComponent
  },
  {
    path:'app/FlightShcedule/:id',
    component:UpdateFlightShceduleComponent
  },
  {
    path:'Location',
    component: LocationComponent
  },
  {
    path:'add-Location',
    component: AddLocationComponent
  },
  {
    path:'app/Location/:id',
    component:UpdatelocationComponent
  },
  {
    path:'HolidayPackge',
    component:HolidayPackgeComponent
  },
  {
    path:'add-HolidayPackge',
    component: AddHolidayComponent
  },
  {
    path:'app/HolidayPackge/:id',
    component:UpdateholidaylistComponent
  },
  {
    path:'HolidayBooking',
    component:HolidayBookingComponent
  },
  {
    path:'add-HolidayBooking',
    component:AddHolidayBookingComponent
  },
  {
    path:'app/HolidayBooking/:id',
    component:UpdateholidayComponent
  },
  {
    path:'Admin',
    component:AdminPanalComponent
  },
  {
    path:'Header',
    component:HeaderComponent
  },
  {
    path:'FilghtBook',
    component:FilghtBookComponent
  },
  {
    path:'Loginpage',
    component:LoginPageComponent
  }
];
 
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
