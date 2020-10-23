import { Links } from './links';
import { Rocket } from './Rocket';

export class Launch{
    
    flight_number:Number;
    mission_name:string;
    mission_id:string[];
    launch_year:string;
    launch_date_utc:any;
    launch_window:Number;
    rocket:Rocket;
    links:Links;



}