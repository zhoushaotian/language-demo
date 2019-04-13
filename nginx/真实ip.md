```nginx
server {
    location / {
        proxy_set_header X-Forwarded-For $remote_addr;
    }    
}

```



####    转发路径

```bash
X-Forwarded-For: client, proxy1, proxy2

```


####    获取ip list(客户端伪装的ip处于第一个,后面的都是真实ip,所以第二个是真实的client ip)
```javascript 1.8
//  [ illegalIp, clientRealIp, proxyIp1, proxyIp2 ...]

const val = ctx.get('X-Forwarded-For');
let ips = val ? val.split(/\s*,\s*/) : [];
ips = ips.slice(-(maxProxyCount + 1));

```



####    客户端伪装ip
```bash
curl -H 'X-Forwarded-For: 1.1.1.1' http://yourdomain.com/api/resources
```
