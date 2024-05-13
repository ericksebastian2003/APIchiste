


//Arreglos
const videosInfo =[
    {
        title:"Los mejores lenguajes para desarrollo back-end",
        duration : "3:10",
        link:"https://www.youtube.com/watch?v=UAt-Ae1YVaA&pp=ygUebWVqb3JlcyBsZW5ndWFqZXMgcGFyYSBiYWNrZW5k",
        channelName:"Programando Ando"
    },
    {
        title:"Los frameworks para desarrollo back-end",
        duration : "10:50",
        link:"https://www.youtube.com/watch?v=bDRFiomUfdc&pp=ygUebWVqb3JlcyBsZW5ndWFqZXMgcGFyYSBiYWNrZW5k",
        channelName:"React Programador"
    }

]
const informacion= videosInfo.map((u)=>{
    return{
        title:u.title.toUpperCase(),
        channelName:u.channelName.toUpperCase()
    }

})

console.log(informacion)