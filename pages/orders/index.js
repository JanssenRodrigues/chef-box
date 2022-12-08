import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders, ordersSelector } from "../../components/ducks/orders";
import { userSelector } from "../../components/ducks/user";
import styles from "../../styles/Home.module.css";

const Orders = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const { userData, isLogged } = useSelector(userSelector);
  const { list } = useSelector(ordersSelector);

  useEffect(() => {
    if (!isLogged) {
      router.push("/");
    }
    if (userData.id) {
      dispatch(getOrders(userData.id));
    }
  }, []);

  if (!list) {
    return null;
  }

  return (
    <main className={styles.checkoutProductContainer}>
      {list.map((order) => {
        const { address, fullName, creditCardNumber } = JSON.parse(
          order.content
        );
        const now = new Date();
        const orderDate = new Date(order.created_at);
        const status = now.setDate(now.getDate() - 15) > orderDate;

        return (
          <section key={order.id} className={styles.order}>
            <span className={styles.revenueOrder}>{`Pedido #${order.id}`}</span>
            <p>
              <strong>Endereço de entrega: </strong>
              {address}
            </p>

            <p>
              <strong>Destinatário: </strong>
              {fullName}
            </p>

            <p>
              <strong>Método de pagamento: </strong>
              Cartão de crédito com final {creditCardNumber.slice(-4)}
            </p>

            <p>
              <strong>Data do pedido: </strong>
              {orderDate.toLocaleDateString("pt-br")}
            </p>

            <p>
              <strong>Status: </strong>
              {status ? "Entregue" : "À caminho"}
            </p>

            <p>
              <strong>Total: </strong>R$ 99,90
            </p>
          </section>
        );
      })}
    </main>
  );
};
export default Orders;
