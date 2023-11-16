
export const particlesOption = {
  
  fullScreen: {enable:false},
  background:{
    color:{
      value:''
    },
  },
  fps_limit:120,
  interactivity:{
    events:{
      onClick:{
        enable:false,
        mode:'push',
      },
      onHover:{
        enable:true,
        mode:'repulse'
      },
      resize:true,
    },
    modes:{
      push:{
        quantity:90,
      },
      repulse: {
        distance: 90,
        duration: 0.4,
      },
    },
  },
  particles:{
    color:{
      value:'#fff',
    },
    links:{
      color:'#B7CADB',
      distance:150,
      enable:true,
      opacity: 0.5,
      width:1
    },
    collisions:{
      enable:true,
    },
    move:{
      direction:'none',
      enable:true,
      outModes:{
        default:"bounce",
      },
      speed: 1,
    },
    number:{
      density:{
        enable:true,
        area:800,
      },
      value:80,

    },
    opacity:{
      value:0.5,
    },
    shape:{
      type:'circle',
    },
    size:{
      value:{min:1 , max:5},
    },
  },
  detectRetina: true,

}