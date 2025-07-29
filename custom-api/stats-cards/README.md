# Stats Cards
---
> [!NOTE]
>
> Requires [stat-grid-style.css](/styles/stat-grid-style.css)
>
> Compatibility with:
> - [Glimpse](https://github.com/ralphocdol/glance-micro-scripts/blob/main/glimpse/README.md)
> - [Swipe Gesture](https://github.com/ralphocdol/glance-micro-scripts/blob/main/swipe-left-and-right/README.md)

## Screenshots
![desktop](preview1.png)
![mobile](preview2.png)

with subtitle/description:

![subtitled](preview3.png)

## Shared Environment Variable
```ini
DASHBOARD_ICONS=https://raw.githubusercontent.com/homarr-labs/dashboard-icons/refs/heads/main
```
or your local repository mirror.

## Page Property
```yml
pages:
    - name: Stats Cards
      columns:
        - size: full
          widgets:
            - type: split-column
              max-columns: 3
              widgets:
                  $include: immich.yml
                  $include: paperless-ngx.yml
```

inspired by [Homepage](https://gethomepage.dev/)