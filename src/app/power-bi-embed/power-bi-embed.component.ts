import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PowerBiService } from '../power-bi.service';
import * as pbi from 'powerbi-client';

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
      id: 'f94b4195-d311-416c-96ba-de102f58bd1a',  // Replace with your report ID
      embedUrl: "https://app.powerbi.com/reportEmbed?reportId=f94b4195-d311-416c-96ba-de102f58bd1a\u0026groupId=f94dcece-63e4-4c27-a859-b82e28da69e5\u0026w=2\u0026config=eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImVtYmVkRmVhdHVyZXMiOnsidXNhZ2VNZXRyaWNzVk5leHQiOnRydWV9fQ%3d%3d",  // Replace with your report embed URL
      accessToken: "H4sIAAAAAAAEAB2TRa7EVgAE7_K3E8lMkbIwM7N3Y_aYnz2mKHfPT_atVqtK_feP876H-V3-_PnT0uy6zA8mRxrJ2rtlVNFShZLKQfcWPe1dbIhZ7J3XwA-RHOwOIXckLeZrQDE218_fFr6fjTM8DEEkT7Gq66YdI-AyeLISUfZSO_LpawUKpsqL7mn1MOLw-qPn91T2ciOUZ2u4GzIKN_11wpX4rqB0Pt4h1GlfEyO2z6Vh8KVp87NGKI4inw0iHtBTMIO0JU96jIGNo5YwLwZu4B51Uc7rMVLMQxbTapKliw6zB0uhY-jWSYqUJ_XTmvkcvqlE1BYwhXSm7yW-PNPo1kMapol5UsIkx9SIkGBUGfKlhsv2pMs8OhIqQ_AXqN6kPJd80BkCzPyapzvbzf1EIAgpofH0ssmZJQzBC4ntfHa7j6yc3qH1kkdExhwVRRADNgzxQwYcyhRri-HlRnaZn99-Qd1QpKr8JxsSKtB9vArl62BKZDPyVdUygMMhC3Mt8SJ1mGmXDJ9A1OjVDfw-DReTnsevlYTCYFtawg53cH5YtGJvOUFj3u7HmI_6KlHB5832phUG7tJcqZCNz6lcWw0taGADRhNP7qvwDs93ksjw2iL6TFTA1G0yaN36WKcUkLUFXy7RmvFCp1v6PPXiPOk3368kL3EwGgeMSb3imQpSoSrehusWjE7swyneL_brXu15aIR9z-7LRyuuZU4rP-OrVd9jZ_reiTp9uZZYvJY35R-TRLRvPRBHiFvb9CnYtnZ0tw3Ofuj9BMyE7zVU7KvaRFFm5i-y4NoiVYG-KKTkiJd7xGZqEWkuyCY0e9udviJG7o3mEOpwIApjI00VSwqXzbNJBbs5mmoTFNls15QGN5VfpWjQhQIC0kNDjeMz3N7ScW7Eezf4UiDcsJC_6QdxGaxYd874fPbaXQNNffWIhOdet9PLa7qdx95VffVPJ4lUxHPVAnF9U_psQ4u27rjRO2eXk2UeT5gCIoWuJubuUo3oVhBMB__r548fHtzLPv_6_r1uJ5g-xsu75GasksXgqO4qxkIMoYBbTpF8B1-rYgiab9OW-7W71Sby-2uDvrXDg7Au0xgrO8x1ZBLEY3XT0Zw9-dU2BBUGZQU1VWuIQl1K8pJoerRLPpQ9rCclKqLak9LE7J2GzMsKejqP2KgMdVYPOg67Isz9xY1gzhKtBuIFxhugL0ejuhfbpIO9aOaIhaOTeJxFpJ5F91xAm49X-vAWXlXjT-iKxMr6oF7R3jpFqs9IKlVQt_vDUML6ZKM6kjcU68ILV95kvZz00srRHvrjQaruymCS-LLlRDt0MSLMlfJMUvhvz9r0RXiJb3ZaQQcVBokUNb1x1Qp9aIufCAQE51__Y76XtgJq9EvZlB0FK4gilaL10KRdEWlPb_5P-V0zvfcvqH5jtrM-GoF-PQWpNT253phFvJiG3gWHVhZDDBU2POFhUSCWVAh-IThTsAB8DCwIyojz9L2Y0PuKp1uT3uQWiWGCIRHN1fmkfldHplUo9rJ2c3ctfQUcrOumz2LGZQJZNqOsJe_ZkVtZq2shibxv1fJLSHFv9mvc1ZxwErs2kUAKAEm3yiVu_DyMfGrdRLJJJ4mV7hLmrxmVzDkXoMSYwF-1KOkVuGS6XD4XnDDnckF9oG5BSu-TDfqp69OvW_hTmKlByfR4-SUsr4lsINyjwltWNzWwv0_P-onymRDyJSvAsi4Ty58m7OlQmjckSJ_EeS1grWC7B8rQ2eHixmKcftaXaf-H-Z9_AahFhDquBgAA.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcyOTE4MzM1OCwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",  // Replace with your access token
      tokenType: 1,  // 1 is for Embed token
      settings: {
        filterPaneEnabled: false,
        navContentPaneEnabled: true,
        layoutType: pbi.models.LayoutType.MobilePortrait
      }
    };


    this.powerBiService.embedReport(this.reportContainer.nativeElement, embedConfig);
  }
}