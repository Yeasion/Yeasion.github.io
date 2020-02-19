const ap = new APlayer({
    container: document.getElementById('aplayer'),
    fixed: true,
    autoplay: true,
    audio: [
      {
        name: '雨き声残響',
        artist: 'すぃ',
        url: 'http://nc01.sycdn.kuwo.cn/2e35b0071b38e73037a547e607c742e0/5e4d4ab6/resource/n2/68/76/2643244454.mp3',
        cover: 'https://y.gtimg.cn/music/photo_new/T002R300x300M000004AT7Ds06FL00.jpg?max_age=2592000',
      },
      {
      	name: 'ハレハレヤ',
      	artist: 'Sou',
      	url: 'http://www.170mv.com/kw/sg-sycdn.kuwo.cn/resource/n2/86/86/741041992.mp3',
      	cover: 'https://p3fx.kgimg.com/stdmusic/20190403/20190403005229772418.jpg',
      },
      {
      	name: 'Prover',
      	artist: 'milet',
      	url: 'http://eg.sycdn.kuwo.cn/a12b912160e2eaaea080e28981400615/5e4d4bb0/resource/n2/94/85/647347832.mp3',
      	cover: 'http://tiebapic.baidu.com/forum/w%3D580/sign=967298b1ecedab6474724dc8c737af81/bbb728738bd4b31cb57c72c190d6277f9f2ff8e7.jpg',
      }
    ]
});