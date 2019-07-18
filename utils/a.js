let app=getApp();
app.aa='a';
console.log('this is '+app.aa);
var animation=wx.createAnimation({
  duration:5000
})
animation.rotate(80);