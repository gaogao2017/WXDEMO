Page({
  data: {
    index: 0,
    multiArray: [
    ],
    objectMultiArray: [{
      "id": 1,
      "name": "无脊柱动物",
      "parentid": 0
    }, {
      "id": 2,
      "name": "脊柱动物",
      "parentid": 0
    }, {
      "id": 3,
      "name": "线形动物",
      "parentid": 1
    }, {
      "id": 4,
      "name": "环节动物",
      "parentid": 1
    }, {
      "id": 5,
      "name": "鱼",
      "parentid": 2
    }, {
      "id": 6,
      "name": "两栖动物",
      "parentid": 2
    }, {
      "id": 8,
      "name": "蚂蚁",
      "parentid": 3
    }, {
      "id": 9,
      "name": "蚂蟥",
      "parentid": 3
    }],
    multiIndex: [0, 0, 0],
    multiIndexid: [0, 0, 0]
  },
  initMultArray(objectMultiArray) {
    var firstarr = [];
    var secondarr = [];
    var thridarr = [];
    var firstid = 0,
      secondid = 0,
      thridid = 0;

    for (var i = 0; i < objectMultiArray.length; i++) {
      if (objectMultiArray[i].parentid == 0) {
        firstarr.push(objectMultiArray[i].name);
        if (firstid == 0) firstid = objectMultiArray[i].id;
        continue;
      }
      if (firstid != 0 && objectMultiArray[i].parentid == firstid) {
        secondarr.push(objectMultiArray[i].name);
        if (secondid == 0) secondid = objectMultiArray[i].id;
        continue;
      }
      if (secondid != 0 && objectMultiArray[i].parentid == secondid) {
        thridarr.push(objectMultiArray[i].name);
        if (thridid == 0) thridid = objectMultiArray[i].id;
      }
    }
    var multiArray = [firstarr, secondarr, thridarr]
    return multiArray;
  },
  selectColumnfirst(objectMultiArray, columnindex, itemindex) {

  },
  onLoad(e) {

    var objectMultiArray = this.data.objectMultiArray;
    this.setData({
      multiArray: this.initMultArray(objectMultiArray)
    });

  },
  getPickIDValue(multiIndex) {

    var objectMultiArray = this.data.objectMultiArray;
    var firstindex = multiIndex[0],
      secondindex = multiIndex[1],
      thridindex = multiIndex[2];
    var tmpfirstindex = 0,
      tmpsecondindex = 0,
      tmpthridindex = 0;
    var firstid = 0,
      secondid = 0,
      thridid = 0;

    for (var i = 0; i < objectMultiArray.length; i++) {
      if (objectMultiArray[i].parentid == 0) {
        if (tmpfirstindex == firstindex) {
          firstid = objectMultiArray[i].id;
        }
        tmpfirstindex++;
        continue;
      }
      if (firstid != 0 && objectMultiArray[i].parentid == firstid) {
        if (tmpsecondindex == secondindex) {
          secondid = objectMultiArray[i].id;
        }
        tmpsecondindex++;
        continue;
      }
      if (secondid != 0 && objectMultiArray[i].parentid == secondid) {
        if (tmpthridindex == thridindex) {
          thridid = objectMultiArray[i].id;
        }
        tmpthridindex++;
        continue;
      }
    }
    var multiID = [firstid, secondid, thridid]
    console.log(multiID);
    return multiID;
  },
  bindMultiPickerChange: function (e) {
    console.log('picker发送选择改变，携带值为', e, e.detail.value)
    this.getPickIDValue(e.detail.value)
    this.setData({
      multiIndex: e.detail.value
    })
  },
  bindMultiPickerColumnChange1: function (e) {

    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;

    var objectMultiArray = this.data.objectMultiArray;

    switch (e.detail.column) {
      case 0:
        var firstindex = data.multiIndex[0];

        var tmpfirstindex = 0;
        var firstid = 0,
          secondid = 0,
          thridid = 0;
        data.multiArray[1] = [];
        data.multiArray[2] = [];
        for (var i = 0; i < objectMultiArray.length; i++) {
          if (objectMultiArray[i].parentid == 0) {
            if (tmpfirstindex == firstindex) {
              firstid = objectMultiArray[i].id;
            }
            tmpfirstindex++;
            continue;
          }
          if (firstid != 0 && objectMultiArray[i].parentid == firstid) {
            data.multiArray[1].push(objectMultiArray[i].name);
            if (secondid == 0) secondid = objectMultiArray[i].id;
          }
          if (secondid != 0 && objectMultiArray[i].parentid == secondid) {
            data.multiArray[2].push(objectMultiArray[i].name);
            if (thridid == 0) thridid = objectMultiArray[i].id;
          }
        }

        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        var firstindex = data.multiIndex[0];
        var secondindex = data.multiIndex[1];
        var tmpfirstindex = 0;
        var tmpsecondindex = 0;
        var firstid = 0,
          secondid = 0,
          thridid = 0;
        data.multiArray[2] = [];
        for (var i = 0; i < objectMultiArray.length; i++) {
          if (objectMultiArray[i].parentid == 0) {
            if (tmpfirstindex == firstindex) {
              firstid = objectMultiArray[i].id;
            }
            tmpfirstindex++;
            continue;
          }
          if (firstid != 0 && objectMultiArray[i].parentid == firstid) {
            if (tmpsecondindex == secondindex) {
              secondid = objectMultiArray[i].id;
            }
            tmpsecondindex++;
            continue;
          }
          if (secondid != 0 && objectMultiArray[i].parentid == secondid) {
            data.multiArray[2].push(objectMultiArray[i].name);
            if (thridid == 0) thridid = objectMultiArray[i].id;
          }
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  },
  bindMultiPickerColumnChange: function (e) {
    console.log('修改的列为', e.detail.column, '，值为', e.detail.value);
    var data = {
      multiArray: this.data.multiArray,
      multiIndex: this.data.multiIndex
    };
    data.multiIndex[e.detail.column] = e.detail.value;
    switch (e.detail.column) {
      case 0:
        switch (data.multiIndex[0]) {
          case 0:
            data.multiArray[1] = ['扁性动物', '线形动物', '环节动物', '软体动物', '节肢动物'];
            data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
            break;
          case 1:
            data.multiArray[1] = ['鱼', '两栖动物', '爬行动物'];
            data.multiArray[2] = ['鲫鱼', '带鱼'];
            break;
        }
        data.multiIndex[1] = 0;
        data.multiIndex[2] = 0;
        break;
      case 1:
        switch (data.multiIndex[0]) {
          case 0:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['猪肉绦虫', '吸血虫'];
                break;
              case 1:
                data.multiArray[2] = [];
                break;
              case 2:
                data.multiArray[2] = ['蚂蚁', '蚂蟥'];
                break;
              case 3:
                data.multiArray[2] = ['河蚌', '蜗牛', '蛞蝓'];
                break;
              case 4:
                data.multiArray[2] = ['昆虫', '甲壳动物', '蛛形动物', '多足动物'];
                break;
            }
            break;
          case 1:
            switch (data.multiIndex[1]) {
              case 0:
                data.multiArray[2] = ['鲫鱼', '带鱼'];
                break;
              case 1:
                data.multiArray[2] = ['青蛙', '娃娃鱼'];
                break;
              case 2:
                data.multiArray[2] = ['蜥蜴', '龟', '壁虎'];
                break;
            }
            break;
        }
        data.multiIndex[2] = 0;
        console.log(data.multiIndex);
        break;
    }
    this.setData(data);
  }
})
