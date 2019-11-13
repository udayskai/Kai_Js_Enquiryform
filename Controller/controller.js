///<reference path="../lib/jquery-3.4.1.min.js"/>
///<reference path="../Model/studentInfoModel.js"/>
///<reference path ="../Model/studentContactModel.js"/>
///<reference path ="../Model/studentEducationInfoModel.js"/>
///<reference path ="../Model/studentCoursesModel.js"/>



function enquiryForm(studentMain){

    let studentMainobj=studentMain;

 
//    //Private Method

   let getUserData=  function(){

    try {

        

          studentMainobj.studentInfoModel.studentName=$("#inputStudentName").val(); 
          // binding into data to modelobj
          studentMainobj.studentInfoModel.StudentEmail=$("#inputEmail").val();

          // data from contact model
          studentMainobj.studentContactModel.studentNumber=$("#inputNumber").val();
          studentMainobj.studentContactModel.studentAddress=$("#inputAddress").val();

           // data from student Education
           studentMainobj.studentEducationInfo.occupation=$("#inputOccupation").val();
           studentMainobj.studentEducationInfo.qualification=$("#inputQualifiaction").val();
        }

 
    
    catch (ex) {

         throw ex;
    }
 } 

   





//   Public Method  $(#inputStudentName)
// on Submit 

     this.onSubmit=function(){
       
     
            getUserData();
   }




  // On cancel 
   this.onCancelButton = function(){
   
    
         
          $("#inputStudentName").val("Try Again");
          $("#inputEmail").val("");
          $("#inputNumber").val("");
          $("#inputAddress").val("");
          $("#inputOccupation").val("");
          $("#inputQualification").val("");
          $("#inputFramework").val("");
          $("#inputStudent").focus();
        }
}
// enquir class end ###############################################################################################



// CLAINGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGGG
function onSubmitbtn() {


    let enquiryFormobj= null;
    let  studentMainobj=null;
    let studentInfoModelobj= null;
    let studentEducationInfoobj= null;
    let studentContactModeobj= null;


    try {
       
        studentMainobj=new  studentMain();//main model
         
        studentInfoModelobj=new studentInfoModel();
        studentEducationInfoobj= new studentEducationInfo();
        studentContactModelobj= new studentContactModel();


        studentMainobj.studentInfoModel=studentInfoModelobj;
        studentMainobj.studentEducationInfo=studentEducationInfoobj;
        studentMainobj.studentContactModel=studentContactModelobj;


        enquiryFormobj =new enquiryForm(studentMainobj);
        enquiryFormobj.onSubmit();
         
       }

    catch (ex) {
        console.log(ex.message);
        console.log(ex.stack);
      };
}



//CALINGGGGGGGGGGGGGGGGGGGGGGGGG
function onCancelbtn() {
    let enquiryFormobj= null;

         
    
        enquiryFormobj =new enquiryForm();
        enquiryFormobj.onCancelButton();   
}
