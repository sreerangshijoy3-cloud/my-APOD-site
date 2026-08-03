NASA APOD Site

This is a small project I built to display NASA’s Astronomy Picture of the Day using their public API.

Every time you open the site, it fetches the latest image (or sometimes a video) from NASA and shows it along with the title and explanation. I made this to learn how APIs work, how to use environment variables safely, and how to deploy a project using GitHub Pages.

What it does
Fetches data from NASA’s APOD API
Displays the daily space image or video
Shows the title and explanation
Updates automatically every day
How it works

The app uses JavaScript to send a request to NASA’s API.
The API key is stored in a .env file during development and as a GitHub Secret when deployed.

Vite is used to run a local development server and to build the project for deployment.

Running locally

Clone the repo and install dependencies:

git clone https://github.com/sreerangshijoy3-cloud/my-APOD-site.git
cd my-APOD-site
npm install

Create a .env file in the root folder and add your API key:

VITE_NASA_API_KEY=your_api_key_here

Then run:

npm run dev
Deployment

The project is deployed using GitHub Actions.
The API key is added as a repository secret (VITE_NASA_API_KEY) so it is not exposed in the code.

Every time I push changes, GitHub automatically builds and updates the site.

Why I made this

I wanted to build something simple but real that uses an external API and deploy it properly. This project helped me understand how frontend apps fetch data, how environment variables work, and how automated deployment works.

Notes
The .env file is not uploaded to GitHub
The API key used here is from NASA’s free public API
This is a frontend-only project, so the key is not fully hidden
Future improvements
Add a date picker to view past images
Improve UI and animations
Add loading and error states
