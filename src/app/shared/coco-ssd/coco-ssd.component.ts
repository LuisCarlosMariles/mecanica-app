import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from "@tensorflow/tfjs";
import { model } from '@tensorflow/tfjs';
import { Observable } from 'rxjs';
import { ImagesFirebaseService } from 'src/app/data-services/images-firebase.service';
import { initConsoleLogImg } from 'console-log-img';

@Component({
  selector: 'app-coco-ssd',
  templateUrl: './coco-ssd.component.html',
  styleUrls: ['./coco-ssd.component.scss']
})
export class CocoSsdComponent implements OnInit {

  constructor(
    public _imagesService: ImagesFirebaseService,

  ) {
    this.image = this._imagesService.getImages()
  }

  ngOnInit(): void {
    tf.getBackend();
    console.log('loading mobilenet model...');
    cocoSsd.load();
    console.log('Model loaded succesfully!!!');
    initConsoleLogImg({
      // Optionally, disable image dimensions logging (enabled by default)
      printDimension: true,
    });
    // this.firebaseImages();
    // this.predict();
    this.imageData();
  }

  public image: Observable<string>;
  public images = []

  public BASE64_MARKER = ';base64,';
  // base64Converter(dataURI) {
  //   let base64Index = dataURI.indexOf(this.BASE64_MARKER) + this.BASE64_MARKER.length;
  //   let base64 = dataURI.substring(base64Index);
  //   let raw = window.atob(base64);
  //   let rawLength = raw.length;
  //   let array = new Uint8ClampedArray(new ArrayBuffer(rawLength));
  //   let i;
  //   for (i = 0; i < rawLength; i++) {
  //     array[i] = raw.charCodeAt(i);
  //   }
  //   // console.log(array);
  //   return array;
  // }


  // firebaseImages() {
  //   this._imagesService.getImages().subscribe(
  //     data => {
  //       // this.spinnerLoading = false;
  //       const images = data[0];
  //       let convertedImages = this.base64Converter(images);
  //       // console.log(this.images);
  //       setTimeout(async () => {
  //         console.log(images);
  //         const imgEl = this.imageEl.nativeElement;
  //         cocoSsd.load().then(model => {
  //           // detect objects in the image.
  //           const imageData = new ImageData(convertedImages, 720, 720)//ImageData>images[0]
  //           model.detect(imageData).then(predictions => {
  //             this.predictedClasses = predictions;
  //             let onlyClasses = predictions.filter(predictions => predictions.class =='person').length;
  //             console.log('Predictions: ', onlyClasses);
  //           });
  //         });

  //       }, 0);
  //     }
  //   );
  // }

  public imageSrc: string | undefined;

  @ViewChild('img') public imageEl: ElementRef;

  // async predict(): Promise<void>{
  //   // this.firebaseImages();
  //   setTimeout(async () => {
  //     console.log(this.images);
  //     // const imgEl = this.imageEl.nativeElement;
  //     cocoSsd.load().then(model => {
  //       // detect objects in the image.
  //       const imageData = <ImageData>this.images[0]
  //       model.detect(imageData).then(predictions => {
  //         this.predictedClasses = predictions;
  //         let onlyClasses = predictions.filter(predictions => predictions.class =='person').length;
  //         console.log('Predictions: ', onlyClasses);
  //       });
  //     });

  //   }, 0);

  // }


  public predictedClasses: Array<any>;
 public async fileChangeEvent(event): Promise<void> {
    if (event.target.files && event.target.files[0]) {
      console.log(event.target.files[0]);
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      reader.onload = (res: any) => {
        this.imageSrc = res.target.result;
        console.log(this.imageSrc);
        setTimeout(async () => {
          const imgEl = this.imageEl.nativeElement;
        console.log(imgEl);
          cocoSsd.load().then(model => {
            // detect objects in the image.
            model.detect(imgEl).then(predictions => {
              
              this.predictedClasses = predictions;
              console.log('Predictions: ', predictions);
            });
          });

        }, 0);
      };
    }
  }

  imageData(){
    this._imagesService.getImages().subscribe(data => {
      let image = new Image;
      
      console.log(data)
 
      let tfImage = document.createElement('img'); //crea un elemento de tipo img que no se muestra en el DOM pero que existe para tener un elemento de tipo
      //HTMLImageElement que sera ingresado en el api de cocoSsd

      tfImage.src = data[0];
      console.log(tfImage);

      cocoSsd.load().then(model => {
        model.detect(tfImage).then(predictions =>{
          console.log(predictions);
        });
      }).catch(error => {
        console.log(error);
      });

    });

  }

}
