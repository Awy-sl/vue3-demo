// 头部轮播图  接口
interface topSwiper {
   id: String
   imgUrl: String
}
// 秒杀列表 接口
interface seckillItem {
   id: Number
   name: String
   img: String
   pick: Number
}

// 头部轮播图 
export const topSwiper: Array<topSwiper> = [
   {
      id: '1',
      imgUrl: require('@/assets/img/sw1.jpg'),
   },
   {
      id: '2',
      imgUrl: require('@/assets/img/sw2.jpg'),
   },
   {
      id: '3',
      imgUrl: require('@/assets/img/sw3.jpg'),
   }
]


// 秒杀列表
export const SeckillList: Array<seckillItem> = [
   {
      id: 1,
      name: '烤牛排',
      img: require('@/assets/img/mssw1.jpg'),
      pick: 98.0,
   },
   {
      id: 2,
      name: '铁板烧',
      img: require('@/assets/img/mssw2.jpg'),
      pick: 98.0,
   },
   {
      id: 3,
      name: '铁板烧',
      img: require('@/assets/img/mssw3.jpg'),
      pick: 98.0,
   },
   {
      id: 4,
      name: '铁板烧',
      img: require('@/assets/img/mssw4.jpg'),
      pick: 98.0,
   },
   {
      id: 5,
      name: '铁板烧',
      img: require('@/assets/img/mssw5.jpg'),
      pick: 98.0,
   },
   {
      id: 6,
      name: '铁板烧',
      img: require('@/assets/img/mssw6.jpg'),
      pick: 98.0,
   },
]