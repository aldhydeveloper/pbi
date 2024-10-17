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
      accessToken: "H4sIAAAAAAAEACWUxw6saBaD3-VuGQl-MiP1glTkVGR2FDlnKGjNu0-pe28dS9-x_fcfO737Kc3__PcP9i6mlTj0rTgOTFSGAh9Wm_twmZaF2QeqpoY4CO2ANlLui3BvI9jL34ZUHKGEmD617bRM40IchcfpK8_zYQoADIRlck4P4a1KymrdN0lnhO4srEQLv5eZmw4aHpIj1ZYpW2JDhLUWnTQ9dHk8ZWu_w3KEfLBxctrQjO9C57ooKgS4429hR3JVc2T0fBJqV0e6xXYvCY0trZomxQzjEzwXqPrKF17RXI0En5G09eHWZx5Nf1qhxwU37BluzWheeXH3l1VvzUMaJM5giDzpOS2k1iWAuZLRK_zO7hu6JXchUj84S0femDgMr6CUNEIOLkr_IPRutWKNQxH83b3yjSc2rnKvVCj5Zo2XvC-uuLTZ0jsw4CLgxdaSWbn146VZ1ZMJgmPsjIgv2OeFk1LeqisFSEKFMb-OhN2JOJZ8rB6RgXb3jey1-rdGTukgq2_nhYdTB3cEdGr5eaZfTDgHl8-aM4T3yUbkW4pfDoeTOJM0QK_oDoRn62mp62ekwbEnXYofqLug1apMXAxfx7uEcjKjj-b3BPeLOy_-dEfOoEjP2jXP3KC-aI3clxmcrpkCrybDAi4ovpbi78qxY92O3N7AVbdL-n6IbNol4vu2cYTB2laCasQq8EH2sihylrEbhwkXIV8pUb-7qLifemD47viyV1t5sWqLKoRcZf5ZdXCBbCTebSemuuoik-8rSFqoHOYJuBJQ1njy9UftWEIUo3O4Yb51BWj_YI1yIsH7FnvbgAKMsOZzjY1ExuTkdqCsjznLmvUeYpZhLsRrtbhF_bxWhIdFOXJgzb556wqVa4wi8wk-IJB6MP-Stxh7H0DCNOrycGMocpP7TFcEb9ezTnCZP6K9-L5vhEebwKafdIP29V094KX0d0ReKws6kAydpOR1DAps5Q6Z_GDfqIng97gVTkykvaUPy4gvZMWiBh5vZhkRn6r7689__vDrPe-TVty_6tZ29ChJ8zzoaO5DpBoUkxjEvGZn4akJOyZalWCjVLi9OUVqmV6t-W0zcFEw85iTa0bkDu8HGducVLKbYsMMf_Xou-SQvURIWzi2BHA_6JvhlSi6mFNudID_XZEd_F4s1FYwIoKWV4XLaGveg8CbAGm-klFxTvplR9LT8UZHyrsLqUMI85fM0t040cFK-5CweSIV1muP7bF6r2p3upryBTO76lkG4cjFH-wMOH0_VQrUX_gWNFc71WzKTi8jWDU1ClFb9U9Xz5LZW7WAssYp6NmbkQMmKRgx6PptQPMnaqFDHS_Dl_tFMyz0zms1sO7cEbK2eFKF_ZYEcYyTDMDUynL11z-Y77kuViX4URaEkZd1lYoVRWxh4LWU1b__VblNNab7sRY_mQdP_YzZQTokr2Khki8_Y2Rz7jKemGeRTbj4Ku76A3b76AMlSZFVWHCQ2oUAKgFZ1EVNf9u5l0WZW6njYlXMVCmAF9f39qWXXWzmYahXlCFNsnNyi_XoLXzU1J7YzZx6uBASGS8Z3J7jSlLQttY7jA1NVhIiVYeuHF6b-lY9UJBvZ1jTBl8icF2hNp6lxiY4VaOVfIEekdCe_OGk_lPK1xChlW7yb8Osp1BzpYi6sH1FyV8QlpDfMvj8LX6Izifk4k8YsAcDZ4LhQosjIrWf4p2AGW_Y77tELQtUqSPoZJgq50dfprFIFMuJE1I9JntMWkAuaCRMr3ctYy4b2K0yLMD5Yf7f_wGkxF1SrgYAAA==.eyJjbHVzdGVyVXJsIjoiaHR0cHM6Ly9XQUJJLVNPVVRILUVBU1QtQVNJQS1yZWRpcmVjdC5hbmFseXNpcy53aW5kb3dzLm5ldCIsImV4cCI6MTcyOTE1NDczMSwiYWxsb3dBY2Nlc3NPdmVyUHVibGljSW50ZXJuZXQiOnRydWV9",  // Replace with your access token
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