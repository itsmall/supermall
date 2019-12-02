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
//es6  
export class Goods {
  constructor(res) {
    this.title = res.name;
    this.desc = "新款上市";
    this.discount = "活动价";
    this.newPrice = "￥" + res.beforeMoney;
    this.oldPrice = "￥" + res.nowMoney;
    this.realPrice = "￥" + res.beforeMoney;
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
    this.logo = '//img.alicdn.com/imgextra//27/c6/TB14zFfMpXXXXb0XXXXwu0bFXXX.png_100x100q90_.webp';
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
    // this.infos = info.set;
    this.infos = [{
      key: '图案',
      value: "复古,民族,字母,文字,数值"
    }, {
      key: '厂名',
      value: "复古民族chang"
    }, {
      key: '颜色',
      value: "黑白"
    }, {
      key: '尺寸',
      value: "S,M,L,XL,XXL"
    }]
    // this.sizes = rule.tables;
    this.sizes = [
      [
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
        [1, 2, 3, 4, 5, 6],
      ],

    ]
  }
}
