//your JS code here. If required.
const bands = ['The Plot in You', 'The Devil Wears Prada', 'Pierce the Veil', 'Norma Jean', 'The Bled', 'Say Anything', 'The Midway State', 'We Came as Romans', 'Counterparts', 'Oh, Sleeper', 'A Skylit Drive', 'Anywhere But Here', 'An Old Dog'];
bands.sort()

  // Function to remove articles for sorting
    function stripArticle(name) {
      return name.replace(/^(a |an |the )/i, "").trim();
    }

    // Sort bands ignoring articles
    const sortedBands = bands.sort((a, b) => stripArticle(a).localeCompare(stripArticle(b)));

    // Display sorted list in HTML
    const bandList = document.getElementById("band");
    sortedBands.forEach(band => {
      const listItem = document.createElement("li");
      listItem.textContent = band;
      bandList.appendChild(listItem);
    });