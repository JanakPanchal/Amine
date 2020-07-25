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
 "name":"scale-up",
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
 "name":"scale-down",
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
]

finalCssClass = ""



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
    this.finalCssClass = "."+data.name+" {animation: "+data.name
    return this.finalCssClass
  }
  

}
