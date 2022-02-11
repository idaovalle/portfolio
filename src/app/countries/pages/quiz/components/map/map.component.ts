import {
  AfterViewInit,
  Component,
  ElementRef,
  Input,
  OnChanges,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import mapboxgl, { Marker } from 'mapbox-gl';
import { environment } from 'src/environments/environment';
import { OnDestroy } from '@angular/core';
import { ILatLngMap } from '@countries-interfaces/quiz/quiz-results.interface';
import { elementEventFullName } from '@angular/compiler/src/view_compiler/view_compiler';
@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
})
export class MapComponent implements AfterViewInit, OnDestroy, OnChanges {
  @Input() arrLatLngItem: ILatLngMap[] = [];
  @Input() lngLat!: ILatLngMap;
  @ViewChild('map') divMap!: ElementRef;
  map!: mapboxgl.Map;
  zoomLevel: number = 5;
  center!: [number, number];

  constructor() {}
  ngOnChanges(changes: SimpleChanges): void {
    changes.lngLat.currentValue = this.goToMarker(changes.lngLat.currentValue);
  }
  ngOnDestroy(): void {
    this.map.off('zoom', () => {});
    this.map.off('zoomend', () => {});
    this.map.off('move', () => {});
  }
  ngAfterViewInit(): void {
    this.center = [this.arrLatLngItem[0].lng, this.arrLatLngItem[0].lat];
    mapboxgl.accessToken = environment.mapboxToken;
    this.map = new mapboxgl.Map({
      container: this.divMap.nativeElement, // container ID
      style: 'mapbox://styles/artearyeh/ckzd33ff2001q14qxk1zf0a2c',

      center: this.center, // starting position [lng, lat]
      zoom: this.zoomLevel, // starting zoom
    });
    this.map.addControl(
      new mapboxgl.FullscreenControl({
        container: this.divMap.nativeElement,
      })
    );

    this.eventListener();
    this.addMarker();
  }
  addMarker() {
    this.arrLatLngItem.map((coordinates) => {
      const color = '#xxxxxx'.replace(/x/g, (y) =>
        ((Math.random() * 16) | 0).toString(16)
      );
      let center: [number, number] = [coordinates.lng, coordinates.lat];
      const marker = new mapboxgl.Marker({ color });
      marker.setLngLat(center).addTo(this.map).getElement().style.cursor =
        'pointer';
      marker.getElement().addEventListener('click', () => {
        this.map.flyTo({
          center: center,
          zoom: 5,
        });
      });
    });
  }

  eventListener(): void {
    this.map.on('zoom', () => (this.zoomLevel = this.map.getZoom()));
    this.map.on('zoomend', () => {
      this.map.getZoom() > 18 ? this.map.zoomTo(18) : '';
      this.zoomLevel = this.map.getZoom();
    });
  }
  goToMarker(marker: ILatLngMap): void {
    if (marker !== undefined) {
      this.map.flyTo({
        center: [marker.lng, marker.lat],
        zoom: 5,
      });
    }
  }
  zoomChange(value: number) {
    this.map.zoomTo(value);
  }
}
