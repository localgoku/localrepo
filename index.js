class rectangle {
    constructor(w,h,c){
        this.w =w;
        this.h = h;
        this .c = c;

    }

    area (){
        const area = this.w* this.h;
        return area;

    }
}

const rect = new rectangle(2,4);
const a = rect.area();
console.log (a);