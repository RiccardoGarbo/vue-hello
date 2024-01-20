console.log('vue ok', Vue)
const { createApp } = Vue

const app = createApp({
    data() {
        return {
            message: 'Monkey D. Luffy',
            imgUrl: 'https://movieplayer.net-cdn.it/t/images/2023/08/07/one-piece-debutto-gear-5-luffy-anime-momento-storico_jpg_1600x900_crop_q85.jpg'
        }
    }
})
    ;

app.mount('#root')