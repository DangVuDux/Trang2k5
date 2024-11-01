onload = () => {
  const c = setTimeout(() => {
    document.body.classList.remove("not-loaded");

    const titles = ('Ngủ đuê bấm cái chóa giề').split('');
    const newTitle = 'I LOVE U ♡';
    const titleElement = document.getElementById('title');
    let index = 0;

    function appendTitle() {
      if (index < titles.length) {
        titleElement.innerHTML += titles[index];
        index++;
        setTimeout(appendTitle, 300); // 300ms delay for typing effect
      } else {
        // After the text is fully displayed, wait 5 seconds, then hide it and display a new message
        setTimeout(() => {
          titleElement.innerHTML = ''; // Clear the text

          // Display the new message with typing effect
          let newIndex = 0;
          function appendNewTitle() {
            if (newIndex < newTitle.length) {
              titleElement.innerHTML += newTitle[newIndex];
              newIndex++;
              setTimeout(appendNewTitle, 300); // 300ms delay for new text
            }
          }
          appendNewTitle();

        }, 2000); // 5000ms = 5 seconds
      }
    }

    appendTitle();

    clearTimeout(c);
  }, 1000);
};
