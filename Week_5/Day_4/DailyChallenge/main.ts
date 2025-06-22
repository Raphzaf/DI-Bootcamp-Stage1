type User = {
  type: 'user';
  name: string;
  age: number;
};

type Product = {
  type: 'product';
  id: number;
  price: number;
};

type Order = {
  type: 'order';
  orderId: string;
  amount: number;
};

type DataItem = User | Product | Order;

function handleData(items: DataItem[]): string[] {
  return items.map((item) => {
    switch (item.type) {
      case 'user':
        return `👤 Hello ${item.name}, age ${item.age}`;
      case 'product':
        return `📦 Product #${item.id} costs $${item.price}`;
      case 'order':
        return `🧾 Order ${item.orderId} has amount $${item.amount}`;
      default:
        return `⚠️ Unknown item type`;
    }
  });
}
