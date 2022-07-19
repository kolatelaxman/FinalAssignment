import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CounrtyComponent } from './SumeraTravel/CountryS/Country/counrty.component';
import { AddCounrtyComponent } from './SumeraTravel/CountryS/Add-Country/add-counrty.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditComponent } from './SumeraTravel/CountryS/Update-Delete/edit.component';
import { CitysComponent } from './SumeraTravel/Citys/citys/citys.component';
import { AddCityComponent } from './SumeraTravel/Citys/add-city/add-city.component';
import { UpdateDeleteComponent } from './SumeraTravel/Citys/update-delete/update-delete.component';
import { HotelsComponent } from './SumeraTravel/Hotels/hotels/hotels.component';
import { AddHotelsComponent } from './SumeraTravel/Hotels/add-hotels/add-hotels.component';
import { UpdateDeleteComponents } from './SumeraTravel/Hotels/update-delete/update-delete.component';
import { AmenitiesComponent } from './SumeraTravel/Amenities/amenities/amenities.component';
import { AddAmenitiesComponent } from './SumeraTravel/Amenities/add-amenities/add-amenities.component';
import { UpdateComponent } from './SumeraTravel/Amenities/update-delete/update-delete.component';
import { RoomComponent } from './SumeraTravel/Room/room/room.component';
import { AddRoomComponent } from './SumeraTravel/Room/add-room/add-room.component';
import { UpdateComponents } from './SumeraTravel/Room/update/update.component';
import { RoomAmenitiesComponent } from './SumeraTravel/RoomAmenities/room-amenities/room-amenities.component';
import { AddHotelAmenitiesComponent } from './SumeraTravel/RoomAmenities/add-hotel-amenities/add-hotel-amenities.component';
import { EditArmenitiesComponent } from './SumeraTravel/RoomAmenities/edit-armenities/edit-armenities.component';
import { RoomHotelComponent } from './SumeraTravel/RoomHotel/room-hotel/room-hotel.component';
import { AddHotelRoomComponent } from './SumeraTravel/RoomHotel/add-hotel-room/add-hotel-room.component';
import { EditHotelroomComponent } from './SumeraTravel/RoomHotel/edit-hotelroom/edit-hotelroom.component';
import { TravelclassComponent } from './SumeraTravel/Travelclass/travelclass/travelclass.component';
import { AddTravelComponent } from './SumeraTravel/Travelclass/add-travel/add-travel.component';
import { EditTravelComponent } from './SumeraTravel/Travelclass/edit-travel/edit-travel.component';
import { UsersComponent } from './SumeraTravel/Users/users/users.component';
import { AddUsersComponent } from './SumeraTravel/Users/add-users/add-users.component';
import { UpdateUserComponent } from './SumeraTravel/Users/update-user/update-user.component';
 import { AddAirportComponent } from './SumeraTravel/Airport/add-airport/add-airport.component';
import { UpdateAirportComponent } from './SumeraTravel/Airport/update-airport/update-airport.component';
import { FlightComponent } from './SumeraTravel/Flight/flight/flight.component';
import { AddFlightComponent } from './SumeraTravel/Flight/add-flight/add-flight.component';
import { UpdateFlightComponent } from './SumeraTravel/Flight/update-flight/update-flight.component';
import { AirportComponent } from './SumeraTravel/Airport/airport/airport.component';
import { AirlineComponent } from './SumeraTravel/Airlines/airline/airline.component';
import { AddAirlineComponent } from './SumeraTravel/Airlines/add-airline/add-airline.component';
import { UpdateAirlineComponent } from './SumeraTravel/Airlines/update-airline/update-airline.component';
import { FlightTravelComponent } from './SumeraTravel/FlightTravel/flight-travel/flight-travel.component';
import { AddFlightTravelComponent } from './SumeraTravel/FlightTravel/add-flight-travel/add-flight-travel.component';
import { UpdateFlightTravelComponent } from './SumeraTravel/FlightTravel/update-flight-travel/update-flight-travel.component';
import { FlightBookingComponent } from './SumeraTravel/FlightBooking/flight-booking/flight-booking.component';
import { AddFlightBookingComponent } from './SumeraTravel/FlightBooking/add-flight-booking/add-flight-booking.component';
import { UpdateFlightBookingComponent } from './SumeraTravel/FlightBooking/update-flight-booking/update-flight-booking.component';
import { LoginPageComponent } from './LoginComponent/login-page/login-page.component';
import { CustomerDetailComponent } from './SumeraTravel/FlightCustomerDetail/customer-detail/customer-detail.component';
import { AddCustomerDetailComponent } from './SumeraTravel/FlightCustomerDetail/add-customer-detail/add-customer-detail.component';
import { UpdatecustomerComponent } from './SumeraTravel/FlightCustomerDetail/updatecustomer/updatecustomer.component';
import { FlightShceduleComponent } from './SumeraTravel/FlightShcedule/flight-shcedule/flight-shcedule.component';
import { AddFlightShceduleComponent } from './SumeraTravel/FlightShcedule/add-flight-shcedule/add-flight-shcedule.component';
import { UpdateFlightShceduleComponent } from './SumeraTravel/FlightShcedule/update-flight-shcedule/update-flight-shcedule.component';
import { HomeComponent } from './HomePage/home/home.component';
import { AdminPanalComponent } from './admin-panal/admin-panal.component';
import { HeaderComponent } from './header/header.component';
import { LocationComponent } from './SumeraTravel/HolidayBooking/Locations/location/location.component';
import { AddLocationComponent } from './SumeraTravel/HolidayBooking/Locations/add-location/add-location.component';
import { UpdatelocationComponent } from './SumeraTravel/HolidayBooking/Locations/updatelocation/updatelocation.component';
import { HolidayPackgeComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/holiday-packge/holiday-packge.component';
import { AddHolidayComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/add-holiday/add-holiday.component';
import { UpdateholidaylistComponent } from './SumeraTravel/HolidayBooking/HolidayPackage/updateholidaylist/updateholidaylist.component';
import { HolidayPageComponent } from './holiday-page/holiday-page.component';
import { HolidayBookingComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/holiday-booking/holiday-booking.component';
import { AddHolidayBookingComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/add-holiday-booking/add-holiday-booking.component';
import { UpdateholidayComponent } from './SumeraTravel/HolidayBooking/HolidayBooking/updateholiday/updateholiday.component';
import { FilghtBookComponent } from './Fights/filght-book/filght-book.component';
  
    
@NgModule({
  declarations: [
    AppComponent,
    CounrtyComponent,
    AddCounrtyComponent,
    EditComponent,
    CitysComponent,
    AddCityComponent,
    UpdateDeleteComponent,
    HotelsComponent,
    AddHotelsComponent,
    UpdateDeleteComponents,
    AmenitiesComponent,
    AddAmenitiesComponent,
    UpdateComponent,
    RoomComponent,
    AddRoomComponent,
    UpdateComponents,
    RoomAmenitiesComponent,
    AddHotelAmenitiesComponent,
    EditArmenitiesComponent,
    RoomHotelComponent,
    AddHotelRoomComponent,
    EditHotelroomComponent,
    TravelclassComponent,
    AddTravelComponent,
    EditTravelComponent,
    UsersComponent,
    AddUsersComponent,
    UpdateUserComponent,
     AddAirportComponent,
    UpdateAirportComponent,
    FlightComponent,
    AddFlightComponent,
    UpdateFlightComponent,
    AirportComponent,
    AirlineComponent,
    AddAirlineComponent,
    UpdateAirlineComponent,
    FlightTravelComponent,
    AddFlightTravelComponent,
    UpdateFlightTravelComponent,
    FlightBookingComponent,
    AddFlightBookingComponent,
    UpdateFlightBookingComponent,
    LoginPageComponent,
    CustomerDetailComponent,
    AddCustomerDetailComponent,
    UpdatecustomerComponent,
    FlightShceduleComponent,
    AddFlightShceduleComponent,
    UpdateFlightShceduleComponent,
    HomeComponent,
    AdminPanalComponent,
    HeaderComponent,
    LocationComponent,
    AddLocationComponent,
    UpdatelocationComponent,
    HolidayPackgeComponent,
    AddHolidayComponent,
    UpdateholidaylistComponent,
    HolidayPageComponent,
    HolidayBookingComponent,
    AddHolidayBookingComponent,
    UpdateholidayComponent,
    FilghtBookComponent,
    

   ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],

  
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
