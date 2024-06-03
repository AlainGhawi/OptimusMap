import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ChatgptService } from '../chatgpt.service';

@Component({
  selector: 'app-maps',
  templateUrl: './maps.component.html',
  styleUrl: './maps.component.scss'
})
export class MapsComponent {

  placements: string[] = [];
  reasoning: string = '';
  loading: boolean = false;
  error: string = '';

  cameraIcon: string = 'assets/images/camera-solid.png'; // Path to your camera icon


  form: FormGroup;
  crimeTypes = ['Auto Theft', 'Theft From Vehicles', 'Assault', 'Burglary'];
  zoneTypes = ['Residential', 'Industrial', 'Commercial'];
  markerPositions: google.maps.LatLngLiteral[] = [];
  options: google.maps.MapOptions = {
    clickableIcons: true,
    mapId: "142640eeae590a1b",
    center: { lat: 39.74159034269199, lng: -104.95670928470591 },
    zoom: 13,
  };

  constructor(private fb: FormBuilder, private chatgptService: ChatgptService) {
    this.form = this.fb.group({
      numberOfCameras: [null, [Validators.required, Validators.min(0), Validators.max(100)]],
      crimeTypes: [[]],
      zoneTypes: [[]]
    });
  }

  extractCoordinates(text: string) {
    const regex = /Coordinates:\s*\{lat:\s*([\d.-]+),\s*lng:\s*([\d.-]+)\}/g;
    let matches;
    this.markerPositions = [];
  
    while ((matches = regex.exec(text)) !== null) {
      const lat = parseFloat(matches[1]);
      const lng = parseFloat(matches[2]);
      this.markerPositions.push({ lat, lng });
    }
  }

  submit() {
    if (this.form.valid) {
      console.log(this.form.value);
      // Handle the form submission here

      this.loading = true;
      this.error = '';
  
      this.chatgptService.getCameraPlacementsWithReasoning(this.form.value.numberOfCameras).subscribe({
        next: (data) => {
          this.placements = data.placements;          
          this.reasoning = data.reasoning;
          this.extractCoordinates(this.reasoning);
          this.loading = false;
          },
        error: (err) => {
          this.error = 'Error fetching data';
          this.loading = false;
        }
      });
    } else {
      console.log('Form is invalid');
    }
  }
}
