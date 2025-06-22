    async function loadProducts() {
      try {
        const response = await fetch('http://a9f23146e22ec460b9aefdf7cd3b5690-917679185.eu-north-1.elb.amazonaws.com/api/products');
        const products = await response.json();
        const tbody = document.querySelector('#productsTable tbody');
        tbody.innerHTML = '';
        products.forEach(p => {
          const row = `<tr>
            <td>${p.id}</td>
            <td>${p.name}</td>
            <td>${p.quantity}</td>
            <td>€${p.price.toFixed(2)}</td>
            <td>${new Date(p.created_at).toLocaleString()}</td>
          </tr>`;
          tbody.innerHTML += row;
        });
      } catch (err) {
        console.error('Erreur lors du chargement des produits:', err);
      }
    }
    loadProducts();