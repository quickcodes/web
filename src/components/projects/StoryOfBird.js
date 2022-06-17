import React from "react";
import Header from "../utils/Header";
import HeaderIntro from "../HeaderIntro";
// import Coding from "./BlogList/Coding";

export default function StoryOfBird() {
  return (
    <div>
      <div className="container mt-5 ml-5 mr-5">
        <div className="row">
          <div className="col-3 w-30 p-3 my-5" style={{ minWidth: "250px" }}>
            <Header />
          </div>
          {/* Body area  */}
          <div className="col-9" style={{ minWidth: "400px" }}>
            {/* -------------------------------------------------------------------- */}
            <div className="container">
              <HeaderIntro />
              <div className="col mx-auto py-5 custom-border">
                <div className="container">
                  <div className="row">
                    <div className="col-5" style={{ minWidth: "300px" }}>
                      {/* add image here  */}
                      <img src="images/1227.jpg" />
                    </div>
                    <div className="col-7 pt-3" style={{ minWidth: "300px" }}>
                      {/* Text area  */}

                      <h2 className="text-green coding-font style-h2">
                        /story-of-bird
                      </h2>
                      <p
                        className="text-white coding-font"
                        style={{ fontSize: "large" }}
                      >
                        A true story of someone, somewhere on earth.
                      </p>
                      {/* <p
                        className="text-white coding-font"
                        style={{ fontSize: "medium" }}
                      >
                        A fine quotation is a diamond on the finger fo a man of wit, and a pebble in the hand of fool.
                        <span className="bg-color-custom">
                            Tell me about yourself?
                          </span>{" "}
                          It almost feels like someone allowed me to sing an old
                          song. Same lyrics with some variables in it.
                      </p> */}
                      {/* <p className="text-white  coding-font"
                          style={{ fontSize: "medium" }}>
                          Maybe you are expecting somthing like - My name is
                          <span className="text-primary"> $FULL_NAME </span>I am
                          <span className="text-primary"> $PROFESSION </span>
                          and i live in
                          <span className="text-primary"> $CITY. </span>
                          But Putting variables in a shity old 90's line will not
                          define who you are right?
                        </p> */}
                    </div>
                  </div>
                </div>

                {/* oter text  */}
                {/* oter text  */}
                <div className="coding-font text-white mt-2">
                  <h1 className="text-green">Bird and Cage</h1>

                  <div>
                    {/* <blockquote class="blockquote">
                      <p class="mb-0">Book: <span className="bg-color-custom">Attitude is Everything</span></p>
                      <footer class="blockquote-footer">
                        Jeff keller{" "}
                        <cite title="Source Title">Source Title</cite>
                      </footer>
                    </blockquote> */}

                    <div style={{ fontSize: "medium" }}>
                      <p className="custom-border p-2">
                        Ek baar ki baat hai, ek chidiya or ek insan ki bohot
                        gehri dosti thi. Vo bohot acche dost the. har waqt sath
                        rehte h, ek dusre k sath bohot happy the, aesa lagta hi
                        nhi tha ki vo chidiya kaid h ya kisi ki gulam h. pr ek
                        din us chidiya or us insan m ladai hogyi or us chidiya
                        ne ghusse m us insan ko chonch maar di ye samajh kr uske
                        pass us insan ko sudhare ka samjhane ka hak h, pr vo ye
                        baat bhul gyi thi ki aakhir kaar thi to vo chidiya hi ek
                        bird, usse uske malik k khilaf jaane ka hak nhi h
                      </p>

                      <p className="custom-border p-2">
                        Uske maalik ne bhi ghusse m aakr us chidiya ko pinjre m
                        band krdiya ye soch kr ki agar chidiya tadpegi, zada
                        pareshan hogi to ushe wapas nikal lega. Ye soch kr us
                        insan ne ushe pinjre m band krdiya or pinjre ko kisi
                        kone m rakh kr apni life m vyasth hogya.
                      </p>

                      <p className="custom-border p-2">
                        kai din nikal gye, dekhte hi dekhte mahine nikalne lage
                        vo chidiya tadapti rahi, fatfadati rahi us pinjre m apna
                        sar maar kr us insan ko us malik ko pukarti rahi. ki
                        ushe bahar nikalo. pr kyuki vo pinjra kisi kone m padha
                        tha or us pr kisi ne black kapda bhi dhak diya tha. uspr
                        kisi ki nazar nhi padhti thi.
                      </p>

                      <p className="custom-border p-2">
                        fir ek din ayaa jab vo chidiya ghayal hogyi, ushe har kosish
                        kri apni us insan se milne ki jo vo kr skti thi. Pr vo insan 
                        ko to us chidiya ki khabar tk nhi thi. ya mano voto bhul sa gya tha...
                      </p>


                      <p className="custom-border p-2">
                        us din chidiya samajh gyi ki ushe is pinjre m marne k leye chod diya gya h. vo samajh gyi thi ki uski kya value hai. uski kya okkat hai.
                        us din k baad se chidiya ne us pinjre se dosti krna sikhna chalu krdiya.
                        kyuki vo ye samajh gyi thi ki us insan ne ushe vese hi nikal diya diya jese
                        daal m se kankad. us chidiya ne khud ko sambhala apne zakhm, apne ghaav 
                        ko chupaya, taki vo aage badh ske. apne pairo pr khadi ho skte
                      </p>


                      <p className="custom-border p-2">
                        kai hafto baad us fir us insan ko yaad ayaa ki usne us chidiya ko 
                        pinjre m band kra hua h. usne ek choti si lakdi uthayi or us pinjre ko 
                        khola or us lakdi se usse hila kr dekhne lgaa ki chidiya zinda h ya mar gyi.
                        usne ushe hila kr dekha to ushe dikha ki vo chidiya kai jagah se ghayal h.
                        pr us samay tk chidiya bohot acchi tarah samajh chuki thi ki vo sirf ek bird h sirf ek bird...  
                      </p>


                      <p className="custom-border p-2">
                        vo insan jab us chidiya ko lakdi se hila kr dekh rha tha tabh usne us chidiya se kha
                        ki m to tumhara intzaar kr rha tha ki tum mujhe ek baar bulati to shi... m ajataa
                        fir chidiya kuch ne ushe bataya ki kya kya hua tha. 
                      </p>

                      <p className="custom-border p-2">
                        us insan se vo bante suni or wapas us chidiya ko ushi pinjre m band kr kr us kone 
                        rakh diya. us chidiya k saare ghaav taza krkr wapas ushe ushi pinjre m kaid krdiya. 
                      </p>


                      <p className="custom-border p-2">
                        Shayad yhi us chidya ki asli kimat h ki ushe bas insan k matlab k leye rakha jata h.
                        uski feelings ki koi kadr nhi hoti, ushe jab marzi cahe pinjre m kaid kra jaa skta h.
                        jab marzi cahe uske zakhmo ko taza kra ja skta h.  
                      </p>


                      <p className="custom-border p-2">
                        Yhi h us chidiya ki zindgi. <br/>
                        yhi h us chidiya ki zindgi
                      </p>


                      <p className="custom-border p-2 h2">
                        Aapke kitmi samay ko is blog pr lagane k leye bohot bohot shukriya.
                      </p>

                    </div>
                  </div>
                </div>
              </div>
            </div>
            {/* -------------------------------------------------------------------- */}
          </div>
        </div>
      </div>
    </div>
  );
}
