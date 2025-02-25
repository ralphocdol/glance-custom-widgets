# Drive Stats
---

![drive-stats](../../screenshots/drive-stats.png)


Hover:

![drive-stats-hover](../../screenshots/drive-stats-hover.png)

This requires a web server which isn't provided.

However, the template can still be used. Expected API return is:
```json
[
    {
        "filesystem": "/dev/sda1",
        "size": "60GB",
        "used": "37GB",
        "avail": "23GB",
        "use_percent": 61,
        "mount": "sda1",
        "host": "hass.local",    // from hass.local:22 or just IP without port
    },
    {
        "filesystem": "/dev/sda2",
        "size": "80GB",
        "used": "30GB",
        "avail": "50GB",
        "use_percent": 37,
        "mount": "sda2",
        "host": "192.168.10.131",
    },    
]
```