import {
  request4
} from './request'


export function getDetail(id) {
  return request4({
    url: '/projectUser/' + id,
    // headers: {
    //   token: "eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ7XCJpZFwiOjYwLFwicGhvbmVcIjpcIjEzNzc3NzEyMzQ1XCIsXCJjb2RlXCI6XCIyNGEyYTE1MC0zNzY4LTRlOTUtYTc1ZS00NjQwNmE3NGQwNDBcIn0iLCJpc3MiOiJsb2dpbiIsImp0aSI6IjEyMy4xNTkuMjQuNiIsImlhdCI6MTU3NDkyODgyNCwiZXhwIjoxNTc2MTM4NDI0fQ.9nn9w3EdWbV7jPlS396Li3kf5_lZ1Bdv36qVvYMlCbM;"
    // }
    // params: {
    //   id
    // }
  })
}

export function getReta(type, size) {
  return request4({
    url: '/project/' + type,
    params: {
      size
    }
  })
}

//es6  
export class Goods {
  constructor(res) {
    this.title = res.name;
    this.desc = res.introduce;
    this.discount = "活动价";
    this.newPrice = res.beforeMoney;
    this.oldPrice = res.nowMoney;
    this.realPrice = res.beforeMoney;
    this.columns = ['销量' + res.profit, '收藏' + res.proportion + '人'];
    this.services = [{
        name: '退货补运费',
        // icon: '~assets/img/detail/cart.png'
        icon: "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp"
      },
      {
        name: '全国包邮',
        icon: "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp"
      }, {
        name: '7天无理由退货',
        icon: "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp"
      },
      {
        name: "72小时发货",
        icon: "https://img.alicdn.com/imgextra/i4/293185320/TB2MCfKrxGYBuNjy0FnXXX5lpXa_!!293185320.jpg_640x640q80_.webp"
      },
    ];
    //this.title = res.title
  }
}
export class Shop {
  constructor(res) {
    this.logo = 'https://img12.360buyimg.com/cms/jfs/t18538/18/2481691235/8072/92a70638/5af4f19dN46104fc8.jpg!q70.dpg.webp';
    this.name = res.auditingName;
    this.fans = 17145;
    this.sells = 57876;
    this.score = [{
      isBetter: false,
      name: '描述相符',
      score: 4.64
    }, {
      isBetter: true,
      name: '价格合理',
      score: 5
    }, {
      isBetter: false,
      name: '质量满意',
      score: 4.62
    }, ];
    this.goodsCount = 99
  }
}

export class GoodsParam {
  constructor() {
    // 注: images可能没有值(某些商品有值, 某些没有值)
    // this.image = info.images ? info.images[0] : '';
    this.image = "//img30.360buyimg.com/sku/jfs/t1/93676/39/246/120296/5daa6f9cE18820ae0/ddf5b94c8cbd57a7.jpg";
    // this.infos = info.set;
    this.infos = [{
      key: '搭配',
      value: "上衣+裤子"
    }, {
      key: '厂名',
      value: "复古民族chang"
    }, {
      key: '颜色',
      value: "黑白"
    }, {
      key: '厚薄',
      value: "普通"
    }, {
      key: '领型',
      value: "圆领"
    }, {
      key: '面料',
      value: " 涤纶 棉"
    }, {
      key: '适用年龄',
      value: "25-29周岁"
    }]
    // this.sizes = rule.tables;
    this.sizes = [
      [

        ['尺码', 'S', 'M', 'L', 'XL'],
        ['胸围', '100', '104', '108', '110'],
        ['肩宽', '36', '37', '38', '39'],
        ['裤长', '96', '97', '98', '99'],
        ['衣长', '54', '55', '56', '57'],
        ['袖长', '61', '62', '63', '64'],

      ],

    ]
  }
}
