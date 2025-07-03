# Weather Widget Card
---
> [!NOTE]
>
> Requires Middleware API.

![proxmox-widget-card](preview1.webp)

### Weather Data
Came from Open-Meteo using Home Assistant

#### Home Assistant endpoint

`https://<home-assistant-url>/api/states/<entity>`

### Weather Icons
Source: https://github.com/Makin-Things/weather-icons

### Sample API output
```json
[
  {
    "entity_id": "weather.weather_home",
    "state": "partlycloudy",
    "unit_of_measurement": null,
    "friendly_name": "Weather Home",
    "weatherIcon": "cloudy-3-day",
    "moreData": {
      "temperature": 31.1,
      "temperature_unit": "°C",
      "pressure_unit": "hPa",
      "wind_speed": 2.7,
      "wind_speed_unit": "km/h",
      "visibility_unit": "km",
      "precipitation_unit": "mm",
      "attribution": "Powered by Home Assistant",
      "friendly_name": "Weather Home",
      "supported_features": 0
    }
  },
  {
    "entity_id": "sensor.room_temperature",
    "state": "30.9",
    "unit_of_measurement": "°C",
    "friendly_name": "Room Temperature",
    "weatherIcon": "",
    "moreData": {}
  },
  {
    "entity_id": "sensor.living_room_temperature",
    "state": "31.7",
    "unit_of_measurement": "°C",
    "friendly_name": "Living Room Temperature",
    "weatherIcon": "",
    "moreData": {}
  }
]
```

