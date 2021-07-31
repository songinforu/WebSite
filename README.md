- track.timer
```js 
params: {
    Pid: 页面唯一id,
    Pname: 页面名称,
    Ptime: 时间，是个数组[开始时间，结束时间]
    Pmsg: 描述信息
}
```

- track.event
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

------------------------------------------

- 获取当前PUid所有页面

```js
url: '/page/get'
method: GET
params: {
    PUid
}
response: {
    status: 200,
    message: "数据获取成功",
    data: [
        {Pid: "pid1"}, 
        {Pid: "pid2"}, 
        {Pid: "pid3"}, 
        {Pid: "pid5"}
    ]
}
```

- 获取当前页面所有时间统计
```js
url: '/timer/get'
method: GET
params: {
    Pid: 页面id
    PUid: 用户id
}
```

- 获取当前页面所有事件统计
```js
url: '/events/get'
method: GET
params: {
    Pid: 页面id
    PUid: 用户id
}
```

- 获取当前页面所有错误监控统计
```js
url: '/error/get'
method: GET
params: {
    Pid: 页面id
    PUid: 用户id
}
```
