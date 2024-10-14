import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PowerBiService } from '../power-bi.service';

@Component({
  selector: 'app-power-bi-embed',
  templateUrl: './power-bi-embed.component.html',
  styleUrls: ['./power-bi-embed.component.css'],
  standalone: true
})
export class PowerBiEmbedComponent implements OnInit {
  @ViewChild('reportContainer', { static: true }) reportContainer!: ElementRef;

  constructor(private powerBiService: PowerBiService) { }

  ngOnInit(): void {
    this.embedPowerBiReport();
  }

  embedPowerBiReport(): void {
    const embedConfig = {
      type: 'report', // could be 'dashboard' or 'tile' depending on what you want to embed
      id: '2bb1490b-f644-485b-8f82-8befec5b92ad',  // Replace with your report ID
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=2bb1490b-f644-485b-8f82-8befec5b92ad&groupId=5e501504-f1ae-49b9-a620-185c11e4d5a5&w=2&config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1DLVBSSU1BUlktcmVkaXJlY3QuYW5hbHlzaXMud2luZG93cy5uZXQiLCJlbWJlZEZlYXR1cmVzIjp7InVzYWdlTWV0cmljc1ZOZXh0Ijp0cnVlfX0%3d",  // Replace with your report embed URL
      accessToken: 'eyJ0eXAiOiJKV1QiLCJhbGciOiJSUzI1NiIsIng1dCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyIsImtpZCI6Ik1jN2wzSXo5M2c3dXdnTmVFbW13X1dZR1BrbyJ9.eyJhdWQiOiJodHRwczovL2FuYWx5c2lzLndpbmRvd3MubmV0L3Bvd2VyYmkvYXBpIiwiaXNzIjoiaHR0cHM6Ly9zdHMud2luZG93cy5uZXQvNmY2YjU4MTMtMjQzZi00MWE5LThiOWQtMzY4NTJlNGE1MWYyLyIsImlhdCI6MTcyODU0Njg4MiwibmJmIjoxNzI4NTQ2ODgyLCJleHAiOjE3Mjg1NTEwNjAsImFjY3QiOjAsImFjciI6IjEiLCJhaW8iOiJBVFFBeS84WUFBQUFSWE04ejZxVFc1alM5VVc1dVpHV0JVUElGZVd4b3lPbEJNS3dUSU12L295N3gyN3dqSjFHWnVkUjZUOGdScHZ2IiwiYW1yIjpbInB3ZCJdLCJhcHBpZCI6Ijg3MWMwMTBmLTVlNjEtNGZiMS04M2FjLTk4NjEwYTdlOTExMCIsImFwcGlkYWNyIjoiMCIsImdpdmVuX25hbWUiOiJtYW1lZS5iaSIsImlkdHlwIjoidXNlciIsImlwYWRkciI6IjIwMy4xNjYuMjAzLjk2IiwibmFtZSI6Ik1BTUVFIEJJIEFkbWluaXN0cmF0b3IiLCJvaWQiOiJjYmRiZjExYi1hMDA2LTQwYzYtODk5Yi1jNTU4NTRkMzExNDAiLCJvbnByZW1fc2lkIjoiUy0xLTUtMjEtODYxNzQwNzI0LTI1NDA2ODc5MTEtNTk0MDAyMzA2LTU2ODYiLCJwdWlkIjoiMTAwMzNGRkZBMTlEQjQyOCIsInJoIjoiMC5BWElBRTFocmJ6OGtxVUdMblRhRkxrcFI4Z2tBQUFBQUFBQUF3QUFBQUFBQUFBRERBSGsuIiwic2NwIjoidXNlcl9pbXBlcnNvbmF0aW9uIiwic2lnbmluX3N0YXRlIjpbImttc2kiXSwic3ViIjoiMDZUUVVJbzdoSGpYYS16VnNBbXFSOFh5VV9Sbmk0UWJyM0ItelctR0NMYyIsInRpZCI6IjZmNmI1ODEzLTI0M2YtNDFhOS04YjlkLTM2ODUyZTRhNTFmMiIsInVuaXF1ZV9uYW1lIjoibWFtZWUuYmlAbWFtZWUuY29tLm15IiwidXBuIjoibWFtZWUuYmlAbWFtZWUuY29tLm15IiwidXRpIjoiLUFDeTBXbFV3RUsyMkhqM1FHMmRBQSIsInZlciI6IjEuMCIsIndpZHMiOlsiNGE1ZDhmNjUtNDFkYS00ZGU0LTg5NjgtZTAzNWI2NTMzOWNmIiwiYTllYTg5OTYtMTIyZi00Yzc0LTk1MjAtOGVkY2QxOTI4MjZjIiwiYjc5ZmJmNGQtM2VmOS00Njg5LTgxNDMtNzZiMTk0ZTg1NTA5Il0sInhtc19pZHJlbCI6IjEgMjIifQ.LHAmtsA9MFl9rBwFo0u1-wNCq1NyvBc5UmIJONlqE1H4dz1m_h0BsUOGozQ3ix3AzReBc-gVdlY4D2RvhjNh_kIBEkMNKoz9Nad-gBdE0BA12BOMCQsC0czATjOIsnwxrDQPafG9BhM3Wc-d3t4YZClu2qTewwvE9MXO3CsJGCRVlDeCZFuoeoSJol5QScht-UeC6mcwErN1dutymr8SOqG_w9X3k5OewdkghjJ0Iv-mP5f_sONz5sK6lzCBD7N51s2R-YxZZXtday9GTk-RfLZc9cNPv_xhUXEhKlGDhv21-QXiAZUXkgun_viirZex-Aq7YkTLyubwI-WBBESjiw',  // Replace with your access token
      tokenType: 1,  // 1 is for Embed token
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true
      }
    };

    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedConfig);
  }
}