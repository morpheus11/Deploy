class ClassElementForCheck{


    typeOfElementCheck(elemenForCheck,textForInfo,backgroundColor){
        this.r = document.getElementById(elemenForCheck);
        if(this.r.type == 'select-one'){
            console.log(this.r.type)
            this.r.options[0].text = textForInfo;
            this.r.style.backgroundColor = backgroundColor;                     
        };
        if(this.r.type == 'textarea'){
            console.log(this.r.type)
            this.r.text = textForInfo;
            this.r.style.backgroundColor = backgroundColor;
        }
        
        
    }
}