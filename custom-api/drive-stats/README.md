# Drive Stats
---
> [!NOTE]
>
> Requires Middleware API.

#### `row=1`
![drive-stats](preview/preview1.png)

#### `row=2`
```yml
 url: https:${MY_WEBSERVER_URL}/api/get-drive-stats?host=host1&row=2
```
![drive-stats-2-row](preview/preview2.png)


Hover:

![drive-stats-hover](preview/preview3.png)

Expected Middleware API return:
```jsonc
[
    {
        "filesystem": "/dev/sda1",
        "size": "60GB",
        "used": "37GB",
        "avail": "23GB",
        "use_percent": 61,
        "mount": "sda1",
        "host": "hass.local",
        "alias": "Home Assistant",  // from host=hass.local:22:Home%20Assistant
    },
]
```
