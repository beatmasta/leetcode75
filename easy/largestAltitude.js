const largestAltitude = function(gain) {
    let current_altitude = 0;
    let max_altitude = 0;

    for (let i = 0; i < gain.length; i++) {
        current_altitude += gain[i];
        max_altitude = Math.max(max_altitude, current_altitude);
    }

    return max_altitude;
};
