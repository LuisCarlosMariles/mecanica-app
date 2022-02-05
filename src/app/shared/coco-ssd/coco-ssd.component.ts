import { Component, OnInit } from '@angular/core';
import * as cocoSsd from '@tensorflow-models/coco-ssd';
import * as tf from "@tensorflow/tfjs";

@Component({
  selector: 'app-coco-ssd',
  templateUrl: './coco-ssd.component.html',
  styleUrls: ['./coco-ssd.component.scss']
})
export class CocoSsdComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    // tf.getBackend();
    // console.log('loading mobilenet model...');
    // cocoSsd.load();
    // console.log('Model loaded succesfully!!!');
  }

}
