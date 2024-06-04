# OptimusMap

## Table of Contents

- [🚀Idea](#idea)
- [💻Architecture](#architecture)
- [📚Resources](#resources)
- [📞Contact](#contact)
- [📜License](#license)

## 🚀Idea 

In order to ensure the safety in a city, we need the surveillance camera locations to be optimal for crime/traffic monitoring. 
Hence, we came up with the idea of generating a layer on top of a base map to suggest/recommend the optimal locations.

1. Identify Key Locations:
   - Major intersections and roads leading to highways.
   - Areas with high traffic flow and potential escape routes.
   - Known hotspots for crime and previous incidents.

2. Obtain or Create a Base Map:
   - Use tools like Google Maps, OpenStreetMap, or city planning maps.

   Ensure the map includes street names, intersections, and major landmarks.

3. Mark Key Areas for Camera Placement:
   - Use digital mapping tools like Google Maps marker.

4. Consider Strategic Camera Placement:
   - Cover all entry and exit points at the intersection.
   - Place cameras at adjacent intersections and along major roads leading to highways.
   - Ensure coverage of both pedestrian and vehicle traffic.

## 💻Architecture & Prerequisites

After cloning the solution, please note that it works with the following:

1. Angular project: Update the following keys
   - In the chatgpt.service.ts -> YOUR_OPEN_API_KEY (you can generate a key from [OpenAI](https://platform.openai.com/api-keys))
   - In the index.html -> YOUR_GOOGLE_API_KEY (you can generate it from [Google Maps API Key](https://developers.google.com/maps/documentation/javascript/get-api-key))

![image](https://github.com/AlainGhawi/OptimusMap/assets/25838998/c37b4c6f-f80f-4010-92eb-e0861fbfe02d)

When you run the website it would display the following:

![image](https://github.com/AlainGhawi/OptimusMap/assets/25838998/01441172-c31f-4f7a-a5c3-991d8e28f7e2)


## 📚Resources

- [Denver Crime database](https://www.denvergov.org/opendata/dataset/city-and-county-of-denver-crime): Denver Open Data Catalog: Crime

## 📞Contact

Alain Ghawi - [LinkedIn](https://www.linkedin.com/in/alain-ghawi/) - ghawialain@gmail.com

## 📜License

Distributed under the MIT License. See [LICENSE](https://github.com/AlainGhawi/OptimusMap/blob/main/LICENSE) for more information.

