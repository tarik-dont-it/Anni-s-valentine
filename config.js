const CONFIG = {
    valentineName: "Anni",

    pageTitle: "Will You Be My Valentine? 💖",

    floatingEmojis: {
        hearts: ['❤️'], 
        bears: ['🧸']        
    },

    questions: {
        first: {
            text: "Do you want me ml?",                                  
            yesBtn: "Yes!",                                            
            noBtn: "No",                                            
            secretAnswer: "I want you so much ❤️"          
        },
        second: {
            text: "How much do you want me?",                         
            startText: "This much!",                                  
            nextBtn: "Next ❤️"                       
        },
        third: {
            text: "Will you be my Valentine? 🌹",
            yesBtn: "Yes!",                                          
            noBtn: "No"                                          
        }
    },

    loveMessages: {
        extreme: "DAAAAMN You want me that much?? 🚀💝", 
        high: "LESSGO! 🚀💝",     
        normal: "LESSGO! 🥰" 
    },

    celebration: {
        title: "Yay! M happy for that! 🎉💝💖💝💓",
        message: "Now you ll get something u always like, a big warm hug and a huge kiss!",
        emojis: "🎁💖🤗💝💋❤️💕"  
    },

    colors: {
        backgroundStart: "#ffafbd",     
        backgroundEnd: "#ffc3a0",        
        buttonBackground: "#ff6b6b",     
        buttonHover: "#ff8787",          
        textColor: "#ff4757"             
    },

    animations: {
        floatDuration: "15s",
        floatDistance: "50px",          
        bounceSpeed: "0.5s",            
        heartExplosionSize: 1.5         
    },

    music: {
        enabled: true,
        autoplay: true,
        musicUrl: "https://res.cloudinary.com/diqfvrch5/video/upload/v1770577802/CRO_-_Du_Lyrics_rtyuys.mp3",
        startText: "🎵 Play Music",
        stopText: "🔇 Stop Music",
        volume: 0.5
    }
};

window.VALENTINE_CONFIG = CONFIG; 
