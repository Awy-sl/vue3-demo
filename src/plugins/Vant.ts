import { createApp } from 'vue'
const app = createApp(App)
import App from '@/App.vue'
import { Button, Swipe, SwipeItem, Icon, CountDown } from 'vant'

app.use(Button).use(Swipe).use(SwipeItem).use(SwipeItem)
   .use(Icon).use(CountDown)


export default app



