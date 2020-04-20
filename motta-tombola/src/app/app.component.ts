import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'motta-tombola';
  numeriUsciti: Array<number>=[]
  ultimoNumero:string= "...";
  generaNumero(){
    var check=false;
    while(check==false){
      var numero= Math.round(Math.random()*99+1);
      check=true;
      for (var i=0; i< this.numeriUsciti.length; i++){
        if (numero==this.numeriUsciti[i]){
          check=false;
        }
      }
      if (check){
        this.numeriUsciti.push(numero);
        console.log(numero);
        var riga=document.getElementById("visuaNumero");
        riga.innerHTML=""+numero;
        this.ultimoNumero=""+numero;
        if (this.numeriUsciti.length==100){
          console.log("Numeri terminati");
          var bottone= document.getElementById("bottone");
          bottone.setAttribute("disabled","disabled");
          alert("I numeri sono stati estratti tutti");
          return false;
        }
      }
    }
    return false;
  }
}
