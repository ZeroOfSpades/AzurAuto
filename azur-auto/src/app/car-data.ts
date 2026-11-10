import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})

export class CarData {
  cars: string[] = [
    "{\"name\":\"Toadstool Trabant\",\"year\":2026,\"month\":6,\"day\":16,\"img\":\"./assets/images/trabant.png\"}",
    "{\"name\":\"Hybrid Zeppelin\",\"year\":2018,\"month\":11,\"day\":13,\"img\":\"./assets/images/zeppelin.png\"}",
    "{\"name\":\"Old Wheeler\",\"year\":2015,\"month\":8,\"day\":7,\"img\":\"./assets/images/wheeler.png\"}"
  ];
}
