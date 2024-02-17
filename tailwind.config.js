/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      fontFamily: {
        poppins: ['Poppins', 'sans-serif'],
        raleway: ['Raleway', 'sans-serif'],
        calligraffitti :['Calligraffitti','sans-serif']
       
      },
      colors:{
        
   Shade_1: "#0e0000",
    Shade_2: "#180100",
    Shade_3: "#220205",
    Shade_4: "#2c0310",
    Shade_5: "#36041a",
    Shade_6: "#400525",
    Shade_7: "#4a052f",
    Original: "#54063a",


            //Primary
            Primary_p50:"#ffefe6",
            Primary_p75:"#ffbe96",
            Primary_p100:"#ffa36b",
            Primary_p200:"#ff7b2b",
            Primary_Neutral:"#ff6000",
            Primary_p400:"#b34300",
            Primary_p500:"#9c3b00",
            // secondary color
            Secondary1_s50:"#eeeffc",
            Secondary1_s75:"#b8bdf3",
            Secondary1_s100:"#9ba2ee",
            Secondary1_s200:"#6f7ae6",
            Secondary1_Neutral:"#525fe1",
            Secondary1_s400:"#39439e",
            Secondary1_s500:"#323a89",

             // secondary color2
             Secondary2_s50:"#ece6e6",
             Secondary2_s75:"#af969a",
             Secondary2_s100:"#8e6b70",
             Secondary2_s200:"#5d2b32",
             Secondary2_Neutral:"#3c0008",
             Secondary2_s400:"#2a0006",
             Secondary2_s500:"#250005",
             
             //Background
             Background_b50:"#f9fcff",
             Background_b75:"#e8f3ff",
             Background_b100:"#dfeeff",
             Background_b200:"#d1e6ff",
             Background_Neutral:"#c7e1ff",
             Background_b400:"#8b9eb3",
             Background_b500:"#79899c",
             
             //Neutral
             Neutral_N50:"#eeeeee",
             Neutral_N75:"#bababa",
             Neutral_N100:"#9e9e9e",
             Neutral_N200:"#747474",
             Neutral_Neutral:"#575757",
             Neutral_N400:"#3d3d3d",
             Neutral_N500:"#353535",

             //Text color
             TextColor_T50:"#e9e9e9",
             TextColor_T75:"#a3a3a3",
             TextColor_T100:"#7d7d7d",
             TextColor_T200:"#454545",
             TextColor_Neutral:"#1f1f1f",
             TextColor_T400:"#161616",
             TextColor_T500:"#131313",
             
             text_disable:"#A3A3A3",
             border_Neutral:"#DCDCDC",
             success:"#12AA22",
             errorBackGround:"#FFE5E5",
             error:"#FF3838",
      }

    },
  },
  plugins: [
    require('tailwind-scrollbar-hide'),
  ],
}