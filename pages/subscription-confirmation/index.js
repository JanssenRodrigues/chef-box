import { Button } from "@mui/material";
import Link from "next/link";
import styles from "../../styles/Home.module.css";

const SubscriptionConfirmation = () => {
  return (
    <main className={styles.main}>
      <section className={styles.confirmSubscription}>
        <h1>ASSINATURA CONFIRMADA!</h1>
        <p>Em breve você receberá em seu endereço a sua ChefBox.</p>
        <p>Sua caixa chegará no dia 15 do mês subsequente à assinatura.</p>
        <Link href="/">
          <Button variant="contained">Voltar para a página inicial</Button>
        </Link>
      </section>
    </main>
  );
};

export default SubscriptionConfirmation;
