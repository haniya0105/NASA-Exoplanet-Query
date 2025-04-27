// pages/api/getData.js

export default async function handler(req, res) {
    const response = await fetch('https://exoplanetarchive.ipac.caltech.edu/TAP/sync?query=select+hostname,discoverymethod,disc_year,disc_facility+from+pscomppars&format=json');
    res.status(200).json(await response.json());
}
