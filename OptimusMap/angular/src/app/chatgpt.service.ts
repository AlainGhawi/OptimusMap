import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ChatgptService {

  private apiUrl = 'https://api.openai.com/v1/chat/completions';
  private apiKey = 'YOUR_OPEN_API_KEY'; // Replace with your OpenAI API key

  constructor(private http: HttpClient) { }

  getCameraPlacementsWithReasoning(amountCams: number): Observable<{ placements: string[], reasoning: string }> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      'Authorization': `Bearer ${this.apiKey}`
    });

    const crimeCsv = `offense_type_id,offense_category_id,incident_address,x,y,long,lat,district_id,precinct_id,neighborhood_id,is_crime,is_traffic,victim_count
    theft-stln-veh-const-eqpt,auto-theft,E 17TH AVE / N KEARNEY ST,3163787,1696191,-104.9175562,39.7434073,2,222,south-park-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4237 N JOSEPHINE ST,3152184,1707987,-104.9585667,39.7759862,2,212,elyria-swansea,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,2300 N JASMINE ST,3163517,1699048,-104.9184513,39.751255,2,222,north-park-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1830 S BANNOCK ST,3143647,1674095,-104.989616,39.6830819,3,313,overland,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,441 N ACOMA ST,3143558,1688783,-104.9896391,39.7234051,3,311,baker,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,7400 E HAMPDEN AVE,3168440,1663019,-104.9017869,39.6522603,3,324,hampden-south,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4100 BLK N INCA ST,3140923,1706992,-104.9986493,39.7734322,1,112,sunnyside,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4900 BLOCK N TELLURIDE ST,3201890,1713264,-104.781583,39.789526,5,522,gateway-green-valley-ranch,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4100 E MEXICO AVE,3157840,1675062,-104.9391677,39.6855069,3,322,virginia-village,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1000 S BROADWAY ST,3144313,1679669,-104.9871379,39.6983735,3,313,washington-park-west,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4155 E JEWELL AVE,3158026,1674324,-104.938523,39.6834777,3,322,virginia-village,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,639 W 39TH AVE,3142100,1706041,-104.9944809,39.7708036,1,112,globeville,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,2120 W ARKANSAS AVE,3137121,1676651,-105.012754,39.6901971,4,422,ruby-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,82 N UINTA WAY,3171594,1688506,-104.8899781,39.72217,3,321,lowry-field,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,777 N BANNOCK ST,3143312,1690483,-104.9904797,39.7280757,1,123,lincoln-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,18025 E 61ST AVE,3203428,1719957,-104.7759205,39.8078653,5,522,dia,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,901 W 14TH AVE,3140838,1694464,-104.9991974,39.739042,1,123,lincoln-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,E 37TH AVE / N HARRISON ST,3156940,1705140,-104.9417087,39.7680917,2,212,clayton,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,9300 E 46TH PL,3174222,1709814,-104.8801189,39.7806148,5,511,central-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1500 BLOCK W 8TH AVE,3139700,1690711,-105.0033168,39.7287565,1,123,lincoln-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,20704 E 38TH PL,3211372,1706100,-104.7480542,39.7696495,5,523,gateway-green-valley-ranch,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,2 N KALAMATH ST,3140701,1686376,-104.9998428,39.716841,3,311,baker,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4050 E 13TH AVE,3157457,1693626,-104.940122,39.7364752,2,222,hale,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1445 16TH ST,3141035,1698589,-104.9984159,39.7503629,6,612,union-station,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,12200 BLK E 51ST AVE,3184107,1712970,-104.8448683,39.789088,5,521,montbello,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1100 BLK N YOSEMITE ST,3172960,1692483,-104.8850263,39.7330623,2,223,east-colfax,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,E ELMENDORF DR / N ARGONNE ST,3205182,1714411,-104.7698362,39.7926026,5,523,gateway-green-valley-ranch,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4460 N PEORIA ST,3183893,1708578,-104.8457423,39.7770357,5,521,montbello,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1776 N BROADWAY ST,3144243,1696467,-104.9870496,39.7444885,6,621,north-capitol-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,5660 N TOWER RD,3205213,1717029,-104.769651,39.7997885,5,522,dia,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1430 S FEDERAL BLVD,3133798,1676688,-105.0245611,39.690347,4,422,ruby-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4150 N JASON ST,3140784,1707116,-104.9991413,39.7737747,1,112,sunnyside,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,5100 BLOCK N EATON ST,3123910,1712567,-105.0590778,39.7889786,1,111,regis,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,5660 E ATLANTIC PL,3162849,1673512,-104.9214054,39.6811655,3,322,virginia-village,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,N ONEIDA CT / E LOWRY BLVD,3166757,1686369,-104.9072228,39.7163915,3,321,lowry-field,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4650 N ALCOTT BEACH ALY,3135548,1709759,-105.0177189,39.7811079,1,111,sunnyside,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,18799 E 65TH AVE,3204813,1722452,-104.7709197,39.8146838,5,522,dia,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,100 BLK S FOREST ST,3161304,1685623,-104.926623,39.7144396,3,321,hilltop,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,4801 E 46TH AVE,3160079,1709799,-104.9304385,39.7808278,2,221,northeast-park-hill,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,633 CURTIS ST,3138511,1695180,-105.0074579,39.7410425,1,123,auraria,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1820 W 13TH AVE,3137373,1693522,-105.0115362,39.7365079,1,123,lincoln-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,1550 S WOLFF ST,3127476,1676105,-105.0470357,39.6888352,4,421,mar-lee,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,3150 W JEWELL AVE,3133448,1673032,-105.0258725,39.6803155,4,421,harvey-park,1,0,1
    theft-stln-veh-const-eqpt,auto-theft,5173 N BEELER ST,3173813,1713935,-104.8814742,39.7919351,5,511,central-park,1,0,1
    theft-stln-vehicle-trailer,auto-theft,615 S HAVANA ST,3178120,1682384,-104.8669303,39.7052414,3,321,windsor,1,0,1
    theft-stln-vehicle-trailer,auto-theft,2600 BLK S MAGNOLIA ST,3165705,1668739,-104.9113684,39.6680122,3,323,goldsmith,1,0,1
    theft-stln-vehicle-trailer,auto-theft,4340 N JOSEPHINE ST,3152354,1708430,-104.9579525,39.7771995,2,212,elyria-swansea,1,0,1
    theft-stln-vehicle-trailer,auto-theft,3500 BLK N ADAMS ST,3155040,1704645,-104.9484782,39.7667647,2,212,clayton,1,0,1
    theft-stln-vehicle-trailer,auto-theft,W FLORIDA AVE / S TEJON ST,3137401,1676397,-105.0117639,39.6894957,4,422,ruby-hill,1,0,1
    theft-stln-vehicle-trailer,auto-theft,5100 BLK W MISSISSIPPI AVE,3126124,1679035,-105.0517883,39.6968972,4,412,westwood,1,0,1
    theft-stln-vehicle-trailer,auto-theft,1040 S KEARNEY ST,3163978,1679544,-104.9172568,39.6977049,3,322,washington-virginia-vale,1,0,1
    theft-stln-vehicle-trailer,auto-theft,6300 BLK E EVANS AVE,3164429,1672476,-104.9158156,39.6782937,3,323,goldsmith,1,0,1
    theft-stln-vehicle-trailer,auto-theft,11795 E 45TH AVE,3181899,1709165,-104.8528215,39.7786863,5,511,montbello,1,0,1
    theft-stln-vehicle-trailer,auto-theft,790 N FILLMORE ST,3153972,1690859,-104.9525728,39.7289376,2,213,congress-park,1,0,1
    theft-stln-vehicle-trailer,auto-theft,1295 S HURON ST,3141535,1677804,-104.9970469,39.6932963,4,422,ruby-hill,1,0,1
    theft-stln-vehicle-trailer,auto-theft,3100 BLOCK W OHIO AVE,3133194,1680986,-105.0266277,39.7021547,4,412,westwood,1,0,1
    theft-stln-vehicle-trailer,auto-theft,4100 BLK N HALIFAX ST,3209456,1707350,-104.7548335,39.7731242,5,523,gateway-green-valley-ranch,1,0,1
    theft-stln-vehicle-trailer,auto-theft,2000 W COLFAX AVE,3136028,1694571,-105.0162988,39.7394073,1,122,lincoln-park,1,0,1
    theft-stln-vehicle-trailer,auto-theft,12200 BLK E 37TH AVE,3184003,1705346,-104.8454338,39.7681613,5,512,central-park,1,0,1
    theft-stln-vehicle-trailer,auto-theft,700 BLK N CLAYTON ST,3153043,1690854,-104.9558758,39.7289392,2,213,congress-park,1,0,1
    `

    const prompt = "Here is a CSV:" + crimeCsv + "I want you analyze the center Denver city (39.73853105212809, -104.9546784330953). I need you to list " + amountCams + " cameras placements (give me the longitude and latitude coordinates of those cameras in the following format respecting this regex: /Coordinates:\s*\{lat:\s*([\d.-]+),\s*lng:\s*([\d.-]+)\}/g {lat: 39.74706000118363, lng: -104.94813964804504}) that would be the most strategic to being able to track a thief as well as a short description of the reasoning you used to get those placements.";

    const body = {
      model: 'gpt-4-turbo',
      messages: [
        { role: 'system', content: 'You are a helpful assistant.' },
        { role: 'user', content: prompt }
      ],
      max_tokens: 1000 // Adjust as needed
    };

    return this.http.post<any>(this.apiUrl, body, { headers }).pipe(
      map(response => {
        const messageContent = response.choices[0].message.content.trim();
        const cleanedContent = messageContent.replace(/\*\*/g, '').replace(/\n\n/g, "<br><br>");
        const placements = messageContent.split('\n').slice(1, amountCams + 1);
        return {
          placements: placements,
          reasoning: cleanedContent
        };
      })
    );
  }
}
