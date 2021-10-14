$(function () {
    const szuloElem = $("article");
    const sablonElem = $(".kartya");

    const meret = 3;
    
    const kivalaszottKartyak = [];
    
    for (var index = 0; index < meret; index++) {
        for (let d = 0; d < 2; d++) {
            const ujElem = sablonElem.clone().appendTo(szuloElem);//a meglévő divet lemásolja és alá teszi
            const kartya = new Kartya("kepek/kep" + (index + 1) + ".jpg", ujElem);
        }
    }
    
    sablonElem.remove();
    
    //itt tudjuk számolni hány kártya van felfordítva
    
    $(window).on("kartyaKattint", (event)=>{
        console.log(event.detail);//az aktuális kártya adata, amelyik kiváltotta az eseményt
        kivalaszottKartyak.push(event.detail);
        //akkor van 2 kártya felfordítva, ha a tömb hossza 2
        if (kivalaszottKartyak.length == 2) {
            if (kivalaszottKartyak[0].fileNev == kivalaszottKartyak[1].fileNev) {
                console.log("egyforma");
                //el kell tüntetni a kártyákat
                kivalaszottKartyak[0].eltuntet();
                kivalaszottKartyak[1].eltuntet();
                kivalaszottKartyak.splice(0, 2);
            }else{
                console.log("nem egyforma");
                setTimeout(function(){
                    kivalaszottKartyak[0].visszaValt();
                    kivalaszottKartyak[1].visszaValt();
                    kivalaszottKartyak.splice(0, 2);
                },1000);
            }
            
        }
    });
});