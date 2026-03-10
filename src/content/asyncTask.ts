export const asyncTask = async () => {
  const sleep = (ms: number) => new Promise(resolve => setTimeout(resolve, ms));

  const randomTime = Math.floor(Math.random() * 1000) + 1000;
  await sleep(randomTime);
  const div = document.createElement('div');
  div.style.backgroundColor = 'green';
  div.style.padding = '10px';
  div.style.borderRadius = '5px';
  div.style.color = 'white';
  div.style.fontSize = '16px';
  div.style.fontWeight = 'bold';
  div.style.textAlign = 'center';
  div.id = 'shopsmart-div';
  div.innerHTML = `Hello, world! (after ${randomTime}ms)`;
  document.body.appendChild(div);

  // return the div
  return div;
};
