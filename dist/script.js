const recipientInput = document.querySelector('#recipient');
const address = document.querySelector('#sample-address');
const sampleName = document.querySelector('#sample-name');

recipientInput.addEventListener('input', () => {
  const name = recipientInput.value.trim();
  const slug = name
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 32);

  address.textContent = `${slug || 'nama'}.itsforyou.web.id`;
  sampleName.textContent = name || 'kamu';
});
