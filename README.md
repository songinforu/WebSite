- track.timer
```js 
params: {
    Pid: 页面唯一id,
    Pname: 页面名称,
    Ptime: 时间，是个数组[开始时间，结束时间]
    Pmsg: 描述信息
}
```

- track.events
```js 
params: {
    Pid: 页面唯一id,
    Pevent: 事件名称,
    Pdetail: 详细事件,
    Pmsg: 描述信息
}
```

- track.error
```js 
params: {
    Pid: 页面唯一id,
    Ptype: 错误类型,
    Pmsg: 描述信息
}
```
