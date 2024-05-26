function search() {
  const query = document.getElementById('search-input').value.toLowerCase();
  let url;

  switch (query) {
      case 'girls fasion':
          url = 'girls.html';
          break;
      case 'all':
          url = 'index.html';
          break;
      case 'electronics':
            url = 'electronics.html';
            break;
      case 'deals':
            url = 'deals.html';
            break;
      case 'digital music':
            url = 'digital.html';
            break;
      case 'mans fasion':
            url = 'man.html';
            break;         
      // Add more cases as needed
      default:
          alert('No matching page found.');
          return;
  }

  window.location.href = url;
}
