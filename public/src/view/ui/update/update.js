import { counters } from "../../components/counters.js";
import { strings } from "../../../scope/constants/strings.js";
import { Images } from "../images.js";

class Update {
    displayCount;
    cookieCountAdd(nombre=0) {
        count+=nombre;
        if (count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(count / 1000000000); 
            let temp = Math.floor((count % 10000000) / 100000); 
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (count >= 1000000) { // MILLIONS
            let millions = Math.floor(count / 1000000); 
            let temp = Math.floor((count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else if(count<999999){ // BASIC
            this.displayCount = count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
        // save progression !!!!!!!!!!!!!!   
    }
    cookieCountRm(nombre=0) {
        count-=nombre;
        if (count >= 1000000000) { // MILLIARDS
            let millions = Math.floor(count / 1000000000); 
            let temp = Math.floor((count % 10000000) / 100000);
            this.displayCount = millions + "Md" + temp; 
        } 
        else if (count >= 1000000) { // MILLIONS
            let millions = Math.floor(count / 1000000); 
            let temp = Math.floor((count % 1000000) / 10000); 
            this.displayCount = millions + "M" + temp; 
        } 
        else if(count<999999){ // BASIC
            this.displayCount = count; 
        }
        counters.cookie.innerText = this.displayCount;
        counters.title.innerText = this.displayCount + strings.cookieTitleCount;
        // save progression !!!!!!!!!!!!!!   
    }
}

Update.Ui = class {
    background() {
        Images.imageElement.cookieBackground.backgroundColor = '#808080';
        Images.imageElement.boutiqueContainer.background = 'url(./images/stonetxt.jpg)';
        Images.imageElement.cookieBackground.background = 'url(./images/cave.png)';
        Images.imageElement.cookieBackground.backgroundRepeat = 'no-repeat'
        Images.imageElement.cookieBackground.backgroundPosition = 'center',
        Images.imageElement.cookieBackground.backgroundSize = 'cover',
        Images.imageElement.boutiqueContainer.style.background = 'url(./images/stonetxt.jpg)';
    }
    price(){
        
    }

}