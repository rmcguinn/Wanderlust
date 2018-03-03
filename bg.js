// const bgimages = ['cave-2', 'city-fence-2', 'cliff', 'fishing', 'overlooking-city', 'red-mountains-no', 'stars', 'trees', 'water-rocks', 'window'];
const bgimages = ['city-fence-2', 'cliff', 'overlooking-city', 'red-mountains-no', 'trees', 'water-rocks'];


window.onload = function init() {
    const random = Math.floor(Math.random() * bgimages.length);
    console.log(random);
    bg1 = bgimages[random];
    if (random == 3) {
        document.documentElement.style.background = 'url(img/' + bg1 + '.jpg), #1a1a1a';
        document.documentElement.style.backgroundSize = 'cover';
        document.documentElement.style.backgroundPosition = 'center';
    } else {
    document.documentElement.style.background = 'linear-gradient( rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url(img/' + bg1 + '.jpg)';
    document.documentElement.style.backgroundSize = 'cover';
    document.documentElement.style.backgroundPosition = 'center';
    };
}