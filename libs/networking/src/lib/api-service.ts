import {HttpClient} from "@angular/common/http";
import {HttpHeaders} from "@angular/common/http"
import {Injectable} from "@angular/core";
import {Client} from "@kleapp/entity";
import {ParamDao,ClientDao} from "@kleapp/storage";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor (private http:HttpClient,
               private clientDao:ClientDao
  ){}
  public getAllSensor(): void {
    const headers = new HttpHeaders({
      Authorization: 'Basic ' + btoa("projet:freyr")
    });

    let sensor:Array<Client>
    console.log(this.http.get<Array<Client>>("https://"+ParamDao.ip+"/clientes",{headers:headers})
      .subscribe(
        (read=>{
            sensor=read
            sensor.forEach(current=>{
              this.clientDao.add(new Client(
                current.id,
                current.cadastro,
                current.name)
              )
              console.log(sensor)
            })
          }
        )
      ));
  }
}
