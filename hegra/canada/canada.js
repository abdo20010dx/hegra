function openNav() {
    document.getElementById("mySidepanel").style.width = "230px";
    }// this method when open sidepanel
    
    function closeNav() {
    document.getElementById("mySidepanel").style.width = "0px";
    }// this method when close sidepanel


    			//this the documents of score calculator
                var score=document.getElementById("score"); //i will print user's points in score
                var mybutton=document.getElementById("calculate");//when user click get points
                let age=document.getElementsByName("age");
                let education=document.getElementsByName("education");
                let date=document.getElementById("date");
                let situation=document.getElementsByName("situation");
                let status=document.getElementsByName("status");
                let experience=document.getElementsByName("experience");
                let foreignwork=document.getElementsByName("foreignwork");
                //the following variables used for clb(first language)
                let reading=document.getElementsByName("reading");
                let writing=document.getElementsByName("writing");
                let speaking=document.getElementsByName("speaking");
                let listening=document.getElementsByName("listening");
                let ability1=document.getElementsByClassName("ability1");
                let down=document.getElementsByName("down");                
                //the following variables used for clb(second language)
                let reading1=document.getElementsByName("reading1");
                let writing1=document.getElementsByName("writing1");
                let speaking1=document.getElementsByName("speaking1");
                let listening1=document.getElementsByName("listening1");
                let ability2=document.getElementsByClassName("ability2");
                let down1=document.getElementsByName("down1");                

                //partner variables
                             //partner language
                let readingpartner=document.getElementsByName("readingpartner");
                let writingpartner=document.getElementsByName("writingpartner");
                let speakingpartner=document.getElementsByName("speakingpartner");
                let listeningpartner=document.getElementsByName("listeningpartner");
                        //partner education
                let education2=document.getElementsByName("education2");
                       //partner canadian work experience
                let experience2=document.getElementsByName("experience2");
                let ability3=document.getElementsByClassName("ability3");
                let down2=document.getElementsByName("down2");                





                let tradeoccu=document.getElementsByName("tradeoccu");
                let addpts=document.getElementsByName("addpts");

                function sit(){
                    //here i check if partner will put the feet on canada floor
                    if(radiovalue(situation) ==1/*that's mean partner will come with me to canada*/){return 2}else{return 1/*else or other consider not married for points*/}
                }

                function year(){
                    //this function is used to know the age
                    radiostatus=sit();
                    let d=new Date(date.value); // i put value date from element in date,that's consider date of birth 
                    let current=new Date(); // this current date for now 
                    let agepoints=0;//this value i use in score after i check
                    let parset=current-d;//for substract user date birth from current date
                    let age=new Date(parset).getFullYear()-1970; // here i get age by number of years
                    if(age <= 17 ){
                        return agepoints=0
                    }else if(age == 18){
                        if(radiostatus == 2){agepoints=90;}//if not married
                        if(radiostatus == 1){agepoints=99;}//if married
                    }else if(age == 19){
                        if(radiostatus == 2){agepoints=95;}//and so on
                        if(radiostatus == 1){agepoints=105;}//and so on

                    }else if(age >=20 && age <=29){
                        if(radiostatus == 2){agepoints=100;}
                        if(radiostatus == 1){agepoints=110;}

                    }else if(age == 30){
                        if(radiostatus == 2){agepoints=95;}
                        if(radiostatus == 1){agepoints=105;}

                    }else if(age == 31){
                        if(radiostatus == 2){agepoints=90;}
                        if(radiostatus == 1){agepoints=99;}
                    }else if(age == 32){
                        if(radiostatus == 2){agepoints=85;}
                        if(radiostatus == 1){agepoints=94;}
                    }else if(age == 33){
                        if(radiostatus == 2){agepoints=80;}
                        if(radiostatus == 1){agepoints=88;}
                    }else if(age == 34){
                        if(radiostatus == 2){agepoints=75;}
                        if(radiostatus == 1){agepoints=83;}
                    }else if(age == 35){
                        if(radiostatus == 2){agepoints=70;}
                        if(radiostatus == 1){agepoints=77;}
                    }else if(age == 36){
                        if(radiostatus == 2){agepoints=65;}
                        if(radiostatus == 1){agepoints=72;}
                    }else if(age == 37){
                        if(radiostatus == 2){agepoints=60;}
                        if(radiostatus == 1){agepoints=66;}
                    }else if(age == 38){
                        if(radiostatus == 2){agepoints=55;}
                        if(radiostatus == 1){agepoints=61;}
                    }else if(age == 39){
                        if(radiostatus == 2){agepoints=50;}
                        if(radiostatus == 1){agepoints=55;}
                    }else if(age == 40){
                        if(radiostatus == 2){agepoints=45;}
                        if(radiostatus == 1){agepoints=50;}
                    }else if(age == 41){
                        if(radiostatus == 2){agepoints=35;}
                        if(radiostatus == 1){agepoints=39;}
                    }else if(age == 42){
                        if(radiostatus == 2){agepoints=25;}
                        if(radiostatus == 1){agepoints=28;}
                    }else if(age == 43){
                        if(radiostatus == 2){agepoints=15;}
                        if(radiostatus == 1){agepoints=17;}
                    }else if(age == 44){
                        if(radiostatus == 2){agepoints=5;}
                        if(radiostatus == 1){agepoints=6;}
                    }else if(age >= 45){
                        if(radiostatus == 2){return agepoints=0;}
                        if(radiostatus == 1){return agepoints=0;}
                    }
                    return agepoints;

                }

                //this method used to give points for user depending on education by getting from him selected radio value from user
                function edu(){
                    radiostatus=sit();
                    let edupoints=0;
                    if(radiovalue(education) == 1){
                        return edupoints=0;
                    }else if(radiovalue(education)==2){
                        if(radiostatus == 2){edupoints=28;}
                        if(radiostatus == 1){edupoints=30}
                    }else if(radiovalue(education)==3){
                        if(radiostatus == 2){edupoints=84;}
                        if(radiostatus == 1){edupoints=90}
                    }else if(radiovalue(education)==4){
                        if(radiostatus == 2){edupoints=91;}
                        if(radiostatus == 1){edupoints=98}
                    }else if(radiovalue(education)==5){
                        if(radiostatus == 2){edupoints=112;}
                        if(radiostatus == 1){edupoints=120}
                    }else if(radiovalue(education)==6){
                        if(radiostatus == 2){edupoints=119;}
                        if(radiostatus == 1){edupoints=128}
                    }else if(radiovalue(education)==7){
                        if(radiostatus == 2){edupoints=126;}
                        if(radiostatus == 1){edupoints=135}
                    }else if(radiovalue(education)==8){
                        if(radiostatus == 2){edupoints=140;}
                        if(radiostatus == 1){edupoints=150}
                    }
                    return edupoints;
                }





                //this the ability of fisrt official language one of this(reading,writing,speaking,listening)
                function lang1(firstofficial){
                    radiostatus=sit();
                    let lang1points=0;
                    if(radiovalue(firstofficial) == 1){
                        return lang1points=0;
                    }else if(radiovalue(firstofficial)==2 || radiovalue(firstofficial)==3 ){
                        if(radiostatus == 2){lang1points=6;}
                        if(radiostatus == 1){lang1points=6}
                    }else if(radiovalue(firstofficial)==4){
                        if(radiostatus == 2){lang1points=8;}
                        if(radiostatus == 1){lang1points=9}
                    }else if(radiovalue(firstofficial)==5){
                        if(radiostatus == 2){lang1points=16;}
                        if(radiostatus == 1){lang1points=17}
                    }else if(radiovalue(firstofficial)==6){
                        if(radiostatus == 2){lang1points=22;}
                        if(radiostatus == 1){lang1points=23}
                    }else if(radiovalue(firstofficial)==7){
                        if(radiostatus == 2){lang1points=29;}
                        if(radiostatus == 1){lang1points=31}
                    }else if(radiovalue(firstofficial)==8){
                        if(radiostatus == 2){lang1points=32;}
                        if(radiostatus == 1){lang1points=34}
                    }
                    return lang1points;
                }



                //this the ability of second official language one of this(reading,writing,speaking,listening)
                function lang2(secondofficial){
                    radiostatus=sit();
                    let lang2points=0;
                    if(radiovalue(secondofficial) == 1){
                        return lang2points=0;
                    }else if(radiovalue(secondofficial)==2){
                        if(radiostatus == 2){lang2points=1;}
                        if(radiostatus == 1){lang2points=1}
                    }else if(radiovalue(secondofficial)==3){
                        if(radiostatus == 2){lang2points=3;}
                        if(radiostatus == 1){lang2points=3}
                    }else if(radiovalue(secondofficial)==4){
                        if(radiostatus == 2){lang2points=6;}
                        if(radiostatus == 1){lang2points=6}
                    }
                    return lang2points;
                }

                //this method to give points for user depending on education and language abilities  
                function eduwithlang(){
                    let edulang=0;
                    if(16 <= lang1(reading)&&lang1(reading) <29 && 16 <= lang1(writing)&&lang1(writing) <29 && 16 <= lang1(speaking)&&lang1(speaking) <29 && 16 <= lang1(listening)&&lang1(listening) <29){
                        if(0<= edu()&&edu() <= 30){edulang = 0;} 
                        if(84 <= edu()&&edu() <= 118){edulang=13;}
                        if(edu() == 119 ){ edulang = 25;}

                    }else if(lang1(reading) >= 29&& lang1(writing) >=29&& lang1(listening) >=29&& lang1(speaking) >=29){
                        if(0<= edu()&&edu() <= 30){edulang = 0;}
                         if(84 <= edu()&&edu() <= 118 || edu() == 120 ){edulang=25;}
                         if(edu() == 119 || edu() >= 128 ){edulang = 50;}

                    }

                    return edulang;
                }


                //this method to give points for user depending on education and years of experience  
                function eduwithexper(){
                    let eduexper=0;
                    if(exper() <= 40){
                        if(0<= edu()&&edu() <= 30){eduexper = 0;} 
                        if(84 <= edu()&&edu() <= 118){eduexper=13;}
                        if(edu() == 119 ){ eduexper = 25;}

                    }else if(exper() >= 46){
                        if(0<= edu()&&edu() <= 30){eduexper = 0;}
                         if(84 <= edu()&&edu() <= 118 || edu() == 120 ){eduexper=25;}
                         if(edu() == 119 || edu() >= 128 ){eduexper = 50;}

                    }

                    return eduexper;
                }



                //this method i used to get value of foreign work years with user's language ability
                function foreignwithlang(){
                    let foreignlang=0;//this points
                    //this if user's language ability begin from clb7
                    if(16 <= lang1(reading)&&lang1(reading) <29 && 16 <= lang1(writing)&&lang1(writing) <29 && 16 <= lang1(speaking)&&lang1(speaking) <29 && 16 <= lang1(listening)&&lang1(listening) <29){
                        if(radiovalue(foreignwork)==2){foreignlang=13;}//know years and give user points of this case
                        if(radiovalue(foreignwork)==3){ foreignlang = 25;}// and so on
                    //this if user's language ability begin from clb9
                    }else if(lang1(reading) >= 29&& lang1(writing) >=29&& lang1(listening) >=29&& lang1(speaking) >=29){
                         if(radiovalue(foreignwork)==2){foreignlang=25;}//know years and give user points of this case
                         if(radiovalue(foreignwork)==3){foreignlang = 50;}//and so on

                    }

                    return foreignlang;
                }

                //this method to get the value if have certificate
                function certificatetrade(){
                    let certquali=0;
                    //i check user's language ability from clb5
                    if(3<= radiovalue(reading)&&radiovalue(reading) <=4 && 3<= radiovalue(writing)&&radiovalue(writing) <=4 && 3<= radiovalue(speaking)&&radiovalue(speaking) <=4 && 3<= radiovalue(listening)&&radiovalue(listening) <=4){
                        //check i user realy have certificate
                        if(radiovalue(tradeoccu)==2){ certquali = 25;}
                     //and so on with higher clb7
                    }else if(5<= radiovalue(reading)&&5<= radiovalue(writing)&&5<= radiovalue(listening)&&5<= radiovalue(speaking)){
                         if(radiovalue(tradeoccu)==2){certquali = 50;}

                    }

                    return certquali;
                }








                
                //this method used to get value of user's experience
                function exper(){
                    radiostatus=sit();
                    let experpoints=0;
                    if(radiovalue(experience) == 1){
                        return experpoints=0;
                    }else if(radiovalue(experience)==2){
                        if(radiostatus == 2){experpoints=35;}
                        if(radiostatus == 1){experpoints=40}
                    }else if(radiovalue(experience)==3){
                        if(radiostatus == 2){experpoints=46;}
                        if(radiostatus == 1){experpoints=53}
                    }else if(radiovalue(experience)==4){
                        if(radiostatus == 2){experpoints=56;}
                        if(radiostatus == 1){experpoints=64}
                    }else if(radiovalue(experience)==5){
                        if(radiostatus == 2){experpoints=63;}
                        if(radiostatus == 1){experpoints=72}
                    }else if(radiovalue(experience)==6){
                        if(radiostatus == 2){experpoints=70;}
                        if(radiostatus == 1){experpoints=80}
                    }
                    return experpoints;
                }





            //this method used to get the chosen value of radio from user
            function radiovalue(radioindex){
            for(i=0;i<radioindex.length;i++){
              var chosengender;
                if(radioindex[i].checked){
                chosengender=radioindex[i].value;
                return +chosengender;
            }
            }
                }
                //this method used to get the chosen value of checkbox(additional points) from user
                function checkboxvalue(checkboxindex){
                    var chosenvalue=0;

                    for(i=0;i<checkboxindex.length;i++){
                        if(checkboxindex[i].checked){
                            chosenvalue+=Number(checkboxindex[i].value) ;
                    }
                    }
                    //here if chosen value more than maximum
                    if(chosenvalue>600){chosenvalue=600}
                    return chosenvalue;
                        }
        


                //this method i made to sum second official language
                function lang2sum(read,speak,write,listen){
                    let sum=read+speak+write+listen;
                    //here if sum more than maximum
                    if(sum > 22){sum=22;}
                    return sum;
                }
                // this method used to get the sum of partner quesstions
                function partnersum(){
                    let partsum=radiovalue(education2)+radiovalue(readingpartner)+radiovalue(writingpartner)+radiovalue(speakingpartner)+radiovalue(listeningpartner)+radiovalue(experience2);
                    if(sit()==1){partsum=0}
                    return partsum;
                }
            //this button used to show the sum of radio values
            calculate.onclick=function myscore(){
                mysum=/*here i started to sum*/  checkboxvalue(addpts)+partnersum()+certificatetrade()+eduwithexper()+year()+edu()+exper()+(lang1(reading)+lang1(speaking)+lang1(listening)+lang1(writing))+lang2sum(lang2(reading1),lang2(listening1),lang2(writing1),lang2(speaking1))+eduwithlang();
                if(isNaN(mysum)){
                   score.textContent="please mark on all answers to get your score";
                   }else{
                score.textContent="Dear Candidate your Score is: "+mysum;
                   }
            }
            
    
    let next = document.getElementById("next");
    let prev = document.getElementById("prev");
    let count = "1";
    let skip;
    let myform=document.getElementsByTagName('form');
    function next1(){
        if(document.getElementsByTagName("form").length >count){
            count++;//prepare the counter to use it as id
            if(count == 3 && radiovalue(status) == 1){
                skip = 1;/*here i skip quesstion of case married if user not married*/
            }else if(count == 3 && typeof(radiovalue(status)) == 'undefined'){
                skip =1;/*i skip question related to status if user didn't choose social status*/
    
            }else if(count == 12&& sit() == 1){
                skip=3;/*i skip quesstion of partner when user is single*/
            }else{skip = 0;}
        
        }
        //this when skip happen
        count+=skip;
        //this if condition to don't let next button choose forms not exist
        if(count>myform.length){
            count=myform.length;
        }
        /*i changed the form therefore element will change to get 
        the css clasname of display unvisible
        */

        for(let i =0;i<myform.length;i++){
            myform[i].className='';
        }
        /*i changed id of form therefore will element change to get 
        the css clasname of display visible
         */
        let ques = document.getElementById(count);
        ques.className="quesappear";//class visible
    }
    function prev1(){
        if(count > 1){
        count--;//prepare the counter to use it as id
        if(count == 3 && radiovalue(status) == 1){
            skip = 1;/*here i skip quesstion of case married if user not married*/
        }else if(count == 3 && typeof(radiovalue(status)) == 'undefined'){
            skip =1;/*i skip question related to status if user didn't choose social status*/

        }else if(count == 14&& sit() == 1){
            skip=3;/*i skip quesstion of partner when user is single*/
        }else{skip = 0;}

        }
        //this when skip happen
        count-=skip;
        //this if condition to don't let previous button choose forms not exist
        if(count<1){
            count=1;
        }
       /*i changed the form therefore element will change to get 
        the css clasname of display unvisible
        */
        for(let i =0;i<myform.length;i++){
            myform[i].className='';
        }

        /*i changed id of form therefore will element change to get 
        the css clasname of display visible
         */
        let ques = document.getElementById(count);
        ques.className="quesappear";//class visible

    }




    //لو هغير اسم الكلاس مينفعش استدعيه بالكلاس note
    //this loop i made for appear the ability of first language
    for(let i=0;i<ability1.length;i++){
        ability1[i].onclick=function(){
            for(let j=0;j<ability1.length;j++){
                //this loop i made to disappear the rest of other ability
            down[j].className="down";
        }
        down[i].className="up";
            }
        }

    //لو هغير اسم الكلاس مينفعش استدعيه بالكلاس note
    //this loop i made for appear the ability of second language
    for(let i=0;i<ability2.length;i++){
        ability2[i].onclick=function(){
            for(let j=0;j<ability2.length;j++){
                //this loop i made to disappear the rest of other ability
            down1[j].className="down";
        }
        down1[i].className="up";
            }
        }
    //لو هغير اسم الكلاس مينفعش استدعيه بالكلاس note
    //this loop i made for appear the ability of partner first language
    for(let i=0;i<ability3.length;i++){
        ability3[i].onclick=function(){
            for(let j=0;j<ability3.length;j++){
                //this loop i made to disappear the rest of other ability
            down2[j].className="down";
        }
        down2[i].className="up";
            }
        }
        






    
    next.addEventListener('click',next1);
    prev.addEventListener('click',prev1);
    score.addEventListener('click',year);

    



    //for page load
    setTimeout(() => {
        document.getElementsByClassName("loading")[0].className="stopload";
    
    }, 2000);
