

export default{
    bullet:{
        speed:10,
    },
    enemy:{
        speed:() =>{
            return Math.floor(Math.random() * (10 - 4) + 4)
        }
    }
}