import { Component, OnInit } from '@angular/core';
import { getImage, setBaseUrl } from "@imagindeveloper/carcloudaccess";

@Component({ selector: 'app', templateUrl: 'app.component.html' })
export class AppComponent implements OnInit {
    imageUrl: string;

    ngOnInit() {
        this.run();
    }

    async run() {
        setBaseUrl('https://lpl.imagin.studio');

        const imgParams = {
            make: 'Alfa Romeo',
            model: 'Giulia',
            angle: '01',
            filetype: 'jpg',
            compare: 'original',
            width: '1200',
            tailoring: 'leaseplan',
            dome: 'opq',
            steering: 'lhd',
            modelyear: '2018',
            transmission: 'a',
            bodyvariant: '5',
            bodysize: '',
            interior: '433',
            trim: 'super',
            bodycolor: '414',
            roofcolor: '414',
            rimid: '68p'
        };

        const imageData = <{ url: string; }>await getImage(imgParams);
        this.imageUrl = imageData.url;
        console.log('ASDFAS', this.imageUrl);
    }
}
