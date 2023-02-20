import {Injectable} from "@angular/core";
import {Client} from "@kleapp/entity";

@Injectable({
  providedIn: 'root'
})
export class ClientDao {
  private static SensorList:Client[]=[]

  public getById(id:number):Client|undefined{
    return ClientDao.SensorList.filter(current => current.id == id)[0]
  }

  public checkById(id:number):boolean{
    return !!ClientDao.SensorList.filter(current => current.id == id).length
  }

  public add(sensor:Client){
    if(!this.checkById(sensor.id))
      ClientDao.SensorList.push(sensor)
  }

  public returnArray(){
    return ClientDao.SensorList
  }

  public getListId(){
    return ClientDao.SensorList.map(sensor => sensor.id)
  }

  public size():number{
    return ClientDao.SensorList.length
  }

  public deleteAll(){
    ClientDao.SensorList=[]
  }

}
