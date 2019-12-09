import { Component, OnInit } from '@angular/core';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';

@Component({
  selector: 'app-plan-test-execution',
  templateUrl: './plan-test-execution.component.html',
  styleUrls: ['./plan-test-execution.component.sass']
})
export class PlanTestExecutionComponent implements OnInit {

  constructor(private afs: AngularFirestore) {

  }

  ngOnInit() {
    this.afs.collection('User').valueChanges().subscribe(resUser=>{
      this.userData = resUser;
      this.mergeValue();
    });
    this.afs.collection('TestCase').valueChanges().subscribe(resTC=>{
      this.TCData = resTC;
      this.mergeValue();
    });
    this.afs.collection('TestScript').valueChanges().subscribe(resTS=>{
      this.TSData = resTS;
      this.mergeValue();
    });
    this.afs.collection('TestExecution').valueChanges().subscribe(resTE=>{
      this.TEData = resTE;
      this.mergeValue();
    });
  }

  cycleSelected = "1";
  TCData = null;
  TSData = null;
  TEData = null;
  userData = null;
  mergeData = [];

  selectCycle(selectCycleVal:string){
    this.cycleSelected = selectCycleVal;
  }

  mergeValue(){
    if(this.TCData!=null&&this.TSData!=null&&this.TEData!=null&&this.userData!=null){
      this.mergeData = this.buildData();
      console.log(this.mergeData);
    }
  }

  buildData(){
    var dataMerge = this.TCData;
    for(let i=0; i<dataMerge.length; i++){
      //var listTSTE = [];
      dataMerge[i].Cycle1 = [];
      dataMerge[i].Cycle2 = [];
      dataMerge[i].Cycle3 = [];
      var numAllInCycle1 = 0;
      var numChangeInCycle1 = 0;
      var numAllInCycle2 = 0;
      var numChangeInCycle2 = 0;
      var numAllInCycle3 = 0;
      var numChangeInCycle3 = 0;
      var numStatusCycle1 = 0;
      var numStatusCycle2 = 0;
      var numStatusCycle3 = 0;
      for(let j=0; j<this.TSData.length; j++){
        if(dataMerge[i].idTC==this.TSData[j].idTC){
          for(let n=0; n<this.TEData.length; n++){
            if(this.TSData[j].idTS==this.TEData[n].idTS){
              if (this.TEData[n].Cycle == "1") {
                dataMerge[i].Cycle1.push({
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                });
                if(this.TEData[n].TEStatus!="0"){
                  numChangeInCycle1 = numChangeInCycle1+1;
                  if(numStatusCycle1!=2){
                    if(this.TEData[n].TEStatus=="1"){
                      numStatusCycle1 = 1;
                    }else{
                      numStatusCycle1 = 2;
                    }
                  }
                }
                numAllInCycle1 = numAllInCycle1+1;
                /*
                this.TSData[j].Cycle1 = {
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                }
                */
              } else if (this.TEData[n].Cycle == "2") {
                dataMerge[i].Cycle2.push({
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                });
                if(this.TEData[n].TEStatus!=0){
                  numChangeInCycle2 = numChangeInCycle2+1;
                  if(numStatusCycle2!=2){
                    if(this.TEData[n].TEStatus=="1"){
                      numStatusCycle2 = 1;
                    }else{
                      numStatusCycle2 = 2;
                    }
                  }
                }
                numAllInCycle2 = numAllInCycle2+1;
                /*
                this.TSData[j].Cycle2 = {
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                }
                */
              } else if (this.TEData[n].Cycle == "3") {
                dataMerge[i].Cycle3.push({
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                });
                if(this.TEData[n].TEStatus!=0){
                  numChangeInCycle3 = numChangeInCycle3+1;
                  if(numStatusCycle3!=2){
                    if(this.TEData[n].TEStatus=="1"){
                      numStatusCycle3 = 1;
                    }else{
                      numStatusCycle3 = 2;
                    }
                  }
                }
                numAllInCycle3 = numAllInCycle3+1;
                /*
                this.TSData[j].Cycle3 = {
                  idTE: this.TEData[n].idTE,
                  idTS: this.TEData[n].idTS,
                  TEAdatefrom: this.TEData[n].TEAdatefrom,
                  TEAdateto: this.TEData[n].TEAdateto,
                  TEAssignto: this.TEData[n].TEAssignto,
                  TEStatus: this.TEData[n].TEStatus,
                  TEPdatefrom: this.TEData[n].TEPdatefrom,
                  TEPdateto: this.TEData[n].TEPdateto,
                  Cycle: this.TEData[n].Cycle
                }
                */
              }
            }
          }
          /*
          listTSTE.push(
            this.TSData[j]
          );
          */
        }
      }
      dataMerge[i].percentCycle1 = (100*numChangeInCycle1)/numAllInCycle1;
      dataMerge[i].percentCycle2 = (100*numChangeInCycle2)/numAllInCycle2;
      dataMerge[i].percentCycle3 = (100*numChangeInCycle3)/numAllInCycle3;
      dataMerge[i].statusCycle1 = numStatusCycle1;
      dataMerge[i].statusCycle2 = numStatusCycle2;
      dataMerge[i].statusCycle3 = numStatusCycle3;
      //dataMerge[i].listTSTE = listTSTE;
    }
    /*
    var dataMerge = this.TSData;
    for (let i = 0; i < dataMerge.length; i++) {
      for (let n = 0; n < this.TEData.length; n++) {
        if (this.TEData[n].idTS == dataMerge[i].idTS) {
          if (this.TEData[n].Cycle == 1) {
            dataMerge[i].Cycle1 = {
              idTE: this.TEData[n].idTE,
              idTS: this.TEData[n].idTS,
              TEAdatefrom: this.TEData[n].TEAdatefrom,
              TEAdateto: this.TEData[n].TEAdateto,
              TEAssignto: this.TEData[n].TEAssignto,
              TEStatus: this.TEData[n].TEStatus,
              Cycle: this.TEData[n].Cycle
            }
          } else if (this.TEData[n].Cycle == 2) {
            dataMerge[i].Cycle2 = {
              idTE: this.TEData[n].idTE,
              idTS: this.TEData[n].idTS,
              TEAdatefrom: this.TEData[n].TEAdatefrom,
              TEAdateto: this.TEData[n].TEAdateto,
              TEAssignto: this.TEData[n].TEAssignto,
              TEStatus: this.TEData[n].TEStatus,
              Cycle: this.TEData[n].Cycle
            }
          } else if (this.TEData[n].Cycle == 3) {
            dataMerge[i].Cycle3 = {
              idTE: this.TEData[n].idTE,
              idTS: this.TEData[n].idTS,
              TEAdatefrom: this.TEData[n].TEAdatefrom,
              TEAdateto: this.TEData[n].TEAdateto,
              TEAssignto: this.TEData[n].TEAssignto,
              TEStatus: this.TEData[n].TEStatus,
              Cycle: this.TEData[n].Cycle,
            }
          }
        }
      }
      for (let j = 0; j < this.TCData.length; j++) {
        if (dataMerge[i].idTC == this.TCData[j].idTC) {
          dataMerge[i].TCID = this.TCData[j].TCID;
          dataMerge[i].TCDes = this.TCData[j].TCDes;
        }
      }
    }
    */
    return dataMerge.sort(this.compareTCID);;
  }

  compareTCID(a, b) {
    if (a.TCID < b.TCID) {
      return -1;
    }
    if (a.TCID > b.TCID) {
      return 1;
    }
    return 0;
  }

  getListTEInCycle(selectTCID:string){
    for(let i=0; i<this.mergeData.length; i++){
      if(this.mergeData[i].idTC == selectTCID){
        var listIDTE = [];
        var listTEInCycle = [];
        if(this.cycleSelected=="1"){
          listTEInCycle = this.mergeData[i].Cycle1;
        }else if(this.cycleSelected=="2"){
          listTEInCycle = this.mergeData[i].Cycle2;
        }else{
          listTEInCycle = this.mergeData[i].Cycle3;
        }
        for(let j=0; j<listTEInCycle.length; j++){
          listIDTE.push(listTEInCycle[j].idTE);
        }
        return listIDTE;
      }
    }
  }

  selectAssignto(selectTCID:string,selectAssignID:string){
    if(selectAssignID!==""){
      var listIDTE = this.getListTEInCycle(selectTCID);
      for(let i=0; i<listIDTE.length; i++){
        this.afs.doc('TestExecution/'+listIDTE[i]).update({TEAssignto:selectAssignID});
      }
    }
  }

  selectPDateFrom(selectTCID:string,selectPDateFrom){
    if(selectPDateFrom!==""){
      var listIDTE = this.getListTEInCycle(selectTCID);
      for(let i=0; i<listIDTE.length; i++){
        this.afs.doc('TestExecution/'+listIDTE[i]).update({TEPdatefrom:selectPDateFrom});
      }
    }
  }

  selectPDateTo(selectTCID:string,selectPDateTo){
    if(selectPDateTo!==""){
      var listIDTE = this.getListTEInCycle(selectTCID);
      for(let i=0; i<listIDTE.length; i++){
        this.afs.doc('TestExecution/'+listIDTE[i]).update({TEPdateto:selectPDateTo});
      }
    }
  }

  selectADateFrom(selectTCID:string,selectADateFrom){
    if(selectADateFrom!==""){
      var listIDTE = this.getListTEInCycle(selectTCID);
      for(let i=0; i<listIDTE.length; i++){
        this.afs.doc('TestExecution/'+listIDTE[i]).update({TEAdatefrom:selectADateFrom});
      }
    }
  }

  selectADateTo(selectTCID:string,selectADateTo){
    if(selectADateTo!==""){
      var listIDTE = this.getListTEInCycle(selectTCID);
      for(let i=0; i<listIDTE.length; i++){
        this.afs.doc('TestExecution/'+listIDTE[i]).update({TEAdateto:selectADateTo});
      }
    }
  }

}
