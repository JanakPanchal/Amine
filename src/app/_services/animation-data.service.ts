import { Injectable } from '@angular/core';





@Injectable({
  providedIn: 'root'
})
export class AnimationDataService {

  constructor() { }

  finalData:any
  
  listOfAnimation = [
    {
      "name":  "Basic",
      "data":[
      {
        "name": "scale-up",
      },
      {
        "name": "scale-down"
      },
      {
        "name": "rotate"
      },
      {
        "name": "rotate-scale"
      },
      {
        "name": "rotate-90"
      },
      {
        "name": "flip"
      },
      {
        "name": "flip-2"
      },
      {
        "name": "flip-scale"
      },
      {
        "name": "flip-scale-2"
      },
      {
        "name": "swing"
      },
      {
        "name": "slide"
      },
      {
        "name": "slide-bck"
      },
      {
        "name": "slide-fwd"
      },
      {
        "name": "slide-rotate"
      },
      {
        "name": "shadow-drop"
      },
      {
        "name": "shadow-drop-2"
      },
      {
        "name": "shadow-pop"
      },
      {
        "name": "shadow-inset"
      }
        
     ]
    },
    {
      "name":  "Entrances",
      "data":[
      {
        "name": "scale-in"
      },
      {
        "name": "rotate-in"
      },
      {
        "name": "rotate-in-2"
      },
      {
        "name": "swirl-in"
      },
      {
        "name": "flip-in"
      },
      {
        "name": "slit-in"
      },
      {
        "name": "slide-in"
      },
      {
        "name": "slide-in-fwd"
      },
      {
        "name": "slide-in-bck"
      },
      {
        "name": "slide-in-blurred"
      },
      {
        "name": "slide-in-elliptic"
      },
      {
        "name": "bounce-in"
      },
      {
        "name": "roll-in"
      },
      {
        "name": "roll-in-blurred"
      },
      {
        "name": "tilt-in"
      },
      {
        "name": "tilt-in-fwd"
      },
      {
        "name": "swing-in"
      },
      {
        "name": "fade-in"
      },
      {
        "name": "puff-in"
      },
      {
        "name": "flicker-in"
      }
    ]
     
    },
    {
      "name":  "Exits",
      "data":[
      {
        "name": "scale-out"
      },
      {
        "name": "rotate-out"
      },
      {
        "name": "rotate-out-2"
      },
      {
        "name": "swirl-out"
      },
      {
        "name": "flip-out"
      },
      {
        "name": "slit-out"
      },
      {
        "name": "slide-out"
      },
      {
        "name": "slide-out-bck"
      },
      {
        "name": "slide-out-fwd"
      },
      {
        "name": "slide-out-blurred"
      },
      {
        "name": "slide-out-elliptic"
      },
      {
        "name": "bounce-out"
      },
      {
        "name": "roll-out"
      },
      {
        "name": "roll-out-blurred"
      },
      {
        "name": "swing-out"
      },
      {
        "name": "fade-out"
      },
      {
        "name": "puff-out"
      },
      {
        "name": "flicker-out"
      }
    ]
    },
    {
      "name":"Text",
      "data": [
      {
        "name": "tracking-in"
      },
      {
        "name": "tracking-out"
      },
      {
        "name": "focus-in"
      },
      {
        "name": "blur-out"
      },
      {
        "name": "flicker"
      },
      {
        "name": "shadow-drop"
      },
      {
        "name": "shadow-pop"
      },
      {
        "name": "pop-up"
      }
    ]
    },
    {
      "name":"Attention",
      "data": [
      {
        "name": "vibrate"
      },
      {
        "name": "flicker"
      },
      {
        "name": "shake"
      },
      {
        "name": "jello"
      },
      {
        "name": "wobble"
      },
      {
        "name": "bounce"
      },
      {
        "name": "pulsate"
      },
      {
        "name": "blink"
      }
    ]
    },
    {
      "name":"Background",
      "data": [
      {
        "name": "ken-burns"
      },
      {
        "name": "bg-pan"
      },
      {
        "name": "color-change"
      }
    ]
    }
]


listOfSubAniamtion =  [
  {
    "name": "scale-up",
    "data": [
      {
        "name": "scale-up-center",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe": "@keyframes scale-up-center{0%{transform:scale(.5)}100%{transform:scale(1)}}"
      },
      {
        "name": "scale-up-top",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe": "@keyframes scale-up-top{0%{transform:scale(.5);transform-origin:50% 0}100%{transform:scale(1);transform-origin:50% 0}}"
      },
      {
        "name": "scale-up-tr",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe": "@keyframes scale-up-tr{0%{transform:scale(.5);transform-origin:100% 0}100%{transform:scale(1);transform-origin:100% 0}}"
      },
      {
        "name": "scale-up-right",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe":"@-webkit-keyframes scale-up-right{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:100% 50%;transform-origin:100% 50%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%}}@keyframes scale-up-right{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:100% 50%;transform-origin:100% 50%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 50%;transform-origin:100% 50%}}"
      },
      {
        "name": "scale-up-br",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe":"@-webkit-keyframes scale-up-br{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}}@keyframes scale-up-br{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:100% 100%;transform-origin:100% 100%}}"

      },
      {
        "name": "scale-up-bottom",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;",
        "keyframe":"@-webkit-keyframes scale-up-bottom{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 100%;transform-origin:50% 100%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%}}@keyframes scale-up-bottom{0%{-webkit-transform:scale(.5);transform:scale(.5);-webkit-transform-origin:50% 100%;transform-origin:50% 100%}100%{-webkit-transform:scale(1);transform:scale(1);-webkit-transform-origin:50% 100%;transform-origin:50% 100%}}"
      },
      {
        "name": "scale-up-bl",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-left",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-tl",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-hor-center",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-hor-left",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-hor-right",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-ver-center",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-ver-top",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      },
      {
        "name": "scale-up-ver-bottom",
        "value": "cubic-bezier(0.390, 0.575, 0.565, 1.000) both ;"
      }
    ]
  },
  {
    "name": "scale-down",
    "data": [
      {
        "name": "scale-up-center"
      },
      {
        "name": "scale-up-top"
      },
      {
        "name": "scale-up-tr"
      },
      {
        "name": "scale-up-right"
      },
      {
        "name": "scale-up-br"
      },
      {
        "name": "scale-up-bottom"
      },
      {
        "name": "scale-up-bl"
      },
      {
        "name": "scale-up-left"
      },
      {
        "name": "scale-up-tl"
      },
      {
        "name": "scale-up-hor-center"
      },
      {
        "name": "scale-up-hor-left"
      },
      {
        "name": "scale-up-hor-right"
      },
      {
        "name": "scale-up-ver-center"
      },
      {
        "name": "scale-up-ver-top"
      },
      {
        "name": "scale-up-ver-bottom"
      }
    ]
  },
  {
    "name": "flip-scale-2",
    "data": [
      {
        "name": "flip-scale-2-hor-top",
        "value": "linear both;"
      },
      {
        "name": "flip-scale-2-ver-right ",
        "value": "linear both;"
      },
      {
        "name": "flip-scale-2-hor-bottom",
        "value": "linear both;"
      },
      {
        "name": "flip-scale-2-ver-left",
        "value": "linear both;"
      }
    ]
  }
]

finalCssClass = ""
finalKeyFrame : ""
finalAminationSec = 1
finalDyamicStyle



  getListOfAnmimation(type){
    this.listOfAnimation.forEach(e => {
        if(e.name === type){
          this.finalData = e.data
        }
    })
    return this.finalData
  }

  getListOfSubAnmimation(type){
    this.listOfSubAniamtion.forEach(e => {
        if(e.name === type){
          this.finalData = e.data
        }
    })
    return this.finalData
  }


  generateCssOutput(data){
    console.log("Service" , data)
    this.finalDyamicStyle = "animation: "+data.name+" "+this.finalAminationSec+"s "+ data.value 
    this.finalCssClass = "."+data.name+" { animation: "+data.name+" "+this.finalAminationSec+"s "+ data.value + "}"
    this.finalKeyFrame = data.keyframe
    return { classCss :  this.finalCssClass , keyFrame : this.finalKeyFrame } 
  }
  

}
