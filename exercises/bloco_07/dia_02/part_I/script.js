const order = {
  name: 'Rafael Andrade',
  phoneNumber: '11-98763-1416',
  address: {
    street: 'Rua das Flores',
    number: '389',
    apartment: '701',
  },
  order: {
    pizza: {
      margherita: {
        amount: 1,
        price: 25,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
    drinks: {
      coke: {
        type: 'Coca-Cola Zero',
        price: 10,
        amount: 1,
      }
    },
    delivery: {
      deliveryPerson: 'Ana Silveira',
      price: 5,
    }
  },
  payment: {
    total: 60,
  },
};

const customerInfo = (order) => {
  // Adicione abaixo as informações necessárias.
  const delivery = order.order.delivery;
  const { deliveryPerson } = delivery;
  const { name, phoneNumber, address } = order;
  const { street, number, apartment } = address;

  console.log(`Olá ${deliveryPerson}, entrega para: ${name}, Telefone: ${phoneNumber}, R. ${street}, Nº: ${number}, AP: ${apartment}`);
}

customerInfo(order);

const orderModifier = (order) => {
  // Adicione abaixo as informações necessárias.
  const modifiedName = {
    name: 'Luiz Silva',
  }
  const modifiedOrder = {
    pizza: {
      muzzarela: {
        amount: 1,
        price: 20,
      },
      pepperoni: {
        amount: 1,
        price: 20,
      }
    },
  }  
  const modifiedPayment = {
    payment: {
      total: 50
    }
  }
  const currentOrder = order.order;
  Object.assign(currentOrder, modifiedOrder)
  Object.assign(order, modifiedName, currentOrder, modifiedPayment);
  const { pizza, drinks } = order.order;
  const { name, payment } = order;
  const pizzasOrder = Object.keys(pizza);
  const drinksOrder = Object.keys(drinks);

  console.log(
    `Olá ${name}, o total do seu pedido de ${pizzasOrder[0]}, ${pizzasOrder[1]} e ${drinks[drinksOrder[0]].type} é R$ ${payment.total},00.`
    );
}

orderModifier(order);