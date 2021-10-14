class Kartya{
    constructor(fileNev, elem){
        this.elem = elem;
        this.fileNev = fileNev;
//        console.log(fileNev);
        //ha meg van az img elem, akkor elem.attr("src", fileNev)
        this.kepElem = elem.children("img");//az aktuális div elemünk képeleme
        this.allapot = false;//kezdetben a háttér látszik
        this.hatter = "kepek/hatter.jpg";
//        this.kepElem.attr("src", this.hatter);
        this.setLap();
        this.elem.on("click", ()=>{
//            console.log(this);
            this.visszaValt();
            this.KattintTrigger();//ezzel váltom ki az eseményt
        });
    }
    
    visszaValt(){
        this.allapot =! this.allapot;
        this.setLap();
    }
    
    setLap(){
        if (this.allapot) {
            this.kepElem.attr("src", this.fileNev);
        }else{
            this.kepElem.attr("src", this.hatter);
        }
    }
    
    KattintTrigger(){
//        let esemeny = new Event("kartyaKattint");
        let esemeny = new CustomEvent("kartyaKattint", {detail:this}/*úgy hozzuk létre az esemény, hogy azt is megmondjuk, hogy melyik objektum váltotta ki*/);
        console.log("esemény kiváltása");
        window.dispatchEvent(esemeny);
    }
    
    eltuntet(){
        this.elem.css("visibility", "hidden");
    }
}