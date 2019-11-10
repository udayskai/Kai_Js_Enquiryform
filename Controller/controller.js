///<reference path="../lib/jquery-3.4.1.min.js"/>
///<reference path="../Model/studentInfoModel.js"/>


function enquiryForm(){

   



  //Private Method





  //Public Method  $(#inputStudentName)

  // On cancel 
   this.onCancelButton = async function() {
   
    try{ 
         return await new Promise((resolve)=>{
          $("#inputStudentName").val("hey");
          $("#inputEmail").val("");
          $("#inputNumber").val("");
          $("#inputAddress").val("");
          $("#inputOccupation").val("");
          $("#inputQualification").val("");
          $("#inputFramework").val("");
          $("#inputStudent").focus();



           
            return resolve(true);
        })
    
    }


    catch (ex){
      console.log(ex.message);
      console.log(ex.stack);
      }
   } 


}





// enquiry


let enquiryFormobj=new enquiryForm();


function onCancelbtn() {
    let enquiryFormobj= null;
         
    try {
        enquiryFormobj =new enquiryForm();
        enquiryFormobj.onCancelButton().
        then((resolve) => console.log(resolve));  // not unerstand
    }
    catch (ex) {
        console.log(ex.message);
        console.log(ex.stack);


    }
}
onCancelbtn();