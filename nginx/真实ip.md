```nginx
server {
    location / {
        proxy_set_header X-Forwarded-For $remote_addr;
    }    
}

```



#### 转发路径

```bash
X-Forwarded-For: client, proxy1, proxy2

```


#### 获取ip list
```javascript 1.8
//  [ illegalIp, clientRealIp, proxyIp1, proxyIp2 ...]

const val = ctx.get('X-Forwarded-For');
let ips = val ? val.split(/\s*,\s*/) : [];
ips = ips.slice(-(maxProxyCount + 1));

```
