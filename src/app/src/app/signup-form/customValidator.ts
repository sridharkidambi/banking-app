import { AbstractControl, ValidationErrors } from '@angular/forms';
import { reject } from 'q';

export class CustomValidator{

   static noSpaceValidator(control:AbstractControl): ValidationErrors | null {
        if((control.value as string).indexOf(' ') >=0){
            return {nospacevalidator: true}
        }
        return null;
    }


    static checkifavailable(control:AbstractControl):Promise< ValidationErrors | null> {
        return new Promise((resolve,reject)=>{

            setTimeout(()=>{
                if(control.value === "sksk"){
               resolve({checkifavailable: true})
                  }else{
                    resolve(null)
                  }

        })
   
        // return null;
    });
}

}