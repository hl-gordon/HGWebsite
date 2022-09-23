var myHeaders = new Headers();
myHeaders.append("User-Agent", "apifox/1.0.0 (https://www.apifox.cn)");

var requestOptions = {
   method: 'GET',
   headers: myHeaders,
   redirect: 'follow'
};

fetch("https://danmaku.suki.club/api/search/user/detail?uid=10021741", requestOptions)
   .then(response => response.text())
   .then(result => console.log(result))
   .catch(error => console.log('error', error));