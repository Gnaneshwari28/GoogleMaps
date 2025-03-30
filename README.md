# GoogleMaps
Google Maps Integration using Angular 17

## Overview
This project demonstrates the integration of Google Maps using two different approaches in an Angular 17 application. It provides an interactive map interface that allows users to explore locations using both direct embedding and dynamic URL sanitization.

## Features
- **Method 1: Direct iFrame Embedding**
  - Uses a simple `<iframe>` tag in the HTML file.
  - Embeds Google Maps directly with a predefined location.

- **Method 2: Using DomSanitizer**
  - Utilizes Angular's `DomSanitizer` service to dynamically sanitize and embed map URLs.
  - Provides a more flexible and secure way to load map locations dynamically.

## Technologies Used
- **Frontend:** Angular 17
- **Google Maps iFrame Integration**
- **Angular Services:** DomSanitizer for URL handling

## Prerequisites
- **Node.js and npm** must be installed.
- Install Angular 17 globally:
  ```sh
  npm install -g @angular/cli@17
  ```

## Setup and Installation
1. Clone the repository:
   ```sh
   git clone https://github.com/Gnaneshwari28/GoogleMaps.git
   cd GoogleMaps
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the Angular development server:
   ```sh
   ng serve
   ```
4. Open `http://localhost:4200/` in a browser to view the application.

## Usage
- The application showcases two different implementations of Google Maps.
- The first method directly embeds an iframe with a Google Maps link.
- The second method dynamically sanitizes and embeds Google Maps URLs using `DomSanitizer`.

## Future Enhancements
- Implement an interactive map with markers.
- Add user location detection and geolocation features.
- Enhance UI with more styling and customization options.

## Contributing
If you’d like to contribute:
1. Fork the repository.
2. Create a new branch (`feature-branch`).
3. Commit your changes.
4. Push to the branch and create a pull request.

## License
This project is licensed under the MIT License.

## Contact
For any inquiries or suggestions, feel free to reach out:
- GitHub: [Gnaneshwari28](https://github.com/Gnaneshwari28)

